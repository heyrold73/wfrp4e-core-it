// Imbibing this substance grants the user the Painless Creature Trait.
const hasPainless = this.actor.has("Insensible à la douleur");
if (hasPainless === undefined) 
{
  let item = await fromUuid("Compendium.wfrp4e-core.items.wMwSRDmgiF2IdCJr");
  let data = item.toObject()
  this.actor.createEmbeddedDocuments("Item", [data], {fromEffect: this.effect.id})
  
  this.script.scriptMessage(
  `<p><strong>${this.actor.prototypeToken.name}</strong> gagne le Trait de Creature Insensible à la Douleur. Cet effet dure 1 heure, après quoi il disparait et le total des Blessures encaissés par le buveur sont encaissés d'un coup.</p>
    <p>Notez que cela n'empêche pas le buveur de recevoir une Blessure Critique ou de mourrir. Cela permet par contre d'éviter la majorité de leur effets.</p>`, 
    { whisper: ChatMessage.getWhisperRecipients("GM"), blind: true})
}