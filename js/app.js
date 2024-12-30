

getPriceStore = () => {
	const prices =localStorage.getItem("prices");
	if (prices) {
		return new Map(JSON.parse(prices));
	}
	return prices;
}

let recalculate = false;

const allMaterials = [];
class Material {
	id;
	name;
	quality;
	priceOrg;
	places;
	level;
	picture;
	fixPrice;
	
	constructor (jsonObject) {
		this.id = jsonObject.id;
		this.name = jsonObject.name;
		this.quality = jsonObject.quality;
		this.priceOrg = jsonObject.price;
		this.places = jsonObject.places;
		this.level = jsonObject.level;
		this.picture = jsonObject.picture;
		this.fixPrice = jsonObject.fixPrice;
	}

	get price() {
		const prices = getPriceStore();
		if (prices && prices.has(this.id)) {
			return prices.get(this.id);
		}
		return this.priceOrg;
	}

	set price(price) {
		let prices = getPriceStore();
		if (!prices) {
			prices = new Map();
		}
		prices.set(this.id, parseInt(price));
		localStorage.setItem("prices", JSON.stringify([...prices.entries()]));
	}

	resetPrice = () => {
		const prices = getPriceStore();
		if (prices && prices.has(this.id)) {
			prices.delete(this.id);
			localStorage.setItem("prices", JSON.stringify([...prices.entries()]));
		}
	}

	hasCustomPrice = () => {
		const prices = getPriceStore();
		return prices && prices.has(this.id);
	}
	
	calcPrice = (amount) => this.price * amount;
}
materialsJSON.forEach(mat => {
	let material = new Material(mat);
	allMaterials.push(material);
});
materials_arch_JSON.forEach(mat => {
	let material = new Material(mat);
	allMaterials.push(material);
});

const craftables = [];
class Craftable {
	id;
	name;
	description;
	profession;
	type;
	quality;
	picture;
	requiredMaterials;
	referencedMaterials;
	requiredCraftables;
	referencedCraftables;
	initialzed;
	
	constructor(jsonObject) {
		this.id = jsonObject.id;
		this.name = jsonObject.name;
		this.description = jsonObject.description;
		this.profession = jsonObject.profession;
		this.type = jsonObject.type;
		this.quality = jsonObject.quality;
		this.picture = jsonObject.picture;
		this.requiredMaterials = jsonObject.mats;
		this.requiredCraftables = jsonObject.craftables;
		this.initialzed=false;
	}

	init = () => {
		this.materialItems();
		//console.log('Materials', this.referencedMaterials);
		this.craftableItems();
		//console.log('Craftables', this.referencedCraftables);
		this.initialzed=true;
	}
	
	containsMat = (matItemId) => this.requiredMaterials && this.requiredMaterials.filter(mat => {return mat.id == matItemId}).length > 0
	
	materialItems = () => {
		if (!this.referencedMaterials) {
			this.referencedMaterials = allMaterials.filter(matItem => this.containsMat(matItem.id));
		}
		return this.referencedMaterials;
	}

	materialItem = (matItemId) => {
		if (!this.initialzed) {
			this.init();
		}
		try {
			for (const material of this.referencedMaterials) {
				if(matItemId == material.id) {
					return material;
				}
			}
			return allMaterials.filter(matItem => matItem.id == matItemId)[0];
		} catch (e) {
			console.log('error for id: ' + matItemId);
		}
	}
	
	calculateMatCost = () => {
		let cost = 0;
		if (this.requiredMaterials || this.requiredMaterials.length > 0) {
			for (const requiredMaterial of this.requiredMaterials) {
				let material = this.materialItem(requiredMaterial.id);
				try {
					cost += material.calcPrice(requiredMaterial.amount);
				} catch (error) {
					console.log('error for material', requiredMaterial);
					console.log(error);
				}
			}
		}
		return cost;
	}
	
