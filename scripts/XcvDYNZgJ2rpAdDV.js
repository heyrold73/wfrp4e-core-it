
let fatigued = this.actor.hasCondition("fatigued")
if (!fatigued) {
  this.actor.addCondition("fatigued")
  ui.notifications.notify("Etat Fatigué ajouté à " + this.actor.name + " qui ne peut être enlevé tant que le symptôme de Malaise est présent.")
}