if (this.actor.system.status.advantage.value > 0)
{
    await this.actor.modifyAdvantage(-1);
    this.script.scriptNotification("Avantage soustrait")
}
else 
{
    return this.script.scriptNotification("Pas assez d'Avantages!", "error")
}

let test = await this.actor.setupTrait(this.item)
await test.roll();