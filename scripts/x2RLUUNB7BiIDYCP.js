
                            let difficulty = ""
                            if (this.effect.name.includes("Modéré"))
                                difficulty = "easy"
                            else if (this.effect.name.includes("Sévère"))
                                difficulty = "average"
                            else
                                difficulty = "veasy"
        
                            let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {context : {failure : this.actor.name + " dies from Blight"}, fields: {difficulty}, skipTargets: true, appendTitle :  " - Blight"})
                            await test.roll();
                            if (test.failed)
                            {
                                this.actor.addCondition("dead");
                            }
                            