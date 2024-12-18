if (args.test.characteristicKey == "wp") 
{
    if (args.test.failed)
    {
        this.actor.addSystemEffect("convulsions")
        this.script.scriptMessage(`Test de Force Mentale échoué, <b>${this.actor.prototypeToken.name}</b> subit des @Symptom[Convulsions] pour [[1d10]] heures`)
    }
}