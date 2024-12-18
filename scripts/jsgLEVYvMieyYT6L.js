let tokenImg = ""; // Put path to token image here, inbetween the quotation marks
if (tokenImg)
{
    if (this.effect.getFlag("wfrp4e", "transformed"))
    {
        await this.effect.setFlag("wfrp4e", "transformed", false);
        this.actor.getActiveTokens().forEach(t => t.document.update({texture : {src: this.actor.prototypeToken.texture.src}}));   
    }
    else 
    {
        await this.effect.setFlag("wfrp4e", "transformed", true);
        this.actor.getActiveTokens().forEach(t => t.document.update({texture : {src: tokenImg}}));
    }
}
else 
{
    this.script.scriptNotification("Aucune image de Token configurée. Le chemin du token doit être configuré dans la première ligne de ce script.", "error");
}