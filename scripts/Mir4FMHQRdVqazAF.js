let actorSize = game.wfrp4e.config.actorSizeNums[args.actor.details.size.value]
let attackerSize = game.wfrp4e.config.actorSizeNums[args.attacker.details.size.value]

if (attackerSize > actorSize)
{
   let msg = `<b>Attaque de Langue préhensile</b>: ${args.actor.prototypeToken.name} est désormais @Condition[Empêtré]`;
   await args.actor.addCondition("entangled");
   if (actorSize <= 2)
   {
       msg += `et @Condition[Engagé]`
   }
   this.script.scriptMessage(msg, {speaker : {alias: args.attacker.prototypeToken.name}})
}