let sourceActor = this.effect.sourceActor;
let damage = args.totalWoundLoss;
let tb = sourceActor.system.characteristics.t.bonus
args.abort = `<strong>${this.effect.name}</strong>: Dommages appliqués à ${sourceActor.name}`;

let message = await sourceActor.applyBasicDamage(damage - tb, {damageType: game.wfrp4e.config.DAMAGE_TYPE.IGNORE_AP, suppressMsg : true})

this.script.scriptMessage(message.replace(`${tb} TB`, `${tb} × 2 TB`))
args.abort = true;