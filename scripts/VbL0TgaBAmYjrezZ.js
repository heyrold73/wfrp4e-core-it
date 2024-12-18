const talents = await Promise.all(["Dur à cuire"].map(game.wfrp4e.utility.findTalent))
this.actor.createEmbeddedDocuments("Item", talents, {fromEffect : this.effect.id})