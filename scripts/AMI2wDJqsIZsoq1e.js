if (args.opposedTest.result.differenceSL >= 0 && args.opposedTest.result.differenceSL <= 2 && args.opposedTest.result.winner == "attacker")
{ 
    this.script.scriptMessage(`Émet un nuage de poudre noire nauséabonde. Active l'effet <strong>Fellowship Penalty</strong> sur @UUID[${this.actor.uuid}].`, {blind : true, whisper : ChatMessage.getWhisperRecipients("GM")})
}