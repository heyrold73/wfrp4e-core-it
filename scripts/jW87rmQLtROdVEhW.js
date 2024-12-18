  if (["orc", "ork", "goblin", "hobgoblin", "snotling", "greenskin"].includes(args.opposedTest.defender.details.species.value.toLowerCase()))
    {
      args.addImpact = true
      args.opposedTest.result.other.push("<b>Rune de Banissement de Gobelin</b>: Ajout d'Impact")
    }