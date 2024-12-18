if (args.applyAP && args.modifiers.ap.metal) 
{
    args.modifiers.ap.ignored += args.modifiers.ap.metal
    args.modifiers.other.push({value : args.modifiers.ap.metal, label : this.effect.name, details : "Ajout les PA Métalliques aux Dommages" })
    args.modifiers.ap.details.push("<strong>" + this.effect.name + "</strong>: Ignore le métal (" + args.modifiers.ap.metal + ")");
    args.modifiers.ap.metal = 0
}