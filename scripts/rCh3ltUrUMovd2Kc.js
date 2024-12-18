if (this.actor.hasCondition("surprised"))
{
    this.script.scriptNotification("Ne peut être surpris");
    this.actor.removeCondition("surprised");
}