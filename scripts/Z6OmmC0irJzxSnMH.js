let chatData = { whisper: ChatMessage.getWhisperRecipients("GM") }
let message = ""

let wounds = foundry.utils.duplicate(this.actor.status.wounds)
let regenRoll = await new Roll("1d10").roll();
let regen = regenRoll.total;

if (wounds.value >= wounds.max)
    return

if (wounds.value > 0) 
{
    wounds.value += regen
    if (wounds.value > wounds.max)
    {
        wounds.value = wounds.max
    }
    message += `<b>${this.actor.name}</b> guérit de ${regen} Points de Blessure.`

    if (regen == 10)
    {
        message += `<br>De plus, il guérit d'une Blessure Critique.`
    }
}
else if (regen >= 8) 
{
    message += `<b>${this.actor.name}</b> a obtenu un ${regen} et guérit 1 Point de Blessure.`
    wounds.value += 1
    if (regen == 10)
    {
      message += `<br>De plus, il guérit d'une Blessure Critique.`
    }
}
else 
{
    message += `<b>${this.actor.name}</b> Regenerate roll of ${regen} - No effect.`
}

await this.actor.update({ "system.status.wounds": wounds })
this.script.scriptMessage(message, { whisper: ChatMessage.getWhisperRecipients("GM") })

if (this.actor.Species?.toLowerCase() != "ogre")
{
   this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {skipTargets: true, appendTitle :  " - " + this.effect.name, fields : {difficulty : "average"}}).then(test => {
       test.roll()
   })
}












