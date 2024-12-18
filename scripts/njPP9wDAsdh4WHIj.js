if (args.totalWoundLoss > 0 && ["trait", "weapon"].includes(args.opposedTest.attackerTest.item?.type))
{
     this.script.scriptMessage(`<b>Infctée: ${args.actor.name}</b> doit réussir un Test <b>Facile (+40) de Résistance</b> ou subir une @UUID[Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb]{Blessure Purulente}`, {whisper: ChatMessage.getWhisperRecipients("GM")})
}