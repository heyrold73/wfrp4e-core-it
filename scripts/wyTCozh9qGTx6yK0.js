if (args.options.terror || args.extendedTest?.getFlag("wfrp4e", "fear"))
{
	args.abort = true;
	this.script.scriptNotification("N'a pas besoin de faire de test de Peur ou de Terreur");
}