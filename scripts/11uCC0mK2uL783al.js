let type = this.item.getFlag("wfrp4e", "breath");

if (["feu", "electricité", "poison"].includes(type))
{
    args.applyAP = false;
}