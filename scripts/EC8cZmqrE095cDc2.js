const actor = args.actor;

if (actor.itemTypes.skill.find(s => s.name === "Savoir (Savoir)")) {
  const loreTest = await actor.setupSkill('Savoir (Savoir)',  {
    appendTitle: ` – ${this.effect.name}`,
    skipTargets: true,
    fields: {difficulty: 'hard'},
    characteristic: 'int',
  });
  await loreTest.roll();

  if (loreTest.succeeded) {
    loreTest.result.other.push(`<b>${actor.name}</b> reconnaît les leurres de Lurkerfis.`);
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
  test.result.other.push(`<b>${actor.name}</b> est devenu séduit par la vue et incapable d'effectuer aucune action sauf se diriger vers la lumière`);
  test.renderRollCard();
  actor.addCondition("unconscious");
}