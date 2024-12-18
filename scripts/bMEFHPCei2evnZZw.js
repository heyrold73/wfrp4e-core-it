// Victims that take at least 1 Wound from a Fell Dagger
// immediately take a Poisoned Condition 
// resisted with a Difficult (-10) Endurance Test. 

// TODO: Add Venom strength to message

if (args.totalWoundLoss > 0) 
{
  args.actor.addCondition("poisoned")
  this.script.scriptMessage(`
      <strong>${this.effect.name}</strong>:<br>
      <strong>${args.actor.name}</strong> reçoit un état @Condition[Empoisonné], qui peut être résisté avec un <strong>Test de Résistance Difficile (-10)</strong>.`, 
      {whisper: ChatMessage.getWhisperRecipients("GM")})
}
