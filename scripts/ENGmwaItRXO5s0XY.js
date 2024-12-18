await this.actor.modifyWounds(this.actor.system.characteristics.t.bonus * 3)
this.script.scriptMessage(`Soigne ${this.actor.system.characteristics.t.bonus * 3} Blessures`)

this.actor.hasCondition("bleeding")?.delete()
this.actor.hasCondition("fatigued")?.delete()
