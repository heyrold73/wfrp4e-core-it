// After consumption, the user gains the Magic Resistance 3 Creature Trait, 
// reducing the SL of any spell affecting it by 3. 
// This effect lasts for one hour.
const hasMagicResistance = this.actor.has("Résistance à la Magie")

if (hasMagicResistance === undefined) {
  fromUuid("Compendium.wfrp4e-core.items.yrkI7ATjqLPDTFmZ").then(trait => {
    let traitItem = trait.toObject()
    traitItem.system.specification.value = 2
    this.actor.createEmbeddedDocuments("Item", [traitItem], {fromEffect: this.effect.id})
  })
  this.script.scriptMessage(`<p><strong>${this.actor.prototypeToken.name}</strong> bénéficie du Trait Résistance à la Magie. Cet effet dure 1 heure.</p>`, {whisper: ChatMessage.getWhisperRecipients("GM"), blind: true })   
}

if (hasMagicResistance) {
  // Multiple doses may be consumed at once, with each one adding an additional 1 to the Magic Resistance rating and increasing the duration by one hour.  
  let msg = `<p><strong>${this.actor.prototypeToken.name}</strong> a amélioré sa Résistance à la Magie de 1 pour atteindre ${parseInt(hasMagicResistance.system.specification.value)}. Cette effte dure 1 heure.</p>`

  // Resist toxic effect
  this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {
    fields: {difficulty: "challenging"}
  }).then(async test => {
    await test.roll()

    // If they fail ...
    if (!test.succeeded) {
      msg += `<p>Cependant, il commence à suinter la bave épaisse et venimeuse qui recouvre chaque Dreadmaw. Il reçoit 1 état Empoisonné et doit continuer à recevoir 1 état @Condition[Empoisonné] andà la fin de chaque round.</p>
      <p>Si le personnage est toujours vivant à la fin de 10 rounds, les effets cessent et tout les états Empoisonnés dues à ${this.effect.name} sont supprimés.</p>`
      this.actor.addCondition("poisoned", 1)
    }
    this.script.scriptMessage(msg, {whisper: ChatMessage.getWhisperRecipients("GM"), blind: true })
  })
}
