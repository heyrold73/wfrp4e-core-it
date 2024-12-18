let stunned = this.actor.hasCondition("stunned")
if (stunned)
{
   this.script.scriptNotification(`Suppression de 1 état Assomé`)
   this.actor.removeCondition("stunned");
}
else 
{
	this.script.scriptNotification(`Aucun état Assomé`)
}