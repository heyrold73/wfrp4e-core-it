let caster = this.effect.sourceActor;

this.actor.modifyWounds(caster.system.characteristics.fel.bonus);

this.script.scriptMessage(`Guérison de ${caster.system.characteristics.fel.bonus} Blessures`);