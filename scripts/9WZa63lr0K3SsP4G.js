let sourceItem = this.effect.sourceItem;

if (sourceItem)
{
	this.actor.applyEffect({effectUuids : [sourceItem.effects.contents[2].uuid]})
	this.script.scriptNotification("Applique après les effets");
}