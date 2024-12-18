if (args.options.dodge)
{
	args.abort = true;
	this.script.scriptNotification("Ne peut pas esquiver!")
}
return ["t", "int", "wp", "fel"].includes(args.characteristic)