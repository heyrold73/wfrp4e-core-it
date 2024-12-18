// An imbiber must take a Consume Alcohol Test.
this.actor.setupSkill(game.i18n.localize("NAME.ConsumeAlcohol"), {skipTargets: true, appendTitle :  ` - ${this.effect.name}`}).then(async test => {
  await test.roll()
  // If they succeed, 
  // as a result of whatever potential futures they glimpse, 
  // they can spend a Fortune Point within the next hour to reverse the dice of any failed Test.
  if (test.succeeded) {
    this.script.scriptMessage(`En raison des futurs potentiels entrevus, <strong>${this.actor.prototypeToken.name}</strong> peut dépenser un Point de Chance durant la prochaine heure pour inverser le résultat d'un test échoué.`, 
    {
      whisper: ChatMessage.getWhisperRecipients("GM"), 
      blind: true 
    })    
  }
})