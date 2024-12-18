let type = this.item.getFlag("wfrp4e", "breath")
let types = {
    none : "Aucun",
    cold : "Froid",
    corrosion : "Corrosion",
    fire : "Feu",
    electricity : "Electricité",
    poison : "Poison",
    smoke : "Fumée",
    various : "Divers"
}
if (!type)
{
    type = (await ItemDialog.create(ItemDialog.objectToArray(types, this.item.img), 1, "Choisir le Souffle"))[0]?.id;
    this.item.updateSource({"flags.wfrp4e.breath" : type})
}

if (!this.item.name.includes("(") && types[type] && type != "none")
{
    this.item.updateSource({name : this.item.name += ` (${types[type]})`, "system.specification.value" : this.item.system.specification.value.replace("(Type)", "").trim()})
}