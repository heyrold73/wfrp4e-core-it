if (this.actor.hasCondition("ablaze"))
{
    this.script.scriptNotification("Immunisé à  En Flammes")
    await this.actor.hasCondition("ablaze")?.delete()
}