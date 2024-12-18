if (["cast", "channelling", "pray"].includes(args.type))
{
	args.abort = true;
	this.script.scriptNotification("Impossible d'incanter un Sort ou d'utiliser un Prière");
}
else return true;