let currentCareer = this.actor.system.currentCareer;
if (!currentCareer)
{
    return;
}

let talents = ["Harmonisation Aethyrique",
"Magie des Arcanes (Domaine)",
"Magie du Chaos (Tzeentch)",
"Mains agiles",
"Diction Instinctive",
"Sens de la Magie",
"Magie Mineure",
"Seconde Vue",
"Mage de guerre",
"Sorcier!"].filter(t => !currentCareer.system.talents.includes(t))

currentCareer.system.talents = currentCareer.system.talents.concat(talents)