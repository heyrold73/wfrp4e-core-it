if (args.test.options.healWounds) {
 if (args.test.succeeded) 
 {
   let wounds = this.actor.characteristics.int.bonus + Number(args.test.result.SL)
   if (args.test.options.fieldDressing && args.test.result.reversed)
   {
      wounds = this.actor.characteristics.int.bonus + Math.min(1, Number(args.test.result.SL))
   }
	args.test.result.woundsHealed = wounds
	args.test.result.other.push(`<b>${this.actor.name}</b> guérit <b>${wounds}</b> Points de Blessures du patient.`)
   }
   else if (this.actor.characteristics.int.bonus + Number(args.test.result.SL) < 0)
   {
      args.test.result.other.push(`Le patient subit une @UUID[Compendium.wfrp4e-core.items.Item.1hQuVFZt9QnnbWzg]{Infection Mineure}.`)
   }
}