let talents = ["Charge Berserk", "Vigilance", "Combat Instinctif", "Assaut féroce", "Endurci", "Résistance à la Magie", "Résistant (Magie)", "Déterminé", "Coup puissant", "Guerrier né"];
let currentCareer = this.actor.system.currentCareer;

if (!currentCareer) return;

for (let talent of talents) {
  if (currentCareer.system.talents.includes(talent))
    continue;
  currentCareer.system.talents.push(talent);	
}

