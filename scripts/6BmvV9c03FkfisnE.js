// Apply changes when the mask is worn

if (args.equipped) {  
  this.actor.createEmbeddedDocuments("ActiveEffect", [this.item.effects.contents[1]?.convertToApplied()])  
  this.script.scriptMessage(`${this.actor.name} porte le <strong>${this.item.name}</strong>. <br>
      Il gagne +1 Point de Corruption point si un Test de Corruption est échoué, à appliquer manuellement.<br>Si le personnage porte le masque pendant plus d'une heure ou utilise les effets du masque, il est exposé à une @Corruption[moderate]{Corruption Modérée} 
      `,
      {whisper: ChatMessage.getWhisperRecipients("GM")}) 
}

// Notify of lingering effects when mask is removed
else if (!args.equipped)
{
    await this.item.effects.contents[0].delete();
    await this.item.update({name : this.item.name += " (Utilisé)"})
    this.script.scriptMessage(`<strong>${this.item.name}</strong> de ${this.actor.name} a été enlevé et a perdu ses propriétés. Cependant, les effets perdurent pendant [[1d10+4]] jours, après quoi ils devront être manuellement supprimés.`, 
    {whisper: ChatMessage.getWhisperRecipients("GM")}
    )
    
}