let choice = await ItemDialog.create(this.actor.itemTypes.critical, (this.effect.sourceTest.result.overcast.usage.other.current || 1), "Choisissez la Blessure Critique à soigner (ne peut guérir les membres perdus)")

this.script.scriptMessage(`Guéri de <strong>${choice.map(i => i.name).join(`, `)}</strong>`);
this.actor.deleteEmbeddedDocuments("Item", choice.map(i => i.id))