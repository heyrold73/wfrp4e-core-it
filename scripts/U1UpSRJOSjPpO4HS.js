let mutations = await warhammer.utility.findAllItems("mutation", "Chargement des mutations")
let roll = Math.floor(CONFIG.Dice.randomUniform() * mutations.length);
this.actor.createEmbeddedDocuments("Item", [mutations[roll]]);
this.script.scriptNotification(`Ajout ${mutations[roll].name}`)