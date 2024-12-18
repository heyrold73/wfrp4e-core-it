if (this.actor.system.status.advantage.value >= 3)
{
    this.actor.modifyAdvantage(-3);
    this.script.scriptNotification("Avantage soustrait")
}
else 
{
    return this.script.scriptNotification("Pas assez d'Avantages!", "error")
}

let test = await this.actor.setupTrait(this.item)
await test.roll();