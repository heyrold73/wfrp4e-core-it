let item = await fromUuid("Compendium.wfrp4e-core.items.AtpAudHA4ybXVlWM")
let data = item.toObject();
data.name += ` (Si Charge)`
this.actor.createEmbeddedDocuments("Item", [data], {fromEffect : this.effect.id})