const talents = await Promise.all(["Frénésie", "Résistance à la Magie"].map(game.wfrp4e.utility.findTalent))
this.actor.createEmbeddedDocuments("Item", talents, {fromEffect : this.effect.id})