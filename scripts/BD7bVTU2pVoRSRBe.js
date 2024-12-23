let symptoms = {
    convulsions : "Convulsions",
    coughsandsneezes : "Coughs and Sneezes",
    fever : "Fever",
    flux : "Flux",
    nausea : "Nausée"
}

let roll = await (new Roll(`max(0, 1d10 - ${this.actor.characteristics.wp.bonus})`).roll())
roll.toMessage(this.script.getChatData());

let choices = await ItemDialog.create(ItemDialog.objectToArray(symptoms), roll.total, "Choisissez les Symptomes");

if (choices.length)
{
    let symptomEffects = foundry.utils.duplicate(game.wfrp4e.config.symptomEffects)
    let added = []
    for(let choice of choices)
    {
        let symptom = symptomEffects[choice.id];
        symptom.origin = this.effect.uuid;
        added.push(symptom);
    }
    this.actor.createEmbeddedDocuments("ActiveEffect", added)
}
else 
{
    this.effect.delete();
}

