fromUuid(this.effect.origin).then(caster => {
   if (caster) {
      if (actor.items.find(it => it.name == game.i18n.localize("Bestial"))) {
         let healed = caster.characteristics.wp.bonus
         let wounds = foundry.utils.duplicate(args.actor.status.wounds)
         wounds.value += healed

         if (wounds.value > wounds.max)
            wounds.value = wounds.max

         args.actor.update({ "system.status.wounds": wounds })
         ChatMessage.create({ content: `${this.actor.prototypeToken.name} regagne ${healed} Blessures`, speaker: { alias: this.effect.name } })
      } else {
         ui.notifications.warn("L'Acteur ciblé n'a pas le Trait Bestial")
      }
   }
})

