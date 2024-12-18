if (!this.actor.has("Vision Nocturne") && !this.actor.has("Vision Nocturne", "talent") && !this.actor.hasCondition("blinded"))
{
    this.actor.addCondition("blinded", 1, {"flags.wfrp4e.nightshroud" : true})
}