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
    message += `<b>${this.actor.name}</b> regagne ${regen} Blessures.`

    if (regen == 10)
    {
        message += `<br>Et guéri une Blessure Critique.`
    }
}
else if (regen >= 8) 
{
    message += `<b>${this.actor.name}</b> a obtenu ${regen} et récupère 1 Blessure.`
    wounds.value += 1
    if (regen == 10)
    {
        message += `<br>Et guéri une Blessure Critique.`
    }
}
else 
{
    message += `<b>${this.actor.name}</b> Résultat de régénération de ${regen} - Aucun effet.`
}

await this.actor.update({ "system.status.wounds": wounds })
this.script.scriptMessage(message, { whisper: ChatMessage.getWhisperRecipients("GM") })