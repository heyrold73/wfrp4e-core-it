if (args.totalWoundLoss <= 7) return;

let options = {
  appendTitle : " – " + this.effect.name,
  skipTargets: true,
  fields: {difficulty: 'average'},
  characteristic: 'wp',
}

let test = await args.actor.setupSkill('Calme', options);
await test.roll();

if (!test.succeeded) {
  const targetId = this.effect.getFlag("wfrp4e", "target");
  const target = canvas.scene.tokens.get(targetId);
  await this.effect.delete();
  args.extraMessages.push(`<b>${args.actor.name}</b> perd ${args.totalWoundLoss} Blessures de l'attaque, ce qui l'a amené à lâcher prise <b>${target.name}</b>.`);
}