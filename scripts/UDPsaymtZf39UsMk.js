
let fatigued = this.actor.hasCondition("fatigued")
if (!fatigued) {
  this.actor.addCondition("fatigued")
  ui.notifications.notify("Fatigue ajouté à  " + this.actor.name + " qui ne peut être supprimé tant que le symptôme Malaise est présent.")
}