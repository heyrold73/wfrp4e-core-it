let injury = this.effect.itemTargets[0]
if (injury && this.effect.sourceTest.result.outcome == "success") {
  let roll1 = new Roll(injury.system.duration.value)
  await roll1.roll()
  let days = roll1.total
  let num = 1 + Number(this.effect.sourceTest.result.SL);
  let roll = await new Roll(num + 'd10').roll()
  await roll.toMessage(this.script.getChatData())
  let newDays = Math.max(days - roll.total, 1)
  this.actor.updateEmbeddedDocuments("Item", [{ _id: injury.id, 'system.duration.value': newDays }])
  let message = "Blessures réduites à  " + newDays + " (-" + roll.total + ") au lieu de " + days
  this.script.scriptMessage(message)
}
