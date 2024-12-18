let actorSize = game.wfrp4e.config.actorSizeNums[args.actor.details.size.value]
let attackerSize = game.wfrp4e.config.actorSizeNums[args.attacker.details.size.value]

if (attackerSize > actorSize)
{
   args.actor.addCondition("prone")
   this.script.scriptMessage(`<strong>Attaque Caudale</strong>: ${args.actor.prototypeToken.name} est désormais <strong>A Terre</strong>`)
}