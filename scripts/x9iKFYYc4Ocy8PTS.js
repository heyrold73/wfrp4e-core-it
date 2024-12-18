let item = this.effect.getCreatedItems()?.[0];
ChatMessage.create({content : "<em>La grâce est au delà du style</em>", speaker : ChatMessage.getSpeaker({token: this.actor.getActiveTokens()[0]?.document, actor: this.actor})}, {chatBubble : true})

let choice = await ItemDialog.create(ItemDialog.objectToArray({
    "nobles" : "Nobles",
    "guilders" : "Maitres de Guildes",
    "servants" : "Serviteurs"
}), 1, "Choisissez un groupes")

let name = choice[0]?.name

if (!name)
{
    return;
}

if (item)
{
    item.update({
        name : item.name.split("(")[0] + ` (${name})`, 
        "system.tests.value" : item.system.tests.value.split("(")[0] + ` (${name}`
    })
}
else 
{
    item = await fromUuid("Compendium.wfrp4e-core.items.Item.sYbgpSnRqSZWgwFP");
    let data = item.toObject();
    data.name += ` (${name})`
    this.actor.createEmbeddedDocuments("Item", [data], {fromEffect: this.effect.id})
}