let item = args.actor.items.find(i => i.name.includes("Flying Jib"));
item.name += ` (Désactivé par ${this.item.name})`;