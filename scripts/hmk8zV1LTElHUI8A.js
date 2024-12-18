let msg = `<b>${this.actor.prototypeToken.name}</b> perd 1 Blessure.<br>`
  if (this.actor.status.wounds.value <= 1)
  {
    msg += `<b>${this.actor.prototypeToken.name}</b> tombe Inconscient.<br>`
    await this.actor.addCondition("unconscious")
  }
  this.script.scriptMessage(msg)
  this.actor.modifyWounds(-1)