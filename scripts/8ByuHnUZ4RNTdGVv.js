let strLoss = Math.ceil(CONFIG.Dice.randomUniform() * 10)
let tghLoss = Math.ceil(CONFIG.Dice.randomUniform() * 10)

if (!this.actor.has("Mort-vivant") && !this.actor.has("Démoniaque")) 
{
    this.actor.setupSkill(game.i18n.localize("NAME.Cool"), { appendTitle: " - " + this.effect.name, fields: { difficulty: "average" }, context: { failure: `Pert de ${strLoss} en Force et ${tghLoss} en Endurance` } }).then(async test => {
        await test.roll();
        if (test.failed) {
            this.actor.update({ "system.characteristics.s.initial": this.actor.system.characteristics.s.initial - strLoss, "system.characteristics.t.initial": this.actor.system.characteristics.t.initial - tghLoss })
        }
    })

}
else {
    this.script.scriptNotification(`<strong>${this.actor.name}</strong> est immunisé à ${this.effect.name}`)
}
