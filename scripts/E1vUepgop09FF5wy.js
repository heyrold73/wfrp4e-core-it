if (this.actor.system.status.advantage.value == 0)
{
    return this.script.scriptNotification("Pas assez d'Avantages!", "error")
}

let hatred = await fromUuid("Compendium.wfrp4e-core.items.Item.aE3pyW20Orvdjzj0")
let frenzy = await fromUuid("Compendium.wfrp4e-core.items.Item.yRhhOlt18COq4e1q");

if (this.actor.system.status.advantage.value >= 3)
{
    this.script.scriptNotification(`Ajout de ${frenzy.name}`)
    this.actor.setAdvantage(0)
    this.actor.createEmbeddedDocuments("Item", [frenzy])
}
else if (this.actor.system.status.advantage.value >= 1)
{
    let data = hatred.toObject();
    data.system.specification.value = "Combatants au corps à corps"
    this.script.scriptNotification(`Ajout de ${hatred.name}`)
    this.actor.setAdvantage(0)
    this.actor.createEmbeddedDocuments("Item", [data])
}