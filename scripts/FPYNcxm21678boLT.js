if (args.attackerTest.data.preData.rollClass !== "CharacteristicTest") return;
if (args.attackerTest.data.preData.characteristic !== "s") return;

const SL = args.opposedTest.data.opposeResult.differenceSL;

const targetId = this.effect.getFlag("wfrp4e", "target");
const target = canvas.scene.tokens.get(targetId);

if (SL > 4) {
  args.opposedTest.data.opposeResult.other.push(`<b>${args.defenderTest.actor.name}</b> a été obligé de lâcher çà <b>${target.name}</b>.`);
  return await this.effect.delete();
}

if (SL > 0) {
  args.opposedTest.data.opposeResult.other.push(`<b>${args.defenderTest.actor.name}</b> a été empêché de presser <b>${target.name}</b> pour un tour.`);
  let turns = this.effect.getFlag("wfrp4e", "turns");
  this.effect.setFlag("wfrp4e", "turns", turns + 1);
}