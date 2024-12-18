if (this.actor.hasCondition("surprised"))
{
    this.actor.removeCondition("surprised")
    this.script.scriptMessage(`Ne peut être surpris`);
}