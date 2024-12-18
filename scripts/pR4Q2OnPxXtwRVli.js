let criticals = this.actor.itemTypes.critical;

if (criticals.length)
{
    this.script.scriptNotification("Ne peut subir de Blessures Critiques");
    this.actor.deleteEmbeddedDocuments("Item", criticals.map(i => i.id))
}

if (getProperty(args.data, "system.status.wounds.value") == 0)
{
    this.script.scriptNotification(`Endormi pour ${Math.ceil(CONFIG.Dice.randomUniform() * 10)} Rounds`)
}