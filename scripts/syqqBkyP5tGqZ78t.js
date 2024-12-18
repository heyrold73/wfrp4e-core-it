this.actor.has("Immunité Psychologique")?.delete();

let roll = await new Roll("1d10").roll();

roll.toMessage(this.script.getChatData());

this.script.scriptNotification(`Immunité Psychologique a été supprimé de l'acteur, ajout de ${roll.total} états Brisé`)
this.actor.addCondition("broken", roll.total, {"flags.wfrp4e.blasted-mind" : true})