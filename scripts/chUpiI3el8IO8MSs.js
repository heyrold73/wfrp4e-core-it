if (args.opposedTest.attackerTest.item?.name.includes("Morsure"))
{
    let woundsGained = args.totalWoundLoss;
    this.script.scriptMessage(`Récupère ${woundsGained} Blessures`, { whisper: ChatMessage.getWhisperRecipients("GM") })
    this.actor.modifyWounds(woundsGained)
}