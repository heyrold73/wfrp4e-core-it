let lore = await ValueDialog.create({text : "Choisissez un Domaine", title:  "Savoir"}, "", {"fire" : "Feu", "death" : "Mort", "metal" : "Métal", "shadow" : "Ombres"});

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

let petty = await ItemDialog.createFromFilters(filters, 6, "Choisissez 3 Sorts de Magie Mineure")


filters = [
    {
        property : "type",
        value : "spell"
    },
    {
        property : "system.lore.value",
        value : [""]
    }
]

let arcane = await ItemDialog.createFromFilters(filters, 12, "Choisissez 12 Sorts de Magie d'Arcane")

let items = petty.map(i => i.toObject()).concat(arcane.map(i => {
    let spell = i.toObject();
    spell.img = `modules/wfrp4e-core/icons/spells/${lore}.png`
    spell.system.lore.value = lore;
    return spell;
}));


this.actor.createEmbeddedDocuments("Item", items);