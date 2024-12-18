if (args.attacker.has("Mort-vivant") && !args.attacker.has("Ethéré"))
{
    args.totalWoundLoss =  Math.floor(args.totalWoundLoss / 2)
    args.modifiers.other.push({label : this.effect.name, details : "Divisé par deux", value : "× 0.5"})
}