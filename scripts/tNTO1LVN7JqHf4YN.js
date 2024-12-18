if (args.test.characteristicKey == "wp") 
{
    if (args.test.failed)
    {
        this.actor.createEmbeddedDocuments("ActiveEffect", [game.wfrp4e.config.symptomEffects["malaise"]])
        this.script.scriptMessage(`Test de Force Mentale échoué, <b>${this.actor.prototypeToken.name}</b> subit @Condition[Malaise] pour [[1d10]] heures`, {whisper: ChatMessage.getWhisperRecipients("GM")})
    }
}