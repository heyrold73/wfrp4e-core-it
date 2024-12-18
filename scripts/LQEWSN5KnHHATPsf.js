if (args.totalWoundLoss > 0)
{
    this.script.scriptMessage(`<b>${args.actor.name}</b> doit réussir un Test <b>Facile (+40) d'Endurance</b> ou subir une @UUID[Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb]{Blessure Purulente}`, {whisper: ChatMessage.getWhisperRecipients("GM")})
}