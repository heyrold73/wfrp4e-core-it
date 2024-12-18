if (this.actor.hasCondition("bleeding"))
{
    this.actor.removeCondition("bleeding");
    this.script.scriptNotification("Suppression d'1 état Hémmoragique")
}
else 
{
    this.script.scriptNotification("Aucun état Hémorragique");
}