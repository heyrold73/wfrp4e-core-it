let test = await this.actor.setupSkill("Esquive", {fields : {difficulty : "average"}})
let caster = this.effect.sourceActor

let fallen = this.effect.sourceTest.result.SL + caster.characteristics.wp.bonus
await test.roll();
if (test.failed)
{
    this.actor.addCondition("prone")
   this.script.scriptMessage(`<b>${this.actor.prototypeToken.name}</b> tombe de ${fallen} mètres`)
}