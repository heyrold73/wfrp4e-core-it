// Any Characteristic penalties due to failed Consume Alcohol Tests
// or the state of being Stinking Drunk are eliminated. 
await this.actor.removeSystemEffect("consumealcohol1")
await this.actor.removeSystemEffect("consumealcohol2")
await this.actor.removeSystemEffect("consumealcohol3")
await this.actor.removeSystemEffect("stinkingdrunk1")

// The drinker is thereafter Fatigued 
// for a number of hours equal to 10 minus their Toughness Bonus — 
// nothing but time and rest can eliminate this penalty.
await this.actor.addCondition("fatigued")
const duration = 10 - parseInt(this.actor.system.characteristics.t.bonus)
this.effect.updateSource({"duration.rounds" : duration});
this.script.scriptMessage(`<p><strong>${this.actor.prototypeToken.name}</strong> ne souffre des pénalités dues à l'alcool et reçoit 1 état Fatigué pour ${duration} heures.</p>`, 
{
  whisper: ChatMessage.getWhisperRecipients("GM"), 
  blind: true 
})    