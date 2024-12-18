let lore = this.effect.name.split("(")[1].split(")")[0].toLowerCase();
let spellLore = game.wfrp4e.config.magicLores[args.spell.system.lore.value].toLowerCase();
return !args.spell || (args.type == "cast" && [game.wfrp4e.config.magicLores["petty"].toLowerCase(), lore].includes(spellLore));