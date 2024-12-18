if (this.actor.hasCondition("broken"))
{
    this.actor.removeCondition("broken")
    this.script.scriptNotification(`Impossible de supprimer l'état Brisé`);
}