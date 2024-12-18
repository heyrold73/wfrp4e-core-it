let fatigued = this.actor.hasCondition("fatigued")
if (fatigued)
{
   this.script.scriptNotification(`Suppression de ${fatigued.conditionValue} états Fatigué`)
   fatigued.delete();  
}
else 
{
	this.script.scriptNotification(`Aucun état Fatigué`)
}