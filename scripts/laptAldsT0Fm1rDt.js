let blunt = await Dialog.confirm({label : "test", content :`<p>Appliquer la réduction des Dégats contondants? (-3)</p>`})

if (blunt)
{
    args.modifiers.other.push({label : this.effect.name, details : "Réduction des dégats contondants", value : -3})
}