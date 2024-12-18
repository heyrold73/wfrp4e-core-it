let bleeding = this.actor.hasCondition("bleeding")
if (bleeding)
{
   this.script.scriptNotification(`Suppression de ${bleeding.conditionValue} états Hémorragiques`)
   bleeding.delete();  
}
else 
{
   this.script.scriptNotification(`Aucune Hémorragie`)
}