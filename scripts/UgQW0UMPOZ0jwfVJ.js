let current = this.actor.status.fortune.value

this.actor.update({"system.status.fortune.value" : 1 + current})

this.script.scriptMessage(`<b>${this.actor.prototypeToken.name}</b> voit ses Points de Chance augmenter de  ${current} à ${1 + current}`)