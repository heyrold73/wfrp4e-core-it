let characteristics = {
    "ws" : 10,
    "bs" : 0,
    "s" : 5,
    "t" : 15,
    "i" : 20,
    "ag" : 15,
    "dex" : 20,
    "int" : 35,
    "wp" : 30,
    "fel" : 10
}
let skills = ["Focalisation", "Calme", "Esquive", "Divertissement (Narration)", "Intuition", "Langue (Magick)", "Commandement" , "Savoir (Magie)" , "Savoir (Théologie)", "Perception"]
let skillAdvancements = [20, 25, 20, 25, 30, 25, 15, 20, 10, 30]
let talents = ["Harmonisation Aethyrique", "Magie des Arcanes", "Diction Instinctive", "Diction Instinctive", "Chance", "Sens de la Magie", "Menaçant", "Magie Mineure", "Seconde Vue", "Sixième Sens"]
let trappings = ["Arme simple", "(2M) Bâton de combat", "Ritual Dress incorporating many ingredients and fetishes"]
let items = [];

let updateObj = this.actor.toObject();

for (let ch in characteristics)
{
    updateObj.system.characteristics[ch].modifier += characteristics[ch];
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
        items.push({name : trapping, type : "trapping", "system.trappingType.value" : "clothingAccessories"})
        //ui.notifications.warn(`Impossible de trouver ${trapping}`, {permanent : true})
    }
}

updateObj.name = updateObj.name += " " + this.effect.name

await this.actor.update(updateObj)
this.actor.createEmbeddedDocuments("Item", items);
