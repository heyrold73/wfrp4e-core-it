// Apply changes when the mask is worn

if (args.equipped) {  
  this.actor.createEmbeddedDocuments("ActiveEffect", [this.item.effects.contents[1]?.convertToApplied()])  
  this.script.scriptMessage(`${this.actor.name} porte <strong>${this.item.name}</strong>. <br>
      Il ne peut plus lancer de Sorts ni effectuer de Prières ni Miracles.<br>
      S'il porte le masque pendant plus d'1 heure ou bénéficie de l'un de ses effets, il est exposé à un @Corruption[moderate]{Corruption Modérée}.
      `,
      {whisper: ChatMessage.getWhisperRecipients("GM")}) 
}

// Notify of lingering effects when mask is removed
else if (!args.equipped)
{
    await this.item.effects.contents[0].delete();
    await this.item.update({name : this.item.name += " (Used)"})
    this.script.scriptMessage(`<strong>${this.item.name}</strong> sur ${this.actor.name} a été enlevé et à perdu ses propriétés. Cependant, les effets perdurent pendant [[1d10+4]] jours, après quoi ils devront être supprimés manuellement.`, 
    {whisper: ChatMessage.getWhisperRecipients("GM")}
    )
    
}



