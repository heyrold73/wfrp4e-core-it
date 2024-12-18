let caster = this.effect.sourceActor;
if (caster)
{
    let healed= caster.system.characteristics.wp.bonus + caster.system.characteristics.int.bonus
    await this.actor.modifyWounds(healed);
    this.script.scriptMessage(`<strong>${this.actor.prototypeToken.name}</strong> guéri ${healed} Blessures`)
}
 
 let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {fields : {difficulty : "vhard"}, context : {success : "1 Point de Corruption gagné durant la dernière heure doit être supprimé.", failure: "Rien ne se passe"}})
 await test.roll();