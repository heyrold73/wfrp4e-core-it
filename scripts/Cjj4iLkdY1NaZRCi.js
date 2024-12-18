if ((args.opposedTest.attackerTest.item && args.opposedTest.attackerTest.item.isMelee) || (args.opposedTest.attackerTest.item && !args.opposedTest.attackerTest.item.name.includes("Projectiles")))
{
    let choice = await Dialog.wait({
        title: this.effect.name,
        content: `<p>Appliquer les dommages de <strong>${this.effect.name}</strong> à l'attquant?`,
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
        this.script.scriptMessage(await args.attacker.applyBasicDamage(this.actor.system.characteristics.wp.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_AP, suppressMsg : true}));
    }
}