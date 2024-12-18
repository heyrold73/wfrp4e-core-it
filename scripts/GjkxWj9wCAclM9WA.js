let effects = foundry.utils.deepClone(this.item.effects.contents.filter(e => e.active));

effects.splice(effects.length - 1);

if (effects.length == 0)
{
    return this.script.scriptNotification("Tous les effets ont été utilisés. Les remettre à 0 pour les utiliser à nouveau")
}
let choice = await ItemDialog.create(effects, 1, "Choisissez le Pouvoir à gagner");

if (choice[0])
{
    choice[0].update({disabled : true})
    let effect = choice[0].convertToApplied();
    effect.name += ` (${this.effect.name})`
    this.actor.createEmbeddedDocuments("ActiveEffect", [effect]);
}