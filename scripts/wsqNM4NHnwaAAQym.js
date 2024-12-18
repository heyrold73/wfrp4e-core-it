    args.applyAP = false;

    this.script.scriptNotification("Ce test ne s'applique seulement qu'aux criminels. Fermez cette fenêtre si ce n'est pas le cas.");
    this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {fields : {difficulty : "average"}, skipTargets: true, appendTitle :  ` - ${this.effect.name}`}).then(async test => 
    {
      await test.roll();
      if (test.failed)
      {
        args.actor.addCondition("unconscious");
      }
    });