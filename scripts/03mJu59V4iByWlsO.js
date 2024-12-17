// The imbiber immediately
// takes 3 Poisoned Conditions that cannot be resisted at first,
await this.actor.addCondition("poisoned", 3)

// recovers a number of Wounds equal to their Toughness Bonus, 
await this.actor.modifyWounds(this.actor.system.characteristics.t.bonus)

// and acquires the Regenerate Creature Trait.
const hasRegenerate = this.actor.has("Régénération")
if (hasRegenerate === undefined) {
  fromUuid("Compendium.wfrp4e-core.items.SfUUdOGjdYpr3KSR").then(trait => {
    let traitItem = trait.toObject()
    this.actor.createEmbeddedDocuments("Item", [traitItem], {fromEffect: this.effect.id})
  })
}

this.script.scriptMessage(`<p><strong>${this.actor.prototypeToken.name}</strong> :
    <ul>
      <li>Reçoit 3 états Empoisonnés, sans Test de Résistance possible</li>
      <li>Récupère ${this.actor.system.characteristics.t.bonus} Blessures</li>
      <li>Acuiert le Trait de Creature Régénération.</li>
    </ul>
    C'est à Ranaldde choisir si la régénératin peut guérir de l'empoisonnement.</p>
    <p>Lorsque tout les états Empoisonnés sont terminés, le Trait Régénération est perdu également.</p>`, 
    { whisper: ChatMessage.getWhisperRecipients("GM"), blind: true })   
