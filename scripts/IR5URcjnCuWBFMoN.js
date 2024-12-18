// If a full dose is imbibed, 
// the victim must pass a Hard (-20) Endurance Test.

let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {fields: {difficulty: "hard"}})
await test.roll()
if (test.failed)
{
    this.script.scriptMessage(`<p><strong>${this.actor.prototypeToken.name}</strong> Jo ne remarque rien d'anormal si ce n'est qu'ils se fatiguent un peu plus tôt que d'habitude. À ce stade, il est encore possible de sauver la victime via un antidote puissant ou des moyens magiques.</p>
    <p>Cependant, une fois qu’ils s’endorment, c’est presque impossible. À ce stade, la victime doit effectuer un test d'Endurance <strong>difficile (-20)</strong>. S'il échoue, il ne se réveille jamais.</p>`, 
    {
      whisper: ChatMessage.getWhisperRecipients("GM"), 
      blind: true 
    })
}
return test.failed;