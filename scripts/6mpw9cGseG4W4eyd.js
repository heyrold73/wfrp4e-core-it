if (this.actor.system.status.advantage.value >= 2)
{
    await this.actor.modifyAdvantage(-2);
    this.script.scriptNotification("Avvantage soustrait")
}
else 
{
    return this.script.scriptNotification("Pas assez d'Avantages!", "error")
}

let test = await this.actor.setupTrait(this.item)
await test.roll();