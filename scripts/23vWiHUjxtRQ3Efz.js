let item = await fromUuid("Compendium.wfrp4e-core.items.eWPN3CV2Eddwz8aM")
let data = item.toObject();
data.system.location.value = "Dos"
this.actor.createEmbeddedDocuments("Item", [data], {fromEffect: this.effect.id})