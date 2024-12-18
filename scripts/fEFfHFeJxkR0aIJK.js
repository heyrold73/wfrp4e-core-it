if (args.opposedTest.result.differenceSL >= 0 && args.opposedTest.result.differenceSL <= 3 && args.opposedTest.result.winner == "attacker")
{ 
    this.script.scriptMessage(`Tous ceux dans un rayon de 7 mètres perde 1 Point de Blessure et doivent faire un Test de <strong> Résistance Difficile (-10)</strong> ou recevoir l'état gains @Condition[Assourdi]`, {blind : true,  whisper : ChatMessage.getWhisperRecipients("GM")})
}
    