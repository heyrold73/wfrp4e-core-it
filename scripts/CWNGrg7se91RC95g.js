if (args.totalWoundLoss > 0) {
  args.opposedTest.result.other.push(
  `@Corruption[minor]{Exposition Mineure à la Corruption}`
  )
  this.script.scriptMessage(`<strong>${this.effect.name}</strong>: 
      @Corruption[moderate]{Exposition Modérée à la Corruption} <br/>
      <strong>${args.actor.prototypeToken.name}</strong> doit réussir un  
      <strong>Test de Corruption (Modéré)</strong>`, 
      {whisper: ChatMessage.getWhisperRecipients("GM")}
  )
}