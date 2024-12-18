if (args.totalWoundLoss > 0) 
{
  args.opposedTest.result.other.push(
  `@Corruption[minor]{Exposition Mineure à la Corruption}`
  )
  this.script.scriptMessage(
  `<strong>${this.effect.name}</strong>: 
    @Corruption[minor]{Exposition Mineure à la Corruption} <br/>
    <strong>${args.actor.prototypeToken.name}</strong> doit réaliser un Test 
    <strong>Accessible (+20%) de Corruption (Mineur)</strong>`, 
    {whisper: ChatMessage.getWhisperRecipients("GM")})
}