let wounds = this.actor.system.status.wounds
if (wounds.value == 0)
  return this.script.scriptNotification("Aucun effet à 0 Blessures", "error")

this.script.scriptNotification(`Soin de ${this.actor.characteristics.t.bonus} Blessures`)
await this.actor.modifyWounds(this.actor.characteristics.t.bonus)