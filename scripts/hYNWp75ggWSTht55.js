if (args.test.result.hitloc.value != "head" && args.test.result.critical)
{
	game.wfrp4e.utility.sleep(200).then(() => {
		this.script.scriptMessage("Peut effectuer un jet sur the @Table[crithead]{Coups Critiques à la Tête} au lieu de la localisation normale")

	})
}