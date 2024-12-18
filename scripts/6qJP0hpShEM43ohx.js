const actor = args.actor;

if (actor.itemTypes.skill.find(s => s.name === "Savoir (Océans)")) {
  const loreTest = await actor.setupSkill('Savoir (Océans)',  {
    appendTitle: ` – ${this.effect.name}`,
    skipTargets: true,
    fields: {difficulty: 'hard'},
    characteristic: 'int',
  });
  await loreTest.roll();

  if (loreTest.succeeded) {
    loreTest.result.other.push(`<b>${actor.name}</b> reconnaît l'attrait du Léviathan.`);
    loreTest.renderRollCard();
    return;
  } 
}

let test = await actor.setupSkill('Calme',  {
  appendTitle: ` – ${this.effect.name}`,
  skipTargets: true,
  fields: {difficulty: 'easy'},
  characteristic: 'wp',
});
await test.roll();

if (!test.succeeded) {
  test.result.other.push(`<b>${actor.name}</b> devien @Condition[Assommé] par cette vision.`);
  test.renderRollCard();
  actor.addCondition("stunned");
}