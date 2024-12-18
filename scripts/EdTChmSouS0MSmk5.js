let test = await this.actor.setupCharacteristic("wp", {skipTargets: true, appendTitle :  ` - ${this.effect.name}`})
await test.roll();
if (test.succeeded)
{
    this.script.scriptMessage("Peut effectuer une Action ou un Mouvement (en choisir un)")
}
else 
{
    this.script.scriptMessage("Ne peut pas effectuer d'Action ou de Mouvement ce round")    
}