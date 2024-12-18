if (args.extendedTest?.getFlag("wfrp4e", "fear"))
{
	this.script.scriptNotification("Immunisé à la Peur");
	args.extendedTest.delete();
	args.abort = true;
}