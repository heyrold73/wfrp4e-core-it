let table = game.wfrp4e.tables.findTable("mutatemental");
if (!table)
{
	ui.notifications.error("Impossible de trouver la table des Mutations Mentales")
}
let result = (await table.roll()).results[0];
let uuid = `Compendium.${result.documentCollection}.${result.documentId}`
let item = await fromUuid(uuid);

if (item)
{
    this.script.scriptNotification(`${item.name} added`)
    this.actor.createEmbeddedDocuments("Item", [item])
}
else 
{
    ui.notifications.error("Impossible de trouver l'item: " + uuid)
}