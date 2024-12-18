// A Drinker must take a Difficult (-10) Endurance Test.
let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {skipTargets: true, appendTitle :  ` - ${this.effect.name}`, fields: {difficulty: "difficult"}})
await test.roll()
// If they fail, they acquire 2 Poisoned Conditions. 
if (test.failed) 
{
    this.actor.addCondition("poisoned", 2)
    this.script.scriptMessage(`<p><strong>${this.actor.prototypeToken.name}</strong> reçoit 2 états @Condition[Empoisonné].</p>
        <p>Toute créature avec le Trait Bestial qui le mord et provoque des dégats ne le mordra pas à nouveau durant un combat, la créature pouvant toutefois attaquer avec d'autres méthodes si disponibles..</p>`, 
    {
      whisper: ChatMessage.getWhisperRecipients("GM"), 
      blind: true 
    })
}
  // If they succeed, for a number of rounds equal to 3+ their SL, they have the Corrosive Blood Creature Trait.
else if (test.succeeded) 
{
    // Don't attempt to add Corrosive Blood if actor already has it
    const hasCorrosiveBlood = this.actor.has("Sang corrosif")
    if (hasCorrosiveBlood !== undefined) return   

    let item = await fromUuid("Compendium.wfrp4e-core.items.M5QSWOYt2Rbv2yxW")
    let data = item.toObject()
    this.actor.createEmbeddedDocuments("Item", [data], {fromEffect: this.effect.id})
    
    const duration = 3 + parseInt(test.result.SL)
    this.script.scriptMessage(`<p><strong>${this.actor.prototypeToken.name}</strong> gagne le Trait Sang Corrosif pour ${duration} rounds.</p>`, 
      { whisper: ChatMessage.getWhisperRecipients("GM"), blind: true })    
}