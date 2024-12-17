let table = game.wfrp4e.tables.findTable("mutatephys");
if (!table)
{
	return ui.notifications.error("La table des Mutations n'a pas été trouvée. Assurez vous que la table avec la clé `mutatephys` est bien importée dans le monde.")
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
    ui.notifications.error("L'item ne peut être trouvé: " + uuid)
}