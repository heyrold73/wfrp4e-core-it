if (args.test.characteristicKey == "wp" && args.test.failed && args.test.result.SL <= -3)
{
    this.script.scriptNotification("Ajout de A Terre");
    this.actor.addCondition("prone")
}