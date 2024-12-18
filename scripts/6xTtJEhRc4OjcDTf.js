if (getProperty(args.data, "system.status.fortune.value"))
{
	this.script.scriptNotification("Impossible de mettre à jour la Fortune");
	delete args.data.system.status.wounds.value;
}