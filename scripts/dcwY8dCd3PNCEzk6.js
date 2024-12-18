let current = this.actor.status.fate.value

this.actor.update({"system.status.fate.value" : current + 1})

this.script.scriptMessage(`<b>${this.actor.prototypeToken.name}</b> voit ses Points de Destin augmentés de ${current} à ${current + 1}`)