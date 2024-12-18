let lore = this.effect.name.split("(")[1].split(")")[0].toLowerCase();
let spellLore = game.wfrp4e.config.magicLores[args.spell.system.lore.value].toLowerCase();

// If channelling corresponding lore
if (args.type == "channelling" && spellLore == lore)
    args.prefillModifiers.slBonus  += 2
// If channelling or casting different lore
else if (spellLore != lore && args.spell.system.lore.value != "petty")
    args.prefillModifiers.slBonus  -= 1