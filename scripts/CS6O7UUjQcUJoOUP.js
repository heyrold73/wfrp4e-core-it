if (args.test.failed) {
  let SL = Number(args.test.result.SL)
  if (SL <= -2 && SL > -4)
    this.actor.addCondition("stunned")
  else if (SL <= -4 && SL > -6)
    this.script.scriptMessage(this.actor.prototypeToken.name + " doit réaliser un Test de  <b>Force Mentale</ou subir la condition @Condition[A Terre].")
  else if (SL <= -6)
    this.actor.addCondition("unconscious")
}