if (this.actor.has("Résistance à la Magie", "talent")) 
    return

let item = await fromUuid("Compendium.wfrp4e-core.items.Item.eowbsW6oHGSNJmxV")
this.actor.createEmbeddedDocuments("Item", [item], {fromEffect : this.effect.id})