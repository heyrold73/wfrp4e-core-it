const __EFFETS = [
  {
    "name": "Corpus Curator",
    "cout": 5,
    "affinite": "Bêtes (Ghur)",
    "description": "La Potion agit comme un anticoagulant, faisant suinter le sang par les pores de la peau. Le buveur gagne 2 états Hémorragie."
  },
  {
    "name": "Renforcer",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Bêtes (Ghur)",
    "description": "La Potion est imprégnée des forces de la Créature utilisée dans sa fabrication. Si un ingrédient utilisé provient d'une créature qui avait des scores plus élevés que les caractéristiques du buveur, le buveur bénéficie de la valeur de la caractéristique concernée pour 1d10 (ou 4) rounds. La caractéristique est décidée par l’Apothicaire lors de la Fabrication."
  },
  {
    "name": "Essence",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Bêtes (Ghur)",
    "description": "Cette Potion est essentiellement un distillat de Ghur. Le buveur gagne le Trait Peur (1) pour 1d10 (ou 4) rounds. De plus, tout Test de Focalisation (Ghur) fait par le buveur gagne un bonus de +20 pour la même durée. L’Apothicaire peut choisir d’annuler l’un de ses deux Effets lors de la fabrication de la Potion."
  },
  {
    "name": "Domaine des Bêtes",
    "cout": 5,
    "affinite": "Bêtes (Ghur)",
    "description": "La Potion est infusée avec un sort du Domaine des Bêtes ou un sort d’Arcane, que l’Apothicaire est capable d’incanter. Le sort doit avoir une cible et une portée à ‘Vous’. Cet Effet ne peut être doublé par aucun moyen. Le Sort ne bénéficie pas du bonus du Domaine des Bêtes, et coûte au lanceur le NI du sort +2 en points de Puissance (au lieu des 5 habituels)."
  },
  {
    "name": "Nature apaisante",
    "cout": 5,
    "affinite": "Bêtes (Ghur)",
    "description": "La Potion est rendue plus agréable et moins agressive pour le buveur. Le jet de Détérioration reçoit un « malus » de -20% et le buveur gagne un bonus de +20 à son test d'Endurance pour annuler tous les effets de la Détérioration."
  },
  {
    "name": "Transformer",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Bêtes (Ghur)",
    "description": "La Potion est infusée avec l’essence même de la Créature utilisée dans sa fabrication. Le buveur gagne les Traits suivants pendant 1d10 (ou 4) rounds, si la/les Créatures utilisées dans la fabrication de la Potion les possédait :<p> Amphibie, Arboricole, Armure (Valeur), Belliqueux, Bestial, Grand, Morsure (Valeur), Bond, Brutal, A Sang-Froid, Constricteur, Sang corrosif, Infravision, Dur à cuire, Perturbant, Rapide, Peur (Valeur), Vol (Valeur), Frénésie, Rage, Endurant, Cornes (Valeur), Affamé, Infecté, Parasité, Vision Nocturne, Insensible à la douleur, Taille (Petit, Moyen, Grand), Nerveux, Furtif, Foulée, Stupide, Limicole, Coriace, Pisteur, Vampirique, Venin (Difficulté), Vomissement, Arme (Valeur), Grimpant, Toile( Valeur)</p> Lorsqu’une valeur est nécessaire, il convient d’utiliser la valeur du Trait de la Créature."
  },
  {
    "name": "Exalter & Affaiblir",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Bêtes (Ghur)",
    "description": "Cet effet permet de donner à la potion des effets de bonus aux caractéristiques, en exploitant l’affinité des Vents avec les capacités physiques et mentales des créature et êtres vivants. L’Apothicaire qui applique cet effet peut octroyer de +10% (exaltation) ou -10% (affaiblissement) dans les caractéristiques suivantes, pendant 1d10 (ou 4) rounds : Capacité de Combat (CC), Force (F)."
  },
  {
    "name": "Abhorens Creaturex",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Bêtes (Ghur)",
    "description": " Le consommateur d’une telle potion devient un puissant répulsif pour les animaux et créatures ayant été utilisées comme Ingrédient. Le buveur gagne ainsi le Trait Peur (2), qui ne s’applique qu’aux créatures et animaux concernés : la règle de Peur s’applique alors, pendant 1d10 (ou 4) rounds."
  },

  {
    "name": "Essence",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Mort (Shyish)",
    "description": "La Potion est essentiellement composée de Shyish. Le buveur gagne +2 états Exténué pour 1d10 (ou 4) rounds. De plus, toute Focalisation (Shyish) effectuée par le buveur gagne un bonus de +20 pour la même durée. L’Apothicaire peut choisir d’annuler l’un de ses deux Effets lors de la fabrication de la Potion."
  },
  {
    "name": "Arrêt du Métabolisme",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Mort (Shyish)",
    "description": "Cette Potion est infusée avec les énergies temporelles de Shyish, permettant de ralentir le  temps pour le buveur. Tout les états – comme Empoisonné, Hémorragie, maladies, etc – qui agissent sur le métabolisme sont ralentis d’un facteur 10 pour 1d10 (ou 4) jours. Pour les effets qui sont subis à chaque Round de combat, ils agissent tout les 10 rounds."
  },
  {
    "name": "Domaine de la Mort",
    "cout": 5,
    "affinite": "Mort (Shyish)",
    "description": "La Potion est infusée avec un sort du Domaine de la Mort ou un sort d’Arcane, que l’Apothicaire est capable d’incanter. Le sort doit avoir une cible et une portée à ‘Vous’. Cet Effet ne peut être doublé par aucun moyen. Le Sort ne bénéficie pas du bonus du Domaine de la Mort, et coûte au lanceur le NI du sort +2 en points de Puissance (au lieu des 5 habituels)."
  },
  {
    "name": "Corpus Curator",
    "cout": 5,
    "affinite": "Mort (Shyish)",
    "description": "La Potion donne au buveur un sentiment de peur et de malheur. Les options suivantes sont possibles : soit le buveur reçoit 2 états Brisé, soit il devient stérile pendant 30 jours, soit Le buveur subit 2 états Empoisonné lorsqu’il consomme la Potion. L’option est choisie par l’Apothicaire lors de la fabrication."
  },
  {
    "name": "Retarder",
    "cout": 5,
    "affinite": "Mort (Shyish)",
    "description": "La potion a un effet tranquillisant, et permet de ralentir son effet dans le sang. Les Effets de la Potion sont retardés de 1d10 (ou 4) rounds."
  },
  {
    "name": "Transformer",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Mort (Shyish)",
    "description": "La Potion est infusée avec l’essence de la Créature utilisée dans sa fabrication. Le buveur gagne les Traits suivants pendant 1d10 (ou 4) rounds, si la/les Créatures utilisées dans la fabrication de la Potion les possédait.<p> Peur (Valeur), Immunité à la Psychologie</p>Lorsqu’une valeur est nécessaire, il convient d’utiliser la valeur du Trait de la Créature."
  },
  
  {
    "name": "Essence",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Feu (Aqshy)",
    "description": "La Potion est essentiellement composée de Aqshy. Le buveur gagne +2 états En Flammes pour 1d10 (ou 4) rounds. De plus, toute Focalisation ( Aqshy) effectué par le buveur gagne un bonus de +20 pour la même durée. L’Apothicaire peut choisir d’annuler l’un de ses deux Effets lors de la fabrication de la Potion."
  },
  {
    "name": "Domaine du Feu",
    "cout": 5,
    "affinite": "Feu (Aqshy)",
    "description": "La Potion est infusée avec un sort du Domaine du Feu ou un sort d’Arcane, que l’Apothicaire est capable d’incanter. Le sort doit avoir une cible et une portée à ‘Vous’. Cet Effet ne peut être doublé par aucun moyen. Le Sort ne bénéficie pas du bonus du Domaine du Feu, et coûte au lanceur le NI du sort +2 en points de Puissance (au lieu des 5 habituels)."
  },
  {
    "name": "Corpus Curator",
    "cout": 5,
    "affinite": "Feu (Aqshy)",
    "description": "La Potion se charge d’un feu purificateur : le buveur bénéficie d’un bonus de +20% à tout ses tests de Résistance ou de Guérison concernant les maladies pendant 1 journée."
  },
  {
    "name": "Puissance",
    "cout": 5,
    "affinite": "Feu (Aqshy)",
    "description": "La potion est renforcée, gagnant la puissance d'Aqshy. Cet effet peut être acheté pour doubler l'effet (mais pas la durée) de tout autre Effet. Ce doublement s'ajoute à toute autre augmentation effectuée, comme d’avoir acheté un effet plusieurs fois."
  },
  {
    "name": "Transformer",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Feu (Aqshy)",
    "description": "La Potion est infusée avec l’essence même de la Créature utilisée dans sa fabrication. Le buveur gagne les Traits suivants pendant 1d10 (ou 4) rounds, si la/les Créatures utilisées dans la fabrication de la Potion les possédait : Souffle (Feu, Fumée), Sang corrosif, Frénésie, Rage, Immunité(Feu)"
  },
  {
    "name": "Exalter & Affaiblir",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Feu (Aqshy)",
    "description": "Cet effet permet de donner à la potion des effets de bonus aux caractéristiques, en exploitant l’affinité des Vents avec les capacités physiques et mentales des créature et êtres vivants. L’Apothicaire qui applique cet effet peut octroyer de +10% (exaltation) ou 10% (affaiblissement) dans les caractéristiques suivantes, pendant 1d10 (ou 4) rounds : Initiative (I), Force Mentale (FM)"
  },

  {
    "name": "Essence",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Cieux (Azur)",
    "description": "La Potion est essentiellement composée d’Azur. Le buveur subit un éclair qui vient de son propre cerveau, recevant des Dommages égaux à son Bonus de Force Mentale, qui ignorent le Bonus d’Endurance et les Points d’Armure. De plus, toute Focalisation (Azur) effectuée par le buveur gagne un bonus de +20 pour la même durée. L’Apothicaire peut choisir d’annuler l’un de ses deux Effets lors de la fabrication de la Potion."
  },
  {
    "name": "Gazeux",
    "cout": 5,
    "affinite": "Cieux (Azur)",
    "description": "La Potion est transformée en gaz, plutôt qu’en liquide, et peut du même coup être respirée au lieu d’être ingérée. Une fois libérée de sa fiole, elle remplit un espace de 2 mètres carrés pour 1d10 (ou 4) rounds avant de se dissiper. Des vents forts peuvent la faire disparaître prématurément également."
  },
  {
    "name": "Corpus Curator",
    "cout": 5,
    "affinite": "Cieux (Azur)",
    "description": "La Potion se charge d’une aura de bienveillance et de protection : le buveur bénéficie d’un bonus de +20% à tout ses tests de Résistance et de Calme concernant les états psychologiques (Peur, Terreur, etc.) pendant 1 journée."
  },
  {
    "name": "Domaine des Cieux",
    "cout": 5,
    "affinite": "Cieux (Azur)",
    "description": "La Potion est infusée avec un sort du Domaine des Cieux ou un sort d’Arcane, que l’Apothicaire est capable d’incanter. Le sort doit avoir une cible et une portée à ‘Vous’. Cet Effet ne peut être doublé par aucun moyen. Le Sort ne bénéficie pas du bonus du Domaine des Cieux, et coûte au lanceur le NI du sort +2 en points de Puissance (au lieu des 5 habituels)."
  },
  {
    "name": "Transformer",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Cieux (Azur)",
    "description": "La Potion est infusée avec l’essence même de la Créature utilisée dans sa fabrication. Le buveur gagne les Traits suivants pendant 1d10 (ou 4) rounds, si la/les Créatures utilisées dans la fabrication de la Potion les possédait : <p>Souffle (Froid, Electricté), Etreinte glaciale , Intelligent, Sournois, Ethéré</p>. Lorsqu’une valeur est nécessaire, il convient d’utiliser la valeur du Trait de la Créature."
  },
  {
    "name": "Exalter & Affaiblir",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Cieux (Azur)",
    "description": "Cet effet permet de donner à la potion des effets de bonus aux caractéristiques, en exploitant l’affinité des Vents avec les capacités physiques et mentales des créature et êtres vivants. L’Apothicaire qui applique cet effet peut octroyer de +10% (exaltation) ou -10% (affaiblissement) dans les caractéristiques suivantes, pendant 1d10 (ou 4) rounds : Intelligence (Int), Sociabilité (Soc)"
  },

  {
    "name": "Essence",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Métal (Chamon)",
    "description": "La Potion est essentiellement composée de Chamon. Le buveur bénéficie du Trait Armure (2) sur une localisation choisie par l’Apothicaire pendant 1d10 (ou 4) Rounds. De plus, toute Focalisation (Chamon) effectuée par le buveur gagne un bonus de +20 pour la même durée. L’Apothicaire peut choisir d’annuler l’un de ses deux Effets lors de la fabrication de la Potion."
  },
  {
    "name": "Domaine du Métal",
    "cout": 5,
    "affinite": "Métal (Chamon)",
    "description": "La Potion est infusée avec un sort du Domaine du Métal ou un sort d’Arcane, que l’Apothicaire est capable d’incanter. Le sort doit avoir une cible et une portée à ‘Vous’. Cet Effet ne peut être doublé par aucun moyen. Le Sort ne bénéficie pas du bonus du Domaine du Métal, et coûte au lanceur le NI du sort +2 en points de Puissance (au lieu des 5 habituels)."
  },
  {
    "name": "Corpus Curator",
    "cout": 5,
    "affinite": "Métal (Chamon)",
    "description": "La Potion se charge d’une aura de résistance, qui peut fournir deux effets : Soit le buveur se voit immédiatement retiré 2 états Assomé et Empétré, Soit le buveur reçoit 2 états Assommé. Le choix de l’option est fait par l’Apothicaire lors de la fabrication."
  },
  {
    "name": "Soutenir",
    "cout": 5,
    "affinite": "Métal (Chamon)",
    "description": "La Potion est épaissie et rendue plus dense, et s’accroche plus longtemps aux muscles et aux veines du buveur. La durée des Effets de la Potion est doublée."
  },
  {
    "name": "Transformer",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Métal (Chamon)",
    "description": "La Potion est infusée avec l’essence même de la Créature utilisée dans sa fabrication. Le buveur gagne les Traits suivants pendant 1d10 (ou 4) rounds, si la/les Créatures utilisées dans la fabrication de la Potion les possédait : <p>Armure(Valeur), Souffle (Corrosif), Arme (Valeur)</p> Lorsqu’une valeur est nécessaire, il convient d’utiliser la valeur du Trait de la Créature."
  },
  
  {
    "name": "Essence",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Vie (Ghyran)",
    "description": "La Potion est essentiellement composée de Ghyran. Le buveur enlève tout ses états Exténué et Hémorragie. De plus, toute Focalisation (Ghyran) effectuée par le buveur gagne un bonus de +20 pour la même durée. L’Apothicaire peut choisir d’annuler l’un de ses deux Effets lors de la fabrication de la Potion."
  },
  {
    "name": "Corpus Curator",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Vie (Ghyran)",
    "description": " La Potion se charge d’une aura de vitalité, qui peut fournir les effets suivants : La Potion confère le pouvoir régénérateur de la vie au buveur. Il guérit instantanément de 1d10 (ou 4) Points de Blessures, La Potion augmente les capacité des guérison naturelle du buveur, accélérant le processus de guérison par un facteur 10 pendant 1d10 (ou 4) jours. Cela inclus la guérison des maladies, des blessures et des pertes de Points de Blessures. La Potion agit comme un antidote universel, fournissant un bonus de +20% à tout les Tests liés aux Poisons pendant 1 journée. Le choix de l’option est fait par l’Apothicaire lors de la fabrication."
  },
  {
    "name": "Domaine de la Vie",
    "cout": 5,
    "affinite": "Vie (Ghyran)",
    "description": " La Potion est infusée avec un sort du Domaine de la Vie ou un sort d’Arcane, que l’Apothicaire est capable d’incanter. Le sort doit avoir une cible et une portée à ‘Vous’. Cet Effet ne peut être doublé par aucun moyen. Le Sort ne bénéficie pas du bonus du Domaine de la Vie, et coûte au lanceur le NI du sort +2 en points de Puissance (au lieu des 5 habituels)."
  },
  {
    "name": "Débordement",
    "cout": 5,
    "affinite": "Vie (Ghyran)",
    "description": "La Potion est épaissie et double de volume sans perdre en efficacité. Une dose supplémentaire de la Potion est créée, avec les mêmes Effets que la première."
  },
  {
    "name": "Transformer",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Vie (Ghyran)",
    "description": "La Potion est infusée avec l’essence même de la Créature utilisée dans sa fabrication. Le buveur gagne les Traits suivants pendant 1d10 (ou 4) rounds, si la/les Créatures utilisées dans la fabrication de la Potion les possédait : <p>Souffle (Poison), Immunité (Poison), Régénérer</p>" 
  },
  {
    "name": "Exalter & Affaiblie",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Vie (Ghyran)",
    "description": "Cet effet permet de donner à la potion des effets de bonus aux caractéristiques, en exploitant l’affinité des Vents avec les capacités physiques et mentales des créature et êtres vivants. L’Apothicaire qui applique cet effet peut octroyer de +10% (exaltation) ou 10% (affaiblissement) dans les caractéristiques suivantes, pendant 1d10 (ou 4) rounds : Endurance, Agilité" 
  },

  {
    "name": "Essence",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Lumière (Hysh)",
    "description": "La Potion est essentiellement composée de Hysh. Le buveur souffre d’un état Aveuglé pendant 1d10 (ou 4) rounds. De plus, toute Focalisation (Hysh) effectuée par le buveur gagne un bonus de +20 pour la même durée. L’Apothicaire peut choisir d’annuler l’un de ses deux Effets lors de la fabrication de la Potion."
  },
  {
    "name": "Domaine de la Lumière",
    "cout": 5,
    "affinite": "Lumière (Hysh)",
    "description": "La Potion est infusée avec un sort du Domaine de la Lumière ou un sort d’Arcane, que l’Apothicaire est capable d’incanter. Le sort doit avoir une cible et une portée à ‘Vous’. Cet Effet ne peut être doublé par aucun moyen. Le Sort ne bénéficie pas du bonus du Domaine de la Lumière, et coûte au lanceur le NI du sort +2 en points de Puissance (au lieu des 5 habituels)."
  },
  {
    "name": "Purifier",
    "cout": 5,
    "affinite": "Lumière (Hysh)",
    "description": "La Potion est nettoyée de ses impuretés, laissant beaucoup moins de traces dans le corps et l’esprit. Le jet de Détérioration reçoit un « malus » de -40%."
  },
  {
    "name": "Transformer",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Lumière (Hysh)",
    "description": "La Potion est infusée avec l’essence même de la Créature utilisée dans sa fabrication. Le buveur gagne les Traits suivants pendant 1d10 (ou 4) rounds, si la/les Créatures utilisées dans la fabrication de la Potion les possédait : <p>Magique, Résistance à la Magie (Valeur), Regard Pétrifiant (Valeur)</p>. Lorsqu’une valeur est nécessaire, il convient d’utiliser la valeur du Trait de la Créature."
  },
  {
    "name": "Exalter & Affaiblir",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Lumière (Hysh)",
    "description": "Cet effet permet de donner à la potion des effets de bonus aux caractéristiques, en exploitant l’affinité des Vents avec les capacités physiques et mentales des créature et êtres vivants. L’Apothicaire qui applique cet effet peut octroyer de +10% (exaltation) ou 10% (affaiblissement) dans les caractéristiques suivantes, pendant 1d10 (ou 4) rounds : Intelligence, Capacité de Tir"
  },
  {
    "name": "Abhorens Creaturex",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Lumière (Hysh)",
    "description": "Le consommateur d’une telle potion devient un puissant répulsif pour créatures ayant le Trait Morts-Vivant ou Mutation. Ces créatures  subissent un malus de 10% pour toutes leurs actions envers le buveur de la potion."
  },

  {
    "name": "Essence",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Ombres (Uglu)",
    "description": "La Potion est essentiellement composée d’Uglu. Le buveur gagne le Trait Ethéré pendant 1d10 (ou 4) rounds. De plus, toute Focalisation (Uglu) effectuée par le buveur gagne un bonus de +20 pour la même durée. L’Apothicaire peut choisir d’annuler l’un de ses deux Effets lors de la fabrication de la Potion."
  },
  {
    "name": "Domaine des Ombres",
    "cout": 5,
    "affinite": "Ombres (Uglu)",
    "description": "La Potion est infusée avec un sort du Domaine des Ombres ou un sort d’Arcane, que l’Apothicaire est capable d’incanter. Le sort doit avoir une cible et une portée à ‘Vous’. Cet Effet ne peut être doublé par aucun moyen. Le Sort ne bénéficie pas du bonus du Domaine des Ombres, et coûte au lanceur le NI du sort +2 en points de Puissance (au lieu des 5 habituels)."
  },
  {
    "name": "Obscurcir",
    "cout": 5,
    "affinite": "Ombres (Uglu)",
    "description": "La Potion est modifiée - son goût, son odeur et sa texture sont atténués - , lui permettant d’être mélangée à des boissons ou de la nourriture sans être immédiatement remarquée. Si le buveur ne sait pas qu'il est sur le point d'absorber la potion, il a une pénalité de -20 à sa Perception pour la détecter."
  },
  {
    "name": "Transformer",
    "cout": 5,
    "duree10_4": true,
    "affinite": "Ombres (Uglu)",
    "description": "La Potion est infusée avec l’essence même de la Créature utilisée dans sa fabrication. Le buveur gagne les Traits suivants pendant 1d10 (ou 4) rounds, si la/les Créatures utilisées dans la fabrication de la Potion les possédait.<p>Infravision, Vision Nocturne, Nerveux, Furtif, Grimpant</p>"
  },
  {
    "name": "Camouflage",
    "cout": 5,
    "affinite": "Ombres (Uglu)",
    "description": "La Potion agit sur la présence physique du buveur, le camouflant dans les vents tourbillonnants d’Uglu. Le consommateur, tandis le serpent d’Uglu envahit son corps, reçoit un bonus de +20% pour tout ses Tests de Discrétion pendant la prochaine heure."
  },
  {
    "name": "Exalter & Affaiblir",
    "cout": 5,
    "affinite": "Ombres (Uglu)",
    "duree10_4": true,
    "description": "Cet effet permet de donner à la potion des effets de bonus aux caractéristiques, en exploitant l’affinité des Vents avec les capacités physiques et mentales des créature et êtres vivants. L’Apothicaire qui applique cet effet peut octroyer de +10% (exaltation) ou -10% (affaiblissement) dans les caractéristiques suivantes, pendant 1d10 (ou 4) rounds : Dextérité, Agilité"
  },
  {
    "name": "Domaine de la Sorcellerie",
    "cout": 5,
    "affinite": "Sorcellerie (Dhar)",
    "duree10_4": true,
    "description": "La Potion est infusée avec un sort du Domaine de la Sorcellerie, un sort d’Arcane ou un sort de Magie Mineure, que l’Apothicaire est capable d’incanter. Le sort doit avoir une cible et une portée à ‘Vous’. Cet Effet ne peut être doublé par aucun moyen. Le Sort ne bénéficie pas du bonus du Domaine de la Sorcellerie, et coûte au lanceur le NI du sort +2 en points de Puissance (ou au minimum 5 si le NI du sort est faible). Les sorts peuvent être incantés par quelqu’un d’autre (mais l’Apothicaire doit être capable de lancer au moins 1 sort) : dans ce cas, la Puissance nécessaire est doublée."
  }
]

