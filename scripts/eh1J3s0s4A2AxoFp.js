let item = await fromUuid("Compendium.wfrp4e-core.items.Item.8pVzgPkgWpTJvfhG");
let data = item.toObject();
data.name += " (Ennemi)";
this.actor.createEmbeddedDocuments("Item", [data], {fromEffect: this.effect.id})