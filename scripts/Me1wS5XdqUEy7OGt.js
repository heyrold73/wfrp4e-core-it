let loc = (await game.wfrp4e.tables.rollTable("hitloc")).result;
let critTable = `crit${this.generalizeTable(loc)`;
let crit = (await game.wfrp4e.tables.rollTable(critTable)).result;

this.script.scriptMessage(`{this.actor.name} subit un ${crit} (localisation : ${loc}). Ne pas appliquer d'Hemmoragie ou de Blessures additionnelles.`);