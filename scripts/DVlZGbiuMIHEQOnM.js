if (this.actor.getFlag("wfrp4e", "isAttached")) 
{
	let roll = await new Roll("1d10").roll()
	await roll.toMessage(this.script.getChatData());
	if (roll.total == 9 || roll.total == 10)
	{
	  this.script.scriptMessage(`<strong>${this.actor.name}</strong> attaché à <strong>${this.actor.getFlag("wfrp4e", "isAttached")}</strong> tombe.`)
	  await this.actor.unsetFlag("wfrp4e", "isAttached")      
	}
  }