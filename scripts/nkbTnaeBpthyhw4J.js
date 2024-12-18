let fortunePoints = this.effect.sourceTest.result.overcast.usage.other.current
let current = this.actor.status.fortune.value

this.actor.update({"system.status.fortune.value" : fortunePoints + current})

this.script.scriptMessage(`<b>${this.actor.prototypeToken.name}</b> voit ses Points de Chance augmenter de ${current} à ${fortunePoints + current}`)