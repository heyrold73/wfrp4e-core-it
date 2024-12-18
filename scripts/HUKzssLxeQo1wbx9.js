
let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), { fields: { difficulty: "average" }, appendTitle: " - - Blessé" })
await test.roll();
if (test.failed) {
  fromUuid("Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb").then(disease => {
    this.actor.createEmbeddedDocuments("Item", [disease.toObject()])
    this.script.scriptNotification("Gain de " + disease.name)
  })
}