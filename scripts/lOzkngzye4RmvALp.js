let item = await fromUuid("Compendium.wfrp4e-core.items.DrNUTPeodEgpWTnT")
this.actor.createEmbeddedDocuments("Item", [item], {fromEffect : this.effect.id});
this.script.scriptNotification("Ajout de " + item.name)