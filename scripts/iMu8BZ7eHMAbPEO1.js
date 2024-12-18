let healed = args.totalWoundLoss

this.script.scriptMessage(`<b>this.actor.prototypeToken.name</b> Guérison de ${healed} Blessures`);

this.actor.modifyWounds(healed)