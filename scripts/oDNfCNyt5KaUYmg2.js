if(args.opposedTest.result.winner == "defender")
{
    let roll = Math.ceil(CONFIG.Dice.randomUniform() * 10)
    let msg = `Résultat ${roll}.`
    if (roll >= 7)
    {
          msg = `L'attaque touche avec un DR de ${roll - 6}.`
    }
    this.script.scriptMessage(msg, {blind: true,  whisper : ChatMessage.getWhisperRecipients("GM")})
}