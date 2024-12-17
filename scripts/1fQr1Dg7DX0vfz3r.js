let healed = parseInt(this.effect.sourceTest.result.SL)
this.actor.modifyWounds(healed)
this.script.scriptMessage(`Soins de ${healed} Blessures`)