	materials = (parentAmount = 1) => {
		let materialMap = {};
		if (this.requiredMaterials || this.requiredMaterials.length > 0) {
			for (const requiredMaterial of this.requiredMaterials) {
				materialMap[requiredMaterial.id] = requiredMaterial.amount * parentAmount;
			}
		}
		if (this.requiredCraftables || this.requiredCraftables.length > 0) {
			for (const requiredCraftable of this.requiredCraftables) {
				let craftableObj = this.craftableItem(requiredCraftable.id);
				//console.log('craftable', requiredCraftable);
				let childMaterials = craftableObj.materials(requiredCraftable.amount * parentAmount);
				for (const [key, childVvalue] of Object.entries(childMaterials)) {
					let val = materialMap[key];
					if (val) {
						materialMap[key] = val + childVvalue;
					} else {
						materialMap[key] = childVvalue;
					}
				}
			}
		}
		return materialMap;
	}
	
	containsCraftItem = (craftItemId) => this.requiredCraftables && this.requiredCraftables.filter(craftable => craftable.id == craftItemId).length > 0
	
	craftableItems = () => {
		if (!this.referencedCraftables) {
			this.referencedCraftables = craftables.filter(craftItem => this.containsCraftItem(craftItem.id));
		}
		return this.requiredCraftables;
	}

	craftableItem = (craftItemId) => {
		if (!this.initialzed) {
			this.init();
		}
		for (const craftableObj of this.referencedCraftables) {
			if (craftItemId == craftableObj.id) {
				return craftableObj;
			}
		}
		return craftables.filter(craftItem => craftItem.id == craftItemId)[0];
	}
	
	calculateCraftCost = () => {
		if (this.totalCosts && !recalculate) {
			return this.totalCosts;
		}
		let cost = this.calculateMatCost();
		if (this.requiredCraftables || this.requiredCraftables.length > 0) {
			for (const requiredCraftable of this.requiredCraftables) {
				let craftableObj = this.craftableItem(requiredCraftable.id);
				//console.log('craftable', requiredCraftable);
				cost += craftableObj.calculateCraftCost() * requiredCraftable.amount;
			}
		}
		this.totalCosts = cost;
		return cost;
	}
	
	craftables = (parentAmount = 1) => {
		let craftablesMap = {};
		if (this.requiredCraftables || this.requiredCraftables.length > 0) {
			for (const requiredCraftable of this.requiredCraftables) {
				craftablesMap[requiredCraftable.id] = requiredCraftable.amount * parentAmount;
				let craftableObj = this.craftableItem(requiredCraftable.id);
				//console.log('craftable', requiredCraftable);
				let childCraftables = craftableObj.craftables(requiredCraftable.amount * parentAmount);
				for (const [key, childValue] of Object.entries(childCraftables)) {
					let val = craftablesMap[key];
					if (val) {
						craftablesMap[key] = val + childValue;
					} else {
						craftablesMap[key] = childValue;
					}
				}
			}
		}
		return craftablesMap;
	}
}
craftables_ct_JSON.forEach(craft => {
	let craftable = new Craftable(craft);
	craftables.push(craftable);
});
craftables_bio_JSON.forEach(craft => {
	let craftable = new Craftable(craft);
	craftables.push(craftable);
});
craftables_kf_JSON.forEach(craft => {
	let craftable = new Craftable(craft);
	craftables.push(craftable);
});
craftables_synth_JSON.forEach(craft => {
	let craftable = new Craftable(craft);
	craftables.push(craftable);
});
craftables_wb_JSON.forEach(craft => {
	let craftable = new Craftable(craft);
	craftables.push(craftable);
});
craftables_rb_JSON.forEach(craft => {
	let craftable = new Craftable(craft);
	craftables.push(craftable);
});


const caftableItemSelect = document.getElementById("caftableItem");
const $caftableItemSelect2 = $(caftableItemSelect).select2();
/*
$(caftableItemSelect).on('select2:select', function (e) { 
    console.log('select event');
	displayContent(this.value);
});
*/
$(caftableItemSelect).on('change.select2', function (e) {
	console.log('select event');
	displayContent(this.value);
});

