let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {skipTargets: true, appendTitle :  ` - ${this.effect.name}`, context : {failure: "1 Corruption Point Gained"}})
await test.roll();
if (test.failed && this.actor.type == "character")
{
    this.actor.update({"system.status.corruption.value" : parseInt(this.actor.status.corruption.value) + 1})
    this.script.scriptMessage("Gain d'1 Point de Corruption", {whisper : ChatMessage.getWhisperRecipients("GM")})
}