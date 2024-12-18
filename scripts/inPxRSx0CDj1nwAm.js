if (args.test.result.fumble && !this.actor.itemTypes.talent.find(i => i.name == "Magie des Arcanes (Feu)"))
{
    this.actor.addCondition("ablaze");
}