if (!this.item.name.includes("(") || this.item.system.tests.value.includes("(Sens)"))
{
    let tests = this.item.system.tests.value
    let name = this.item.name

    // If name already specifies, make sure tests value reflects that
    if (name.includes("("))
    {
        let sense = name.split("(")[1].split(")")[0]
        tests = `${tests.split("(")[0].trim()} (${sense})`;
    }
    else // If no sense specified, provide dialog choice
    {
        let choice = await ItemDialog.create(ItemDialog.objectToArray({
            taste : "Goût",
            sight : "Vue",
            smell : "Odorat",
            hearing : "Ouie",
            touch : "Toucher"
        }, this.item.img), 1, "Choisir un sens");
        if (choice[0])
        {
            name = `${name.split("(")[0].trim()} (${choice[0].name})`
            tests = `${tests.split("(")[0].trim()} (${choice[0].name})`
        }
    }

        this.item.updateSource({name, "system.tests.value" : tests})
}