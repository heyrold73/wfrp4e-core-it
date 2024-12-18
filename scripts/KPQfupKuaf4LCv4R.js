const talents = await Promise.all(["Intrigant", "Seconde Vue"].map(game.wfrp4e.utility.findTalent))
this.actor.createEmbeddedDocuments("Item", talents, {fromEffect : this.effect.id})