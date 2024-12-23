
const craftables_wb_JSON = [{
    "id": "wb-Erforschte Premium-Dallorian-Komponente",
    "name": "Erforschte Premium-Dallorian-Komponente",
    "description": "",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_PREMIUM,
    "picture": "Black_Steel_6_0_green.png",
    "type" : "Komponente",
    "mats": [{
        "id": "Standard-Flerovium-Flussmittel",
        "amount": 8
    }, { 
        "id": "Premium-Dallorian-Reste",
        "amount": 6
    }, { 
        "id": "Premium-Datenstift",
        "amount": 6
    }],
    "craftables": []
},{
    "id": "wb-Erforschte Prototyp-Dallorian-Komponente",
    "name": "Erforschte Prototyp-Dallorian-Komponente",
    "description": "",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_PROTOTYPE,
    "picture": "Black_Steel_6_0_blue.png",
    "type" : "Komponente",
    "mats": [{
        "id": "Premium-Flerovium-Flussmittel",
        "amount": 8
    }, { 
        "id": "Prototyp-Dallorian-Reste",
        "amount": 6
    }, { 
        "id": "Prototyp-Datenstift",
        "amount": 6
    }],
    "craftables": [{
        "id": "wb-Erforschte Premium-Dallorian-Komponente",
        "amount": 2
    }]
},{
    "id": "wb-Erforschte Artefakt-Dallorian-Komponente",
    "name": "Erforschte Artefakt-Dallorian-Komponente",
    "description": "",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_ARTEFACT,
    "picture": "Black_Steel_6_0_purple.png",
    "type" : "Komponente",
    "mats": [{
        "id": "Prototyp-Flerovium-Flussmittel",
        "amount": 12
    }, { 
        "id": "Artefakt-Dallorian",
        "amount": 12
    }, { 
        "id": "Artefakt-Datenstift",
        "amount": 12
    }],
    "craftables": [{
        "id": "wb-Erforschte Prototyp-Dallorian-Komponente",
        "amount": 3
    }]
},{
    "id": "wb-Premium-Duranium-Waffenmontage-Komponente",
    "name": "Premium-Duranium-Waffenmontage-Komponente",
    "description": "",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_PREMIUM,
    "picture": "6_0_Duranium_Assembly_Component_1.png",
    "type" : "Komponente",
    "mats": [{
        "id": "Standard-Flerovium-Flussmittel",
        "amount": 8
    }, { 
        "id": "Premium-Hartstahl",
        "amount": 6
    }, { 
        "id": "Premium-Duranium-Panzerung",
        "amount": 6
    }],
    "craftables": []
},{
    "id": "wb-Prototyp-Duranium-Waffenmontage-Komponente",
    "name": "Prototyp-Duranium-Waffenmontage-Komponente",
    "description": "",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_PROTOTYPE,
    "picture": "6_0_Duranium_Assembly_Component_2.png",
    "type" : "Komponente",
    "mats": [{
        "id": "Premium-Flerovium-Flussmittel",
        "amount": 8
    }, { 
        "id": "Prototyp-Hartstahl",
        "amount": 6
    }, { 
        "id": "Prototyp-Duranium-Panzerung",
        "amount": 6
    }],
    "craftables": [{
        "id": "wb-Premium-Duranium-Waffenmontage-Komponente",
        "amount": 2
    }]
},{
    "id": "wb-Artefakt-Duranium-Waffenmontage-Komponente",
    "name": "Artefakt-Duranium-Waffenmontage-Komponente",
    "description": "",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_ARTEFACT,
    "picture": "6_0_Duranium_Assembly_Component_3.png",
    "type" : "Komponente",
    "mats": [{
        "id": "Prototyp-Flerovium-Flussmittel",
        "amount": 12
    }, { 
        "id": "Artefakt-Hartstahl",
        "amount": 12
    }, { 
        "id": "Artefakt-Duranium-Panzerung",
        "amount": 12
    }],
    "craftables": [{
        "id": "wb-Prototyp-Duranium-Waffenmontage-Komponente",
        "amount": 3
    }]
},{
    "id": "wb-Präzisions-Aufwertung 73",
    "name": "Präzisions-Aufwertung 73",
    "description": "+126 Ausdauer, +126 Angriffskraft, +95 Präzisionswert",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_PROTOTYPE,
    "picture": "6_0_augment_red_2.png",
    "type" : "Aufwertung",
    "mats": [{
        "id": "Verarbeitete-Isotope-Stabilisator",
        "amount": 5
    }],
    "craftables": [{
        "id": "wb-Prototyp-Duranium-Waffenmontage-Komponente",
        "amount": 2
    },{
        "id": "wb-Erforschte Prototyp-Dallorian-Komponente",
        "amount": 1
    }]
},{
    "id": "wb-Schild-Aufwertung 73",
    "name": "Schild-Aufwertung 73",
    "description": "+126 Ausdauer, +126 Angriffskraft, +95 Schildwert",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_PROTOTYPE,
    "picture": "6_0_augment_blue_2.png",
    "type" : "Aufwertung",
    "mats": [{
        "id": "Verarbeitete-Isotope-Stabilisator",
        "amount": 5
    }],
    "craftables": [{
        "id": "wb-Prototyp-Duranium-Waffenmontage-Komponente",
        "amount": 2
    }, {
        "id": "wb-Erforschte Prototyp-Dallorian-Komponente",
        "amount": 1
    }]
},{
    "id": "wb-Vielseitige Aufwertung 73",
    "name": "Vielseitige Aufwertung 73",
    "description": "+126 Ausdauer, +126 Angriffskraft, +95 Beherrschung",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_PROTOTYPE,
    "picture": "6_0_augment_red_2.png",
    "type" : "Aufwertung",
    "mats": [{
        "id": "Verarbeitete-Isotope-Stabilisator",
        "amount": 5
    }],
    "craftables": [{
        "id": "wb-Prototyp-Duranium-Waffenmontage-Komponente",
        "amount": 2
    },{
        "id": "wb-Erforschte Prototyp-Dallorian-Komponente",
        "amount": 1
    }]
},{
    "id": "wb-Fortschrittliche Präzisions-Aufwertung 74",
    "name": "Fortschrittliche Präzisions-Aufwertung 74",
    "description": "+144 Ausdauer, +144 Angriffskraft, +108 Präzisionswert",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_ARTEFACT,
    "picture": "6_0_augment_red_3.png",
    "type" : "Aufwertung",
    "mats": [{
        "id": "Verarbeitete-Isotope-Stabilisator",
        "amount": 5
    }, { 
        "id": "Feste Ressourcenmatrix",
        "amount": 5
    }, { 
        "id": "Legendäre Glut",
        "amount": 5
    }],
    "craftables": [{
        "id": "wb-Artefakt-Duranium-Waffenmontage-Komponente",
        "amount": 5
    },{
        "id": "wb-Erforschte Artefakt-Dallorian-Komponente",
        "amount": 3
    }]
},{
    "id": "wb-Fortschrittliche Schild-Aufwertung 74",
    "name": "Fortschrittliche Schild-Aufwertung 74",
    "description": "+144 Ausdauer, +144 Angriffskraft, +108 Schildwert",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_ARTEFACT,
    "picture": "6_0_augment_blue_3.png",
    "type" : "Aufwertung",
    "mats": [{
        "id": "Verarbeitete-Isotope-Stabilisator",
        "amount": 5
    }, { 
        "id": "Feste Ressourcenmatrix",
        "amount": 5
    }, { 
        "id": "Legendäre Glut",
        "amount": 5
    }],
    "craftables": [{
        "id": "wb-Artefakt-Duranium-Waffenmontage-Komponente",
        "amount": 5
    },{
        "id": "wb-Erforschte Artefakt-Dallorian-Komponente",
        "amount": 3
    }]
},{
    "id": "wb-Fortschrittliche vielseitige Aufwertung 74",
    "name": "Fortschrittliche vielseitige Aufwertung 74",
    "description": "+144 Ausdauer, +144 Angriffskraft, +108 Beherrschung",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_ARTEFACT,
    "picture": "6_0_augment_blue_3.png",
    "type" : "Aufwertung",
    "mats": [{
        "id": "Verarbeitete-Isotope-Stabilisator",
        "amount": 5
    }, { 
        "id": "Feste Ressourcenmatrix",
        "amount": 5
    }, { 
        "id": "Legendäre Glut",
        "amount": 5
    }],
    "craftables": [{
        "id": "wb-Artefakt-Duranium-Waffenmontage-Komponente",
        "amount": 5
    },{
        "id": "wb-Erforschte Artefakt-Dallorian-Komponente",
        "amount": 3
    }]
},{
    "id": "wb-Überragende Schild-Aufwertung 77",
    "name": "Überragende Schild-Aufwertung 77",
    "description": "+171 Ausdauer, +171 Angriffskraft, +130 Schildwert",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_LEGEND,
    "picture": "advanced_augment_aim.png",
    "type" : "Aufwertung",
    "mats": [{
        "id": "Verarbeitete-Isotope-Stabilisator",
        "amount": 5
    }, { 
        "id": "Feste Ressourcenmatrix",
        "amount": 5
    }],
    "craftables": [{
        "id": "wb-Artefakt-Duranium-Waffenmontage-Komponente",
        "amount": 5
    },{
        "id": "wb-Erforschte Artefakt-Dallorian-Komponente",
        "amount": 3
    },{ 
        "id": "ct-CM-1337",
        "amount": 1
    }]
},{
    "id": "wb-Überragende vielseitige Aufwertung 77",
    "name": "Überragende vielseitige Aufwertung 77",
    "description": "+171 Ausdauer, +171 Angriffskraft, +130 Beherrschung",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_LEGEND,
    "picture": "advanced_augment_wil.png",
    "type" : "Aufwertung",
    "mats": [{
        "id": "Verarbeitete-Isotope-Stabilisator",
        "amount": 5
    }, { 
        "id": "Feste Ressourcenmatrix",
        "amount": 5
    }],
    "craftables": [{
        "id": "wb-Artefakt-Duranium-Waffenmontage-Komponente",
        "amount": 5
    },{
        "id": "wb-Erforschte Artefakt-Dallorian-Komponente",
        "amount": 3
    },{ 
        "id": "ct-CM-1337",
        "amount": 1
    }]
},{
    "id": "wb-Vielseitige Aufwertung 83",
    "name": "Vielseitige Aufwertung 83",
    "description": "+163 Ausdauer, +163 Angriffskraft, +123 Beherrschung",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_PROTOTYPE,
    "picture": "advanced_augment_dps.png",
    "type" : "Aufwertung",
    "mats": [{
        "id": "Verarbeitete-Isotope-Stabilisator",
        "amount": 5
    }, { 
        "id": "Feste Ressourcenmatrix",
        "amount": 5
    }],
    "craftables": [{
        "id": "wb-Erforschte Prototyp-Dallorian-Komponente",
        "amount": 1
    },{
        "id": "wb-Prototyp-Duranium-Waffenmontage-Komponente",
        "amount": 3
    }]
},{
    "id": "wb-Vielseitige Aufwertung 86",
    "name": "Vielseitige Aufwertung 86",
    "description": "+175 Ausdauer, +175 Angriffskraft, +133 Beherrschung",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_PROTOTYPE,
    "picture": "advanced_augment_dps.png",
    "type" : "Aufwertung",
    "mats": [],
    "craftables": [{
        "id": "wb-Erforschte Prototyp-Dallorian-Komponente",
        "amount": 2
    },{
        "id": "wb-Prototyp-Duranium-Waffenmontage-Komponente",
        "amount": 3
    },{ 
        "id": "ct-CM-1337",
        "amount": 1
    },{ 
        "id": "bio-Gereinigte Bioessenz",
        "amount": 1
    },{ 
        "id": "kf-Übertakteter Biostabilisator",
        "amount": 1
    }]
},{
    "id": "wb-Schild-Aufwertung 83",
    "name": "Schild-Aufwertung 83",
    "description": "+163 Ausdauer, +163 Angriffskraft, +123 Beherrschung",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_PROTOTYPE,
    "picture": "advanced_augment_tank.png",
    "type" : "Aufwertung",
    "mats": [{
        "id": "Verarbeitete-Isotope-Stabilisator",
        "amount": 5
    }, { 
        "id": "Feste Ressourcenmatrix",
        "amount": 5
    }],
    "craftables": [{
        "id": "wb-Erforschte Prototyp-Dallorian-Komponente",
        "amount": 1
    },{
        "id": "wb-Prototyp-Duranium-Waffenmontage-Komponente",
        "amount": 3
    }]
},{
    "id": "wb-Schild-Aufwertung 86",
    "name": "Schild-Aufwertung 86",
    "description": "+175 Ausdauer, +175 Angriffskraft, +133 Schildwert",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_PROTOTYPE,
    "picture": "advanced_augment_tank.png",
    "type" : "Aufwertung",
    "mats": [],
    "craftables": [{
        "id": "wb-Erforschte Prototyp-Dallorian-Komponente",
        "amount": 2
    },{
        "id": "wb-Prototyp-Duranium-Waffenmontage-Komponente",
        "amount": 3
    },{ 
        "id": "ct-CM-1337",
        "amount": 1
    },{ 
        "id": "bio-Gereinigte Bioessenz",
        "amount": 1
    },{ 
        "id": "kf-Übertakteter Biostabilisator",
        "amount": 1
    }]
},{
    "id": "wb-Fortschrittliche Schild-Aufwertung 86",
    "name": "Fortschrittliche Schild-Aufwertung 86",
    "description": "+193 Ausdauer, +193 Angriffskraft, +147 Schildwert",
    "profession": PROFESSION_WEAPON,
    "quality": QUALITY_ARTEFACT,
    "picture": "advanced_augment_tank_2.png",
    "type" : "Aufwertung",
    "mats": [],
    "craftables": [{
        "id": "wb-Erforschte Artefakt-Dallorian-Komponente",
        "amount": 2
    },{
        "id": "wb-Artefakt-Duranium-Waffenmontage-Komponente",
        "amount": 4
    },{ 
        "id": "ct-CM-1337",
        "amount": 2
    },{ 
        "id": "bio-Gereinigte Bioessenz",
        "amount": 3
    },{ 
        "id": "kf-Übertakteter Biostabilisator",
        "amount": 3
    }]
}];