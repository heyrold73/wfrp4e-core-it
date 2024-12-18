if (args.test.characteristicKey == "wp") 
{
    if (args.test.failed)
    {
        let item = await fromUuid("Compendium.wfrp4e-core.items.AGcJl5rHjkyIQBPP")
        let data = item.toObject();
        this.actor.createEmbeddedDocuments("Item", [data])
        
        this.script.scriptMessage(`Test de Force Mentale échoué, <b>${this.actor.prototypeToken.name}</b> @UUID[Compendium.wfrp4e-core.items.AGcJl5rHjkyIQBPP] pour [[1d10]] heures`)
    }
}