let item = await fromUuid("Compendium.wfrp4e-core.items.SYjWiKDzMS6CtROJ")
let data = item.toObject();
data.system.location.key = this.item.system.location.key
if (this.item.system.location.key == "rArm")
{
	data.system.location.value = "Main Droite"
	data.system.location.key = "rHand"
}
else if (this.item.system.location.key == "lArm")
{
	data.system.location.value = "Main Gauche"
	data.system.location.key = "lHand"
}
this.actor.createEmbeddedDocuments("Item", [data])