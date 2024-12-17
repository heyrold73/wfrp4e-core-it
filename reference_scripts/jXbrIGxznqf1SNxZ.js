const speaker = ChatMessage.getSpeaker({actor: this.actor});

this.script.scriptMessage(`<p><b>${speaker.alias}</b> is Immersed within a Sea Elemental and suffers from @UUID[Compendium.wfrp4e-core.journals.JournalEntry.NS3YGlJQxwTggjRX.JournalEntryPage.WCivInLZrqEtZzF4#drowning-and-suffocation]{Suffocation}</p><p>They may attempt to escape by freeing themselves from the @Condition[Entangled} Condition as if they were @UUID[Compendium.wfrp4e-core.journals.JournalEntry.NS3YGlJQxwTggjRX.JournalEntryPage.wmA76Q2zJJ9HrkvA#grappling]{Grappled} by the Sea Elemental, making an <b>Opposed Strength Test</b> against its Strength of 59.</p>`);