if (args.test.options.staunchBleeding) 
{
 if (args.test.succeeded) 
 {
   let staunch =  Number(args.test.result.SL) + 1
   if (args.test.options.fieldDressing && args.test.result.reversed)
   {
     staunch =  Math.min(1, Number(args.test.result.SL)) + 1
   }
   args.test.result.other.push(`<b>${this.actor.name}</b> guérit <b>${staunch}</b> états Hémorragiques du patient.`)
 }
   else if (this.actor.characteristics.int.bonus + Number(args.test.result.SL) < 0)
   {
      args.test.result.other.push(`Le patient est victime d'une @UUID[Compendium.wfrp4e-core.items.Item.1hQuVFZt9QnnbWzg]{Infection Mineure}.`)
   }
}