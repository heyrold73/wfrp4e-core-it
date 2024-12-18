if (args.totalWoundLoss > 0)
{
    let apply = await Dialog.confirm({title : this.effect.name, content : `<p>Appliquer les dégats de ${this.effect.name}? L'attaquant doit avoir utilisé ses mains nues ou une arme de mêlée faite de métal.`})
    if (apply)
    {
            
        let damage = 5 + this.actor.characteristics.wp.bonus;
        
        let loc = args.opposedTest.attackerTest.weapon?.system.usesHands[0] || "rArm";
        
        let APatLoc = args.opposedTest.attacker.system.status.armour[loc];
        
        let metalAP = APatLoc.layers.reduce((metal, layer) => metal += (layer.metal ? layer.value : 0), 0)
        
        let APused = Math.max(0, APatLoc.value - metalAP); // remove metal AP at location;
        
        damage -= (APused + args.opposedTest.attacker.system.characteristics.t.bonus)
        
        let msg = await args.opposedTest.attacker.applyBasicDamage(damage, {suppressMsg : true, damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
        msg += ` (${metalAP} PA métalliques ignorés sur ${game.wfrp4e.config.locations[loc]})`
        this.script.scriptMessage(msg)
    }
}