this.actor.addCondition("entangled")
let msg = `<b>${this.actor.prototypeToken.name}</b> perd 1 Blessure et reçoit l'état <strong>Empêtré</strong>.`
this.script.scriptMessage(msg)
this.actor.modifyWounds(-1)