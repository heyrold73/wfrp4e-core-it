let characteristics = {
    "ws" : 25,
    "bs" : 10,
    "s" : 15,
    "t" : 15,
    "i" : 25,
    "ag" : 20,
    "dex" : 0,
    "int" : 10,
    "wp" : 25,
    "fel" : 10
}
let skills = ["Calme", "Esquive", "Intimidate", "Intuition", "Langue (Battle)", "Commandement" , "Lore (Warfare)", "Perception"]
let skillAdvancements = [15, 15, 15, 15, 10, 15, 10, 10]

let talents = ["Combat Aware", "Combat Master", "Combat Reflexes", "Inspiring", "Resolute", "War Leader"]
let trappings = ["Arme simple",  "Shield", "Plate Breastplate", "Plate Bracers", "Plate Helm", "Plate Leggings"]
let specialItems = []    
let items = [];

let updateObj = this.actor.toObject();

for (let ch in characteristics)
{
    updateObj.system.characteristics[ch].modifier += characteristics[ch];
}

for (let item of specialItems) {
    let newItem
    if (item.type == "weapon") {
        newItem = new ItemWfrp4e({ name: item.name, type: item.type, system: { equipped: true, damage: {value: item.damage}}  })
    } else if (item.type == "trapping") {
        newItem = new ItemWfrp4e({ img: "systems/wfrp4e/icons/blank.png", name: item.name, type: item.type, system: { worn: true, trappingType: { value: item.trappingType}  } } )
    } else {
        newItem = new ItemWfrp4e({ img: "systems/wfrp4e/icons/blank.png", name: item.name, type: item.type  })
    }
    items.push(newItem.toObject())
}

for (let index = 0; index < skills.length; index++)
{
    let skill = skills[index]
    let skillItem;
    skillItem = updateObj.items.find(i => i.name == skill && i.type == "skill")
    if (skillItem)
        skillItem.system.advances.value += skillAdvancements[index]
    else 
    {
        skillItem = await game.wfrp4e.utility.findSkill(skill)
        skillItem = skillItem.toObject();
        skillItem.system.advances.value = skillAdvancements[index];
        items.push(skillItem);
    }
}

for (let talent of talents)
{
    let talentItem = await game.wfrp4e.utility.findTalent(talent)
    if (talentItem)
    {
        items.push(talentItem.toObject());
    }
    else 
    {
        ui.notifications.warn(`Impossible de trouver ${talent}`, {permanent : true})
    }
}

for (let trapping of trappings) 
{
    let trappingItem = await game.wfrp4e.utility.findItem(trapping)
    if (trappingItem)
    {
        trappingItem = trappingItem.toObject()

        trappingItem.system.equipped.value = true;

        items.push(trappingItem);
    }
    else 
    {
        ui.notifications.warn(`Impossible de trouver ${trapping}`, {permanent : true})
    }
}

let filters = [
    {
        property : "type",
        value : "weapon"
    },
    {
        property : "system.weaponGroup.value",
        value : ["twohanded", "polearm"]
    }
]

items = items.concat(await ItemDialog.createFromFilters(filters, 1, "Choisissez an appropriate Polearm or Two-Handed Weapon"))

let ride = await Dialog.confirm({title : "Skill", content : "Add Chaos Steed and +20 Ride (Horse)?"})

if (ride)
{
    let skill = await game.wfrp4e.utility.findSkill("Ride (Horse)")
    skill = skill.toObject();
    skill.system.advances.value = 20;
    items = items.concat({name : "Chaos Steed", type: "trapping", "system.trappingType.value" : "misc"}, skill)
}

updateObj.name = updateObj.name += " " + this.effect.name

await this.actor.update(updateObj)
this.actor.createEmbeddedDocuments("Item", items);