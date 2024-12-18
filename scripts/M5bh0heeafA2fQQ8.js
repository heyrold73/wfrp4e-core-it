if (args.test.spell?.getFlag("wfrp4e", "boonOfTzeentch"))
{
    if (args.test.result.minormis || args.test.result.majormis || args.test.result.catastrophicmis)
    {
        this.script.scriptMessage(`<strong>${this.effect.name}</strong> s'efface de votre esprit et s'efface de votre grimoire !`)
        this.effect.sourceItem.delete();
    }
}