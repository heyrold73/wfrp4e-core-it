let fatigued = this.actor.hasCondition("fatigued")
if (fatigued)
{
    fatigued.delete();
    this.script.scriptNotification("Fatigue supprimée")
}