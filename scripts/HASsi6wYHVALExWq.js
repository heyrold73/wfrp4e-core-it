let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {skipTargets: true, appendTitle :  ` - ${this.effect.name}`, context: { failure: "1 Point de Corruption Point gagné" } })
await test.roll();

if (test.failed && args.actor.type == "character") 
{
    let msg = ""
    msg += `<p><b>${this.actor.prototypeToken.name}</b> gagne 1 Point de Corruption</p>`
    if (test.result.roll % 11 == 0 || test.result.roll == 100)
    {
        msg +=  `<b>${args.actor.prototypeToken.name}</b> gagne une mutation (@Table[expandedmutatephys]{Physique} ou @Table[expandedmutatemental]{Mentale}) et gagne @UUID[Compendium.wfrp4e-core.items.hiU7vhBOVpVI8c7C]{Magie du Chaos (Tzeentch)}`
    }
    this.script.scriptMessage(msg, {whisper : ChatMessage.getWhisperRecipients("GM")})
    await this.actor.update({ "system.status.corruption.value": parseInt(args.actor.status.corruption.value) + 1 })
}