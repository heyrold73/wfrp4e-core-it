if (!this.actor.effects.find(e => e.isCondition))
{
	return this.script.scriptNotification("Aucun état sur cet acteur")
}

let choice = await ItemDialog.create(this.actor.effects.filter(i => i.isCondition), 1, "Choisissez un état")

if (choice[0])
{
	await this.actor.removeCondition(choice[0].conditionId)
}

if (this.actor.effects.find(e => e.isCondition))
{
    return false; // Delete the effect if there are still conditions, otherwise, effect remains and provides the bonus
}