if (args.test.options.staunchBleeding) {
 if (args.test.result.roll <= game.settings.get("wfrp4e", "automaticSuccess") || args.test.result.roll <= args.test.target) {
   let staunch =  ~~args.test.result.SL + 1
   if (args.test.options.fieldDressing && args.test.result.reversed)
     staunch =  Math.min(1, Number(args.test.result.SL)) + 1
   args.test.result.other.push(`<b>${this.actor.name}</b> supprime <b>${staunch}</b> Etats Hémorragiques du patient.`)
   }
   else if (this.actor.characteristics.int.bonus + args.test.result.SL < 0)
      args.test.result.other.push(`Le patient contracte une @UUID[Compendium.wfrp4e-core.items.Item.1hQuVFZt9QnnbWzg]{Infection Mineure}.`)
}