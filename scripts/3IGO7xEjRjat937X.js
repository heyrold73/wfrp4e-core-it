let fatigue = this.actor.hasCondition("fatigued")
if (fatigue)
{
   this.script.scriptNotification("Suppression de l'état Fatigué, effet désactivé.")
    this.effect.update({disabled : true})
   await this.actor.removeCondition("fatigued")
}