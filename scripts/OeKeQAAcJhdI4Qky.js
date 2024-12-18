if (this.actor.hasCondition("stunned") || this.actor.hasCondition("unconscious"))
{
	this.script.scriptNotification("Désactivé!");
	await this.effect.update({"disabled" : true})
}