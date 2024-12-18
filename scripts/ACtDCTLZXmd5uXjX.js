let halve;
if (args.opposedTest.attackerTest.item?.type != "spell")
{
    halve = await Dialog.confirm({title : this.effect.name, content : "Diviser les dommages? (Divise par 2 tout les dommages autre que ceux causés par le feu, le froid et magiques)"})
}
else
{
    halve = false;
}

if (halve)
{
    args.totalWoundLoss /= 2;
    args.modifiers.other.push({label : this.effect.name, details : "Divisé par 2", value : "× 0.5"})
}