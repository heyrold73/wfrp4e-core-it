let item = await fromUuid("Compendium.wfrp4e-core.items.Q2MCUrG2HppMcvN0")
item = item.toObject()
let species = args.actor.Species || " de votre espèce"
item.name = `Animosité (tous sauf ${species})`
this.actor.createEmbeddedDocuments("Item", [item], {fromEffect : this.effect.id})