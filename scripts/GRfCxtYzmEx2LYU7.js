if (args.totalWoundLoss >= 1)
{
    let roll = await new Roll("1d10").roll();
    await roll.toMessage(this.script.getChatData());
    if (roll.total == 9)
    {
        this.script.scriptMessage(`Deux @UUID[Compendium.wfrp4e-eis.actors.iDy8SDTwJSlCzZMl]{Horreurs Bleues de Tzeentch} sortent de la chair hurlante de ${this.actor.name}, le tuant au passage.`, {whisper : ChatMessage.getWhisperRecipients("GM")})
    }
}