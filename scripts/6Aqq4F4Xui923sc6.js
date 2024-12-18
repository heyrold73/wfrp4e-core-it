// Imbibing this substance grants the user the Painless Creature Trait.
const hasColdBlooded = this.actor.has("A Sang Froid")
if (hasColdBlooded === undefined) 
{
  let item = await fromUuid("Compendium.wfrp4e-core.items.mCh1KK9jomwFZcLB")
  let data = item.toObject()
  this.actor.createEmbeddedDocuments("Item", [data], {fromEffect: this.effect.id})
  
  this.script.scriptMessage(`<p><strong>${this.actor.prototypeToken.name}</strong> reçoit le Trait de Créatuer A Sang Froid et peut inverser n'importe quel test de Force Mentale échoué.</p>
  <p>Si il reçoit un état Surpris, cet état n'est pas perdu la première fois (typiquement à la fin du Round ou si il est attaqué).</p>`, 
  {whisper: ChatMessage.getWhisperRecipients("GM"), blind: true })   
}