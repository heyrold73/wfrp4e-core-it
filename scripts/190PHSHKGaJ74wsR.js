if (!this.item.name.includes("(") || this.item.system.tests.value.includes("Terrain"))
{
    let tests = this.item.system.tests.value
    let name = this.item.name

    // If name already specifies, make sure tests value reflects that
    if (name.includes("("))
    {
        let terrain = name.split("(")[1].split(")")[0]
        tests = tests.replace("Terrain", terrain)
    }
    else // If no sense specified, provide dialog choice
    {
        let choice = await ItemDialog.create(ItemDialog.objectToArray({
            coastal : "Côtes",
            deserts : "Déserts",
            marshes : "Marches",
            rocky : "Rocailles",
            tundra : "Tundra",
            woodlands : "Forêts"
        }, this.item.img), 1, "Choisir le Terrain");
        if (choice[0])
        {
            name = `${name.split("(")[0].trim()} (${choice[0].name})`
            tests = tests.replace("Terrain", "Terrain " + choice[0].name )
        }
    }

    this.effect.updateSource({name})
    this.item.updateSource({name, "system.tests.value" : tests})
}