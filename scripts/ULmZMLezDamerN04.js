let spells = await warhammer.utility.findAllItems("spell", "Chargement des sorts")

let lore = (await game.wfrp4e.tables.rollTable("random-caster", {hideDSN: true})).text
this.script.scriptNotification(lore)
if (lore == "Au choix") {
   return
}

else if (lore == "Magie des Arcanes") {
    lore = "Arcane"
}

else if (lore == "Magie Mineure ") {
    lore = "petty"
}

else {
    lore = lore.toLowerCase();
}

let spellsWithLore = []
if (lore == "Arcane") {
    spellsWithLore = spells.filter(i => !i.system.lore.value)
}
else {
    spellsWithLore = spells.filter(i => i.system.lore.value == lore)
}

let selectedSpell = spellsWithLore[Math.floor(CONFIG.Dice.randomUniform() * spellsWithLore.length)]
Item.implementation.create(selectedSpell.toObject(), { parent: this.actor}).then(item => {
    this.actor.setupCast(item).then(test => test.roll());
})