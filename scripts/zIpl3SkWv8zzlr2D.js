let filters = [
    {
        property : "type",
        value : "spell"
    },
    {
        property : "system.lore.value",
        value : "petty"
    }
]

let petty = (await ItemDialog.createFromFilters(filters, 4, "Choisissez 4 sorts de Magie Mineure")).map(i => i.toObject());


filters = [
    {
        property : "type",
        value : "spell"
    },
    {
        property : "system.lore.value",
        value : ["death"]
    }
]

let arcane = (await ItemDialog.createFromFilters(filters, 8, "Choisissez 8 Sorts d'Arcane & du Domaine de la Mort")).map(i => i.toObject());

filters = [
    {
        property : "type",
        value : "spell"
    },
    {
        property : "name",
        value: /^((?!\().)*$/gm, // Remove all spells with parentheses (all arcane spells spells)
        regex: true
    },
    {
        property : "system.lore.value",
        value : "necromancy"
    }
]

let necromancy = (await ItemDialog.createFromFilters(filters, 3, "Choisissez 3 sorts du Domaine de la Nécromancie")).map(i => i.toObject());

let items = [...necromancy, ...petty, ...arcane]

this.actor.createEmbeddedDocuments("Item", items);