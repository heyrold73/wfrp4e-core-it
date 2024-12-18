let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {skipTargets: true, appendTitle :  ` - ${this.effect.name}`, fields : {difficulty: "veasy"}})
await test.roll();
if (test.failed)
{
      this.script.scriptNotification("Subi une <strong>Blessure Purulente</strong>")
      let item = await fromUuid("Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb")
      this.actor.createEmbeddedDocuments("Item", [item.toObject()])
}
else 
{
    this.script.scriptNotification("Evite une <strong>Blessure Purulente</strong>")
}
