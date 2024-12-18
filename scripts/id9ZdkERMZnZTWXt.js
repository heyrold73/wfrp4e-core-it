if (args.extendedTest?.getFlag("wfrp4e", "fear"))
{
	this.script.scriptNotification("Immunisé à la Peur");
	args.extendedTest.delete();
	args.abort = true;
}
return args.options.terror || args.extendedTest?.getFlag("wfrp4e", "fear")