let items = [];

let etiquette = (await fromUuid("Compendium.wfrp4e-core.items.Item.sYbgpSnRqSZWgwFP")).toObject();
etiquette.name += " (Suivants de Khorne)";

items.push(etiquette);

let animosity = (await fromUuid("Compendium.wfrp4e-core.items.Item.0VpT5yubw4UL7j6f")).toObject();
  animosity.system.specification.value = "Suivants de Slaanesh";

items.push(animosity);

await this.actor.createEmbeddedDocuments("Item", items, {fromEffect : this.effect.id});
