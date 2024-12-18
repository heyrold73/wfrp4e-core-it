const talents = await Promise.all(["Assaut féroce", "Pied marin"].map(game.wfrp4e.utility.findTalent))
this.actor.createEmbeddedDocuments("Item", talents, {fromEffect : this.effect.id})