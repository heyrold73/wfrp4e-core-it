if (this.actor.flags.holed.half !== true) return;
if (this.actor.flags.holed.reminded === true) return;

const speaker = ChatMessage.getSpeaker({actor: this.actor});
this.script.scriptMessage(`<p><b>${speaker.alias}</b> tombe lourdements dans l'eau. A moins que la cargaison soit étanche, elle perd [[d10]]% de sa valeur.</p>`);

this.actor.flags.holed.reminded  = true;