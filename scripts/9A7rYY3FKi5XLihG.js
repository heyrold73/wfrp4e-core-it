fromUuid("Compendium.wfrp4e-core.items.5QcrpLQWWrsbKR79").then(item => {
     let data = item.toObject();
     data.system.tests.value = data.system.tests.value.replace("coins", "metal objects");
     data.system.description.value += "<p>Ce Talent s'applique également à tout objet métallique à cause de <strong>l'Affinité Metallique</strong></p>"
     this.actor.createEmbeddedDocuments("Item", [data], {fromEffect : this.effect.id})
})