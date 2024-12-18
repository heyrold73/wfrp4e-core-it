let choice = await ItemDialog.create(this.actor.itemTypes.disease, 1, "Choisissez une Maladie à soigner (doit avoir été contracté naturellement)")

this.script.scriptMessage(`Guérison de <strong>${choice[0]?.name}</strong>`);
choice[0].delete()