if (args.opposedTest.result.hitloc.value == this.effect.flags.wfrp4e.location) // e.g. 'head', rLeg, 'lArm'
{
     this.scriptMessage(`Reçoit l'état @Condition[Aveuglé] comme <strong>${this.item.name}</strong> a été touché`);
     this.actor.addCondition("blinded");
}