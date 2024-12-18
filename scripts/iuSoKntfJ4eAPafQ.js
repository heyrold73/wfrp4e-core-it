let spells = await warhammer.utility.findAllItems("spell", "Chargement des sorts");
spells = spells.filter(s => ["feu", "cieux", "bêtes", "ombres", "lumière", "vie", "mort", "métal"].includes(s.system.lore.value)).sort((a, b) => a.system.lore.value > b.system.lore.value ?  1 : -1)

let choice = await ItemDialog.create(spells, 1, "Choisir un sort");
if (choice[0])
{
    this.actor.createEmbeddedDocuments("Item", choice, {fromEffect: this.effect.id})
}
