let items = this.effect.itemTargets;
let msg = "";
for(let item of items)
{
    if (item.system.properties.qualities.durable)
    {
        await item.update({"system.qualities.value" : []});
        msg += `<p>${item.name} per toutes ses Qualités</p>`
    }
    else 
    {
        msg += `<p>${item.name} tombe en poussière!</p>` 
        await item.update({name : item.name + " (Poussières)"})
    }
}
if(msg)
{
    this.script.scriptMessage(msg);
}