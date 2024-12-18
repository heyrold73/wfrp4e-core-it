if (!this.actor.effects.find(e => e.isCondition))
{
	return this.script.scriptNotification("Aucun état sur cet Acteur")
}

let choice = await ItemDialog.create(this.actor.effects.filter(i => i.isCondition), 1, "Choisissez un état")

if (choice[0])
{
	this.actor.removeCondition(choice[0].conditionId)
}
