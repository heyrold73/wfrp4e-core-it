let poisoned = args.actor.hasCondition("poisoned")
if (poisoned)
{
   this.script.scriptNotification(`Suppression de ${poisoned.conditionValue} états Empoisonné`)
   poisoned.delete();  
}
else
  this.script.scriptNotification(`Aucun état Empoisonné`)