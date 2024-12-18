if (args.opposedTest?.attackerTest?.item?.system?.isRanged) 
{
    let choice = await Dialog.wait({
        title: this.effect.name,
        content: `<p>Eviter les dégâts avec  <strong>${this.effect.name}</strong>?`,
        buttons: {
            yes: {
                label: "Oui",
                callback: () => {
                    return true;
                }
            },
            no: {
                label: "Non",
                callback: () => {
                    return false;
                }
            }
        }
    })

    if (choice)
    {
        args.abort = `<strong>${this.effect.name}</strong>: Dégâts annulés`
    }
}