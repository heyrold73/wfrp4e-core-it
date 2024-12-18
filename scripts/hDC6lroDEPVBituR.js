let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {skipTargets: true, appendTitle :  ` - ${this.effect.name}`})
await test.roll();

if (test.failed)
{
    this.actor.update({"system.status.corruption.value" : parseInt(this.actor.status.corruption.value) + 1})
    this.script.scriptMessage("Gagne un Point de Corruption", {whisper : ChatMessage.getWhisperRecipients("GM")})
    if (test.result.roll % 11 == 0 || test.result.roll == 100)
    {
        this.script.scriptMessage(`<strong>Echec total</strong>: gain immédiat de 1 @Table[mutatemental]{Mutation Mentale}, et ne peut plus prendre d'Ambition à court-terme pour les [[1d10]] prochaines weeks.`, {whisper : ChatMessage.getWhisperRecipients("GM")})
    }
}