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

let petty = await ItemDialog.createFromFilters(filters, 3, "Choisissez 3 Sorts de Magie Mineure")


filters = [
    {
        property : "type",
        value : "spell"
    },
    {
        property : "system.lore.value",
        value : ""
    }
]

let arcane = await ItemDialog.createFromFilters(filters, 3, "Choisissez 3 Sorts de Magie d'Arcane")

let items = petty.concat(arcane).map(i => i.toObject())

this.actor.createEmbeddedDocuments("Item", items);