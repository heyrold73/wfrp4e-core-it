let blows = this.item.getFlag("wfrp4e", "blows") || 0
let difficulties = Object.keys(game.wfrp4e.config.difficultyLabels)

blows = Math.clamped(blows, 0, difficulties.length - 1)
if (this.item.system.protects[args.opposedTest.result.hitloc.value])
{
    let difficulty = difficulties[blows];
    this.actor.setupSkill(game.i18n.localize("NAME.Cool"), {fields: {difficulty}, skipTargets: true, appendTitle :  ` - ${this.effect.name}`}).then(async test => {
        await test.roll();
        if (test.failed)
        {
            this.script.scriptMessage(`${this.actor.name} doit cesser le combat et fuir à moins de réussir un jet <strong>Intermédiaire (+0) de Force Mentale</strong>`);
            this.item.setFlag("wfrp4e", "failedCool", true);
        }
    })
}