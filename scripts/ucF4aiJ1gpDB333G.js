if (args.test.options.catfall && (args.test.result.roll <= game.settings.get("wfrp4e", "automaticSuccess") || args.test.result.roll <= args.test.target) && !args.test.result.catfall)
{
   args.test.result.other.push(`<b>${this.effect.name}</b>: Dommages de chutes réduit de ${Number(args.test.result.SL) + 1} mètres`)
   args.test.result.catfall = true; // Prevent duplicate messages
}