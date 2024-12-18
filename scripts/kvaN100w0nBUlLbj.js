let poisoned = this.actor.hasCondition("poisoned")
if (poisoned)
{
    this.script.scriptMessage("Immunisé aux Poisons")
    poisoned.delete()
}