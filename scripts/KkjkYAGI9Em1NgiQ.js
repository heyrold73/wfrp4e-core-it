if (this.item.system.quantity.value) 
{
    this.item.system.reduceQuantity();
    let test = await this.actor.setupSkill(game.i18n.localize("NAME.Heal"), { appendTitle: ` - ${this.effect.name}`, skipTargets: true })
    await test.roll();
    if (test.succeeded) 
    {
        let actor = Array.from(game.user.targets)[0]?.actor || this.actor;
        actor.applyEffect({ effectData: [this.item.effects.contents[0].convertToApplied()] })
    }
    else 
    {
        this.script.scriptNotification("Test de Guérison échoué!", "error")
    }
}
else 
{
    this.script.scriptNotification("Quantité insuffisante!", "error")
}