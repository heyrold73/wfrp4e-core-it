let item1 = await fromUuid("Compendium.wfrp4e-core.items.Item.EO05HX7jql0g605A")
let item2 = await fromUuid("Compendium.wfrp4e-core.items.Item.Bvd2aZ0gQUXHfCTh")
let ids = await this.actor.createEmbeddedDocuments("Item", [item1, item2], {fromEffect : this.effect.id})
console.log(ids)
this.actor.updateEmbeddedDocuments('Item', [ {id: ids[0], 'system.specification.value': 16} ] )

