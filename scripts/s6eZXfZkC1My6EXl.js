let lore = this.effect.name.split(" ")[2].toLowerCase();
if (args.item.type == "spell" && game.wfrp4e.config.magicLores[args.item.system.lore.value].toLowerCase() == lore)
{
    args.item.system.cn.value -= 1
}