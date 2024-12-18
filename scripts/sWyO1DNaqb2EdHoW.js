if (!this.actor.items.getName(game.i18n.localize("NAME.Frenzy"))) // Either frenzy trait or psychology
{
  // Add Frenzy psychology
  let item = await fromUuid("Compendium.wfrp4e-core.items.DrNUTPeodEgpWTnT")
  let data = item.toObject();
  data.effects[0].disabled = false;
  this.actor.createEmbeddedDocuments("Item", [data], {fromEffect: this.effect.id})
}

this.script.scriptMessage(`<p><strong>En buvant cette potion, ${this.actor.prototypeToken.name}</strong> est devenu sujet à la Frénesie. Cette Frénésie dure [[1d10]] Rounds, et ne peut pas se terminer avant.</p>`, 
  {whisper: ChatMessage.getWhisperRecipients("GM"), blind: true })   