for (let idx in PROFESSION_OPTIONS) {
	let prof = PROFESSION_OPTIONS[idx];
	console.log('name: ', prof.text, 'value: ', prof.value);
	let optionG1 = document.createElement("optgroup");
	optionG1.setAttribute("label", prof.value);
	caftableItemSelect.appendChild(optionG1);

	craftables.filter(craftable => craftable.profession == prof.value).forEach(craftable => {
		let optionEl = document.createElement("option");
		optionEl.setAttribute("value", craftable.id);
		optionEl.innerHTML = craftable.name + " ("+craftable.profession+")";
		caftableItemSelect.appendChild(optionEl);
	});
}

navigateToComponent = function(id) {
	//console.log(id, caftableItemSelect);
	$caftableItemSelect2.val(id);
	$caftableItemSelect2.trigger('change');
	//caftableItemSelect.value = id;
	//caftableItemSelect.dispatchEvent(new Event('change'))
}

openMatPriceModal = function(id) {
	const material = allMaterials.filter(mat => mat.id == id)[0];

	const modal = $('#price-modal');
	modal.find('#price_materialName').text(material.name);
	modal.find('#customPrice').val(material.price);
	
	let saveButton = modal.find('#savePrice');
	saveButton.off();
	saveButton.on('click', () => saveMatPrice(id));

	modal.modal();
}

saveMatPrice = function(id) {
	const material = allMaterials.filter(mat => mat.id == id)[0];
	const modal = $('#price-modal');

	material.price = modal.find('#customPrice').val();
	recalculate = true;

	modal.modal('hide');
	$caftableItemSelect2.trigger('change');
}

resetMatPrice = function(id) {
	const material = allMaterials.filter(mat => mat.id == id)[0];
	material.resetPrice();
	recalculate = true;

	$caftableItemSelect2.trigger('change');
}

