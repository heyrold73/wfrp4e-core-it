let test = await args.actor.setupCharacteristic("wp", {skipTargets: true, appendTitle :  " - " + this.effect.name, context : {failure: "Gain d'un état Assomé"}})
await test.roll();
if (test.failed)
{
    args.actor.addCondition("stunned")
}

