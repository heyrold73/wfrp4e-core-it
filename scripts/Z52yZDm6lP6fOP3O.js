let ablaze = this.actor.hasCondition("ablaze")
if (ablaze)
{
    this.script.scriptNotification("Immunisé à En Flammes");
    ablaze.delete()
}