const nrFormatter = new Intl.NumberFormat();
const displayContent = (itemId) => {
	//console.log(itemId);
	if (!itemId || itemId.length == 0) {
		selectedItemContent.innerHTML = '';
		return;
	}
	
	const craftableItem = craftables.filter(craftable => craftable.id == itemId)[0];
	//console.log(craftableItem);
	craftableItem.init();
	const headline = `<h3>${craftableItem.picture ? '<img src="pics/'+craftableItem.picture+'" />' :''} ${craftableItem.name}</h3><hr />`;
	const description = `${craftableItem.description ? "<p>" +craftableItem.description + "</p>" : ""}`;
	const costs = `<p class="total">Gesamtkosten c.a.: ${nrFormatter.format(craftableItem.calculateCraftCost())} <span class="credits">&curren;</span></p>`;
	
	let receipe = `<h5>Rezept</h5><hr />`;
	
	for (const requiredMaterial of craftableItem.requiredMaterials) {
		let material = craftableItem.materialItem(requiredMaterial.id);
		receipe += `<div class="row">
			<div class="col-2"><span title="Handwerksmaterial">
			${material.picture ? '<img class="small-pic" src="pics/'+material.picture+'" />' :''} (M)
			</span></div>
			<div class="col-5">${material.name}:</div>
			<div class="col-1 text-right">${requiredMaterial.amount}</div>
			<div class="col-2 text-right">&aacute; ${nrFormatter.format(material.price)} <span class="credits">&curren;</span></div>
			<div class="col-2 text-right">&aacute; ${nrFormatter.format(material.price * requiredMaterial.amount)} <span class="credits">&curren;</span></div>
		</div>`;
	}
	for (const requiredCraftable of craftableItem.requiredCraftables) {
		let craftable = craftableItem.craftableItem(requiredCraftable.id);
		let craftingCosts = craftable.calculateCraftCost();
		receipe += `<div class="row">
			<div class="col-2"><span title="Komponente">
			${craftable.picture ? '<img class="small-pic" src="pics/'+craftable.picture+'" />' :''} (K)
			</span></div>
			<div class="col-5"><a href="#" onclick="navigateToComponent('${requiredCraftable.id}')">${craftable.name}</a>:</div>
			<div class="col-1 text-right">${requiredCraftable.amount}</div>
			<div class="col-2 text-right">&aacute; ${nrFormatter.format(craftingCosts)} <span class="credits">&curren;</span></div>
			<div class="col-2 text-right">&aacute; ${nrFormatter.format(craftingCosts * requiredCraftable.amount)} <span class="credits">&curren;</span></div>
		</div>`;
	}
	receipe += `<br />`;

	let components = ``;
	let toCraft = craftableItem.craftables();
	if (Object.keys(toCraft).length > 0) {
		components += `<h5>Herzustellende Gegenstände</h5><hr />`;
		for (const [id, amount] of Object.entries(toCraft)) {
			let craftable = craftableItem.craftableItem(id);
			let craftingCosts = craftable.calculateCraftCost();
			components += `<div class="row">
				<div class="col-2">${craftable.picture ? '<img class="small-pic" src="pics/'+craftable.picture+'" />' :''}</div>
				<div class="col-5"><a href="#" onclick="navigateToComponent('${craftable.id}')">${craftable.name}</a>:&nbsp;</div>
				<div class="col-1 text-right">${amount}</div>
				<div class="col-2 text-right">&aacute; ${nrFormatter.format(craftingCosts)} <span class="credits">&curren;</span></div>
				<div class="col-2 text-right">&aacute; ${nrFormatter.format(craftingCosts * amount)} <span class="credits">&curren;</span></div>
			</div>`;
		}
		components += `<br />`;
	}
	
	let materialList = `<h5>Alle benötigte Materialien</h5><hr /><table class="table table-striped table-hover">
		<thead>
			<tr>
				<th scope="col"></th>
				<th scope="col">Name</th>
				<th scope="col">Menge</th>
				<th scope="col">Preis</th>
				<th scope="col">Gesamt</th>
				<th scope="col">Wo zu finden</th>
				<th scope="col" class="price-action"></th>
			</tr>
		</thead><tbody>`;

	const reqMaterials = Object.entries(craftableItem.materials())
		.sort(([a,],[b,]) => a===b ? 0 : (a > b ? 1 :-1));

	for (const [id, amount] of reqMaterials) {
		let material = allMaterials.filter(mat => mat.id == id)[0];
		
		//console.log('material', material);
		materialList += `
			<tr class="quality-${material.quality}">
			  <td>
			  	${material.picture ? '<img class="medium-pic" src="pics/'+material.picture+'" />' :''}
			  </td>
			  <td>
				${material.name}
			  </td>
			  <td>${nrFormatter.format(amount)}</td>
			  <td>
				&aacute; ${nrFormatter.format(material.price)} <span class="credits">&curren;</span> 
				${(!material.fixPrice && material.price > 0) ? '<span title="Gesachätzer Wert aus GHM oder HW-Missionen">(Est.)</span>' : ''}
			  </td>
			  <td>
				${nrFormatter.format(material.price * amount)} <span class="credits">&curren;</span> 
			  </td>
			  <td>${material.places.join(', ')}</td>
			  <td>
			  	<button type="button" class="btn btn-primary btn-sm" onclick="openMatPriceModal('${material.id}')" title="Set custom price"><i class="bi bi-currency-exchange"></i></button> 
				${material.hasCustomPrice() ? '<button type="button" class="btn btn-secondary btn-sm reset-price-btn" title="Reset Price" onclick="resetMatPrice(\''+ material.id +'\')">&curren;</button>' : ''}
			  </td>
			</tr>`;
	}
	materialList += `</tbody></table>`;
	materialList += `<p><small>HW = Handwerk</small></p>`;

	selectedItemContent.innerHTML = headline + description + costs + receipe + components + materialList;
	recalculate = false;
}

/*
caftableItemSelect.addEventListener('change', function(event){
	displayContent(this.value);
});
*/


/*
let start = new Date().getTime();
craftables.forEach(caftable => {
	console.log(caftable.calculateCraftCost());
	console.log(caftable.materials());
});
console.log('---------- ' + (new Date().getTime() - start) + ' ms --------------');
console.log('-----------------------------');
start = new Date().getTime();
craftables.forEach(caftable => {
	caftable.init();
	console.log(caftable.calculateCraftCost());
});
console.log('---------- ' + (new Date().getTime() - start) + ' ms --------------');
*/

