let spells = await warhammer.utility.findAllItems("spell", "Chargement des sorts")

let text = (await game.wfrp4e.tables.rollTable("random-caster", {hideDSN: true})).result

lore = Array.from(text.matchAll(/{(.+?)}/gm))[0][1]

if (text == "GM's Choice")
{
    return this.script.scriptNotification(text)
}

if (spellsWithLore.length > 0)
{
    let spellsWithLore = spells.filter(i => game.wfrp4e.config.magicLores[i.system.lore.value] == lore)
    let selectedSpell = spellsWithLore[Math.floor(CONFIG.Dice.randomUniform() * spellsWithLore.length)]
    this.script.scriptNotification(selectedSpell.name);
    this.actor.createEmbeddedDocuments("Item", [selectedSpell])
}
else
{
    ui.notifications.notify(`Impossible de trouver le sort ${lore}. Essayez à nouveau`)
}