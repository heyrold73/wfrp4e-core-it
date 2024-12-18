let choice1 = [
    {
        type : "skill",
        name : "Projectiles (Arc)",
        diff : {
            system : {
                advances : {
                    value : 10
                }
            }
        }
    },
    {
        type : "weapon",
        name : "Longbow",
    },
    {
        type : "ammunition",
        name : "Arrow",
    }
]
let choice2 = [
]

let choice = await Dialog.wait({
    title : "Option",
    content : 
    `<p>
    Ajouter une option?
    </p>
    <ol>
    <li>Projectiles (Arc) +10 et un Arc Long avec 12 flèches</li>
    </ol> 
    `,
    buttons : {
        1 : {
            label : "Yes",
            callback : () => {
                return choice1;
            }
        },
        2 : {
            label : "No",
            callback : () => {
                return choice2;
            }
        }
    }
})

let updateObj = this.actor.toObject();
let items = []
for (let c of choice)
{
    let existing 
    if (c.type == "skill")
    {
        existing = updateObj.items.find(i => i.name == c.name && i.type == c.type)
        if (existing && c.diff?.system?.advances?.value)
        {
            existing.system.advances.value += c.diff.system.advances.value
        }
    }

    if (!existing)
    {
        let item = await game.wfrp4e.utility.find(c.name, c.type)
        if (item)
        {
            let equip = item.system.tags.has("equippable");
            item = item.toObject()
            if (equip)
            {
                item.system.equipped.value = true;
            }
            items.push(foundry.utils.mergeObject(item, (c.diff || {})))
        }
        else
            ui.notifications.warn(`Impossible de trouver ${talent}`, {permanent : true})
    }

}
await this.actor.update(updateObj)
this.actor.createEmbeddedDocuments("Item", items);
