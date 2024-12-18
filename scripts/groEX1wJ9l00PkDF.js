let turns = this.effect.getFlag("wfrp4e", "turns");
if (turns <= 0) return;
turns--;

const speaker = ChatMessage.getSpeaker({actor: this.actor});
const targetId = this.effect.getFlag("wfrp4e", "target");
const target = canvas.scene.tokens.get(targetId);

if (turns > 0) {
  this.effect.setFlag("wfrp4e", "turns", turns);

  return this.script.message(`<p><b>${speaker.alias}</b> continue de s'enrouler autour <b>${target.name}</b>. Il pourra commencer à écraser dans ${turns} tours.</p>`);
}

if (this.actor.items.find(i => i.type === "extendedTest" && i.name === this.effect.name)) {
  this.script.message(`<p><b>${speaker.alias}</b> peut reprenre son écrasement <b>${target.name}</b> avec le Test Etendu.</p>`);

  return;
}

const extendedTestData = {
  name: this.effect.name,
  type: "extendedTest",
  img: this.effect.img,
  system: {
    SL: {
      current: 0,
      target: target.actor.system.status.wounds.value
    },
    test: {
      value: 'Strength'
    },
    completion: {
      value: "remove"
    },
    difficulty: {
      value: "challenging"
    }
  }
};

const extendedTests = await this.actor.createEmbeddedDocuments("Item", [extendedTestData], {fromEffect: this.effect.id});
const extendedTest = extendedTests[0];

this.script.message(`<p><b>${speaker.alias}</b> a fini de s'enrouler autour de <b>${target.name}</b>. Il peut maintenant écraser via le Test Etendu @UUID[${extendedTest.uuid}].</p>`);

let effect = {
  name: extendedTest.name,
  img: extendedTest.img,
  system: {
    transferData : {
        type: "document",
        documentType: "Item"
      },
      scriptData: [
        {
          label: extendedTest.name,
          script: `
              let id = this.item.flags.wfrp4e.fromEffect;
              let effect = this.actor.effects.find(e => e.id === id);
              const speaker = ChatMessage.getSpeaker({actor: this.actor});
              const targetId = effect.getFlag("wfrp4e", "target");
              const target = canvas.scene.tokens.get(targetId);
              this.script.message(\`<p><b>${speaker.alias}</b> écrase <b>${target.name}</b>. Le bateau et broyé, réduit à une masse de déchets flottants.</p>\`);
              await effect.delete();
                          `,
          trigger: "deleteEffect"
        }
      ]
  }
}

await extendedTests[0].createEmbeddedDocuments("ActiveEffect", [effect]);