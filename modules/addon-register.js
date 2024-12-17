/************************************************************************************/
//import WFRP_Tables from "/systems/wfrp4e/modules/system/tables-wfrp4e.js";
import { WH4FRPatchConfig } from "./config-patch.js";
import {TranslatedCompendium} from "../../babele/script/translated-compendium.js";

/************************************************************************************/
const _patch_eis = () => {
  if (game.wfrp4e?.config?.symptoms && game.wfrp4e.config.symptoms["delirium"] ) {
    game.wfrp4e.config.symptoms["delirium"] = "Délire";

    game.wfrp4e.config.symptomDescriptions["delirium"] = "Votre sensibilité va et vient, avec des moments de clarté remplaçés subitement Your sensibility comes and goes, with moments of clarity replaced suddenly par des accès de délire, des hallucinations et de la terreur. Faites un <b>Test de Force Mentale Intermédiaire (+0)</b> chaque heure, et consultez la table <b><a class='table-click' data-table='delirium'>Délires</a></b> table.";
    game.wfrp4e.config.symptomTreatment["delirium"] = "Certaines autorités traitent le délire comme un fièvre, avec les mêmes prescriptions. Les médicaments coutent quelques sous à quelques pistoles, en seulement 10% sont efficaces.<br><br>Avec des soins corrects, un test de <b>Guérison Intermédiaire (0)</b> arrêtes les hallucinations pour <b><a class = 'chat-roll'>1d10</a></b> heures.<br><br>Il est aussi courant de soigner les patients délirants avec des drogues tranquillisantes, comme la Fleur de Lune ou même de la Racine de Mandragore, pour garder les patients calmes pendant la crise, les envoyant dans un sommeil agité jusqu'à ce qu'il erécupèrent ou meurent.";

    game.wfrp4e.config.symptoms["swelling"] = "Gonflement";
    game.wfrp4e.config.symptomDescriptions["swelling"] = "Une partie du corps gonfle jusqu'à plusieurs fois sa taille normale, devenant rouge vif ou violette et devenant presque inutilisable. La partie du corps affectée correspond normalement à une plaie ou une morsure provoquant le gonflement, ou l'endroit où une maladie ou une infection est entrée dans le corps. <br> <br> <b> Tête </b>: Les yeux et la langue enflent, les joues deviennent livides, la mâchoire est toujours ouverte. Il est impossible de manger, mais des liquides légers peuvent être sirotés en petites quantités. Tous les tests nécessitant la parole sont plus difficiles de 3 niveaux. <br> <b> Bras </b>: le bras et la main gonflent, les articulations des épaules et du coude ne peuvent plus bouger et la main devient inutile. Pour la durée du gonflement, le bras compte comme Amputé. <br> <b> Corps </b>: Le corps entier gonfle jusqu'à ce que la victime ne puisse plus porter de vêtements. Tous les tests impliquant le mouvement deviennent difficiles de 3 niveaux. <br> <b> Jambe </b>: La jambe gonfle de manière grotesque, devenant aussi large que la partie la plus large de la cuisse sur toute sa longueur. Le pied est presque indiscernable. Pour la durée du gonflement, la jambe compte comme amputée (WFRP, page 180).";

    game.wfrp4e.config.symptomTreatment["swelling"] = "La plupart des traitements consistent à plonger la partie affectée, ou parfois tout le corps, dans un bain d'eau glacée pour réduire la chaleur qui accompagne les gonflements. Un <b> Test de Guérison Difficile (-20) étendu </b> nécessitant +3 DR réduit le renflement de <b> <a class ='chat-roll'> 2d10 </a> </b> heures. Chaque test dure une heure. Le patient se retrouve avec l'Etat Exténué +1 pour chaque test effectué au cours du processus. <br> <br> A la place, certains médecins saignent le patient avec une lame ou des sangsues. Un <b>Test de Guérison étendu </b> réussi nécessitant +4 SL et des Outils (médecin) réduit le renflement de (<a class ='chat-roll'> 1d10 </a> + Bonus d'Endurance du patient) heures. Chaque test a une difficulté de base <b> impossible (-50) </b> et dure une demi-heure.";

    game.wfrp4e.config.loreEffects["tzeentch"] = {
      label: "Domaine de Tzeentch",
      icon: "modules/wfrp4e-core/icons/spells/tzeentch.png",
      transfer: true,
      flags: {
        wfrp4e: {
          "effectApplication": "apply",
          "effectTrigger": "oneTime",
          "lore": true,
          "script": `
             if (this.actor.isOwner)
                args.actor.setupSkill("Résistance", {context : {failure: "1 Point de Corruption reçu", success : "1 Point de Chance gagné"}}).then(setupData => {
                    args.actor.basicTest(setupData).then(test => 
                     {
                         if (test.result.result == "success" && args.actor.type == "character")
                         {
                             args.actor.update({"system.status.fortune.value" : args.actor.system.status.fortune.value + 1})
                         }
                         else if (test.result.result == "failure" && args.actor.type == "character")
                         {
                          args.actor.update({"system.status.corruption.value" : args.actor.system.status.corruption.value + 1})
                         }
                     })
                  })`
        }
      }
    }
  }
}

/************************************************************************************/
const _patch_up_in_arms = () => {

  game.wfrp4e.config.hitLocationTables["quadruped"] = "Quadrupède";
  let batter = game.wfrp4e.config.groupAdvantageActions.find(ga => ga.name == "Batter")
  if (batter) {
    batter.name = "Battre"
    batter.description = "En face d'un adversaire plus expérimenté, quelque fois la force brute peut réussir là où d'autres approches échouent.",
    batter.effect = "<strong>Action Spéciale</strong>: Pour Battre votre adversaire, vous devez réussir un Test Opposé de Force contre votre adversaire. Celui qui obtient le DR le plus élevé gagne. Si vous gagnez ce Test, votre adversaire reçoit l'état @Condition[A Terre] et vous recevez +1 Avantage. Si vous  perdez le Test Opposé, votre opposant gagne +1 Avantage and votre action est terminée. Vous ne gagnez pas d'Avantage due à la victoire d'un test Opposé lorsque vous gagnez ce test (ie 1 seul avantage octroyé au total si le Test Opposé de Force est remporté)."
  }
  let trick = game.wfrp4e.config.groupAdvantageActions.find(ga => ga.name == "Trick")
  if (trick) {
    trick.name = "Duper"
    trick.description = "Vous prenez un instant pour lancer de la poussière dans les yeux de votre adversaire ou bien lui lancer de l'huile enflammée. Cette manoeuvre est risquée, et peu d'ennemis se font avoir deux fois de la même manière",
    trick.effect = "<strong>Action Spéciale</strong>: Pour Duper votre adversaire, vous devez réussir un Test Opposé d'Agilité contre lui. Celui qui obtient le plus haut DR gagne le Test. Si vous gagnez le Test, vous recevez +1 Avantage. En fonction des circonstances, le MJ peut vous autoriser à attribuer à votre adversaire l'un des états suivants :  @Condition[En Flammes], @Condition[Aveuglé], or @Condition[Empêtré]. Si vous perdez le Test Opposé, votre adversaire gagne +1 Avantage et votre action est terminée. Le MJ peut interdire certains de ces états si vous n'avez d'objet applicables dans votre main, ou bien si vous avez déja infligé un état identique precedemment à cet adversaire. Vous ne gagnez pas d'Avantages due à la victoire d'un test Opposé lorsque vous gagnez ce test (ie 1 seul avantage octroyé au total si le Test Opposé de Force est remporté)."
  }
  let addeffort = game.wfrp4e.config.groupAdvantageActions.find(ga => ga.name == "Additional Effort")
  if (addeffort) {
    addeffort.name = "Effort Supplémentaire"
    addeffort.description =  "Dans des circonstances désespérées, vous pouvez utiliser l'élan que vous avez acquis pour augmenter vos chances de succès.",
    addeffort.effect = "<strong>Action Gratuite</strong>: Vous gagnez un bonus de +10% pour n'importe quel test. Vous pouvez dépenser des avantages supplémentaires pour ajouter +10% par Avantage dépensé en plus. Par exemple, vous pouvez dépenser 3 Avantages pour un bonus de +10%, 4 avantages pour un +30%, etc. Le Test qui en découle ne procure jamais d'Avantages pour le personnage qui le réalise."
  }
  let flee = game.wfrp4e.config.groupAdvantageActions.find(ga => ga.name == "Flee from Harm")
  if (flee) {
    flee.name = "Fuir le Mal"
    flee.description =  "Vous profitez d'un moment de distraction de votre adversaire pour fuir le combat.",
    flee.effect = "<strong>Mouvement</strong>: Vous pouvez vous éloignez de votre adversaire sans aucune pénalité. Cela remplace la règle de @UUID[Compendium.wfrp4e-core.journal-entries.NS3YGlJQxwTggjRX.JournalEntryPage.bdfiyhEYtKs7irqc#disengaging]{Désengagement}."
  }
  let addaction = game.wfrp4e.config.groupAdvantageActions.find(ga => ga.name == "Additional Action")
  if (addaction) {
    addaction.name = "Action Supplémentaire"
    addaction.description = "Vous profitez d'une opportunité pour accomplir une action remarquable.",
    addaction.effect = "<strong>Action Gratuite</strong>: Vous réalisez une action supplémentaire. Cette action ne génère jamais d'Avantage pour vous. Vous pouvez réaliser cette dépense d'Avantages seulement une seule fois par Tour."
  }
}

/************************************************************************************/
/* Manages /auberge command */
const _manage_inn_roll = async (content, msg) => {
  // Split input into arguments
  let command = content.split(" ").map(function (item) {
    return item.trim();
  })

  console.log("COMMANDES", command);
  if (command[0] == "/auberge" && command[1]) {
    msg["type"] = 0;
    msg["rollMode"] = "gmroll";
    var compendium = game.packs.get('wh4-fr-translation.plats-dauberges')
    const pack = game.packs.get(compendium);
    let rollList = await compendium.getDocuments()
    //console.log("AUBERGE", rollList)
    for (var i = 0; i < rollList.length; i++) {
      var rollTab = rollList[i];
      console.log("Got compendium...", rollList, rollTab.name);
      if (rollTab.name.toLowerCase().includes(command[1].toLowerCase())) {
        let my_rollTable;
        await compendium.getDocument(rollTab._id).then(mytab => my_rollTable = mytab);
        my_rollTable.draw({ rollMode: "gmroll" });
        return false;
      }
    }
  }
  if (content.includes("/auberge")) {
    msg["type"] = 0;
    msg["rollMode"] = "gmroll";
    msg["content"] = "Syntaxe : /auberge MOT_CLE, avec MOT_CLE parmi:<br>BoissonsBase, BoissonsFortes, Desserts, PlatsCommuns, PlatsExcellents, PlatsMaritimes, PlatsMédiocres, PlatsQualité,        PlatsRivières<br>Des raccourcis sont possibles avec une partie du nom : /auberge Base (correspond à BoissonBase) ou /auberge Mari (correspond à PlatsMaritimes), etc."
    ChatMessage.create(msg);
    return false;
  }
}

/************************************************************************************/
let __eis_tables = {
  "animalmishap": 1, "beasthead": 1, "coincedentalenc": 1, "demonic-mien": 1,
  "expandedmutatemental": 1, "expandedmutatephys": 1, "fixations": 1,
  "harmfulenc": 1, "positiveenc": 1, "weather": 1, "mutatephys": 1,
  "vehiclemishap": 1, "quadruped": 1, "ridingmishap": 1, "weather": 1,
  "delirium": 1
}
let __dotr_tables = {
  "rowingboat": 1, "sailingboat": 1, "wind-direction": 1, "waterborne": 1, "traderumour": 1
}
let __wfrp4e_tables = {
  "career": 1, "critbody": 1, "critleg": 1, "doom": 1, "doom2": 1, "eyes": 1, "majormis": 1, "mutatemental": 1, "oops": 1, "species": 1, "travel": 1,
  "hitloc": 1, "critarm": 1, "crithead": 1, "delirium": 1, "event": 1, "hair": 1, "minormis": 1, "mutatephys": 1, "talents": 1, "wrath": 1,
  "astral": 1, "corruption": 1, "snake": 1, "spider": 1, "job": 1

}
let __to_table_translate = [{ name: "traits", transl: "Traits" }, { name: "talents", transl: "Talents" }, { name: "skills", transl: "Compétences" },
{ name: "careers", transl: "Carrières" }, { name: "spells", transl: "Sorts" }, { name: "prayers", transl: "Bénédictions et Miracles" },
{ name: "injuries", transl: "Blessures" }, { name: "criticals", transl: "Critiques" }, { name: "trappings", transl: "Equipement" },
{ name: "bestiary", transl: "Bestiaire" }, { name: "diseases", transl: "Maladies" }
]

/************************************************************************************/
const __create_translation_tables = async (compmod) => {
  for (let iterData of __to_table_translate) {

    let entityName = compmod + '.' + iterData.name;
    let compData = game.packs.get(entityName);
    let compFull = await compData.getContent();
    let htmlTab = "<table border='1'><tbody>";
    for (let entryData of compFull) {
      htmlTab += "<tr><td>" + entryData.data.originalName + "</td><td>@Compendium[" + entityName + '.' + entryData.id + "]{" + entryData.name + "}</td></tr>\n";
    };
    htmlTab += "</table>";
    let myjournal = await JournalEntry.create({ name: 'Traduction des ' + iterData.transl, content: htmlTab });
    game.journal.insert(myjournal);
  }
}

/************************************************************************************
 * The default static compendium of translation tables must be aut-mapped to the relevant
 * compendium content name (ie either wfrp4e or wfrp4e-core up to now).
 *                                                                                     */
const __auto_patch_translation_journal_compendium = async (compmod) => {
  if (game.user.isGM) {
    let compData = game.packs.get("WH4-fr-translation.tables-des-traductions");
    compData.locked = false;
    let translEntries = await compData.getContent();
    for (let entryData of translEntries) {
      let mydata = foundry.utils.duplicate(entryData.data);
      mydata.content = mydata.content.replace(/wfrp4e-content/g, compmod);
      entryData.update(mydata);
    }
    compData.locked = true;
  }
}

/************************************************************************************/
const loadCompendiumData = async (compendium) => {
  const pack = game.packs.get(compendium);
  return await pack?.getDocuments() ?? [];
}

/* -------------------------------------------- */
/************************************************************************************/
const loadCompendium = async (compendium, filter = item => true) => {
  let compendiumData = await loadCompendiumData(compendium);
  return compendiumData.filter(filter);
}

/************************************************************************************/
const patch_core_tables = (tableList) => {
  if (game.version) { // v9 and above
    return;
  }
  FilePicker.browse("data", "modules/WH4-fr-translation/tables/").then(resp => {
    for (var file of resp.files) {
      let filename = file.substring(file.lastIndexOf("/") + 1, file.indexOf(".json"))
      if (tableList[filename] == 1) { // Matching table name -> patch !
        fetch(file).then(r => r.json()).then(records => {
          //console.log("Patch !!!", filename, records);
          //WFRP_Tables[filename] = records;
          game.wfrp4e.tables[filename] = records;
        });
      }
    }
  });
}

/************************************************************************************/
const patch_trade_gazeteer = () => {
  if (game.wfrp4e.config.trade?.gazetteer) {
    fetch("modules/wh4-fr-translation/trade/gazetteer_dotr.json").then(r => r.json()).then(records => {
      game.wfrp4e.config.trade.gazetteer = records;
    });
  }
}

/************************************************************************************/
const __check_fix_wrong_modules = (chatFlag, patchFinished) => {

  WH4FRPatchConfig.perform_patch();

  let coreFound = false;
  game.modules.forEach((module, name) => {

    //console.log("TESTING MODULE", module)
    if (module.id == "wfrp4e-core" && module.active) {
      coreFound = true
      patch_core_tables(__wfrp4e_tables);
    }
    if (module.id == "wfrp4e-eis" && module.active) {
      patch_core_tables(__eis_tables);
      _patch_eis();
    }
    if (module.id == "wfrp4e-dotr" && module.active) {
      patch_core_tables(__dotr_tables);
      patch_trade_gazeteer()
    }

    if (module.id == "wfrp4e-up-in-arms" && module.active) {
      _patch_up_in_arms();
    }

    if (module.id == 'ogre-kingdom-wfrp4e' && module.active) {
      WH4FRPatchConfig.perform_ogrekingdom_patch();
      if (game.user.isGM && chatFlag)
        ChatMessage.create({ content: "<div><strong>Le module Ogre-Kingdom a été detecté et automatiquement patché.</strong></div>", whisper: ChatMessage.getWhisperRecipients("GM") });
    }

    if (module.id == "wfrp4e-ew" && module.active && game.user.isGM && chatFlag) {
      ChatMessage.create({
        content: "<div><strong>Vous avez le module EW (wfrp4e-ew ?) installé. Malheureusement, ce module n'est pas compatible avec" +
          " les traductions et vient casser le fonctionnement de la traduction. Veuillez recopier les compendiums dans votre monde, désactiver le module et re-démarrer le monde</strong></div>",
        whisper: ChatMessage.getWhisperRecipients("GM")
      });
    }
  });
  if ( !coreFound) {
    if (game.user.isGM && chatFlag) {
      ChatMessage.create({
        content: "<div><strong>Le module Core WFRP4E n'a pas été trouvé ou activé. Veuillez acheter et/ou activer ce module de base avant de continuer.</strong></div>",
        whisper: ChatMessage.getWhisperRecipients("GM")
      });
    }
  } else {
    if (game.user.isGM && patchFinished) {
      ChatMessage.create({
        content: "<div>Les modules WFRP4E ont été <strong>patchés avec succés</strong>. Vous pouvez y aller et que <strong>Shallya vous garde !</strong></div><div>Derniers changements : Support WFRP4E v8.3.X</div></ul>",
        user: game.user.id,
        whisper: ChatMessage.getWhisperRecipients("GM")
      });
    }
  }
}

const __history = [ 
  "Nouveautés 7.1.6: <ul><li>Traduction des acteurs de EiS et Middenheim grâce à Eltrys et Kyllian !</li></ul>"
]

/************************************************************************************/
const convertColumnToMulti = (table) => {
  let columns = table.columns;
  let newTable = foundry.utils.duplicate(table)

  delete newTable.columns;
  newTable.rows = table.rows.map(i => { return { range: {} } })
  newTable.multi = table.columns

  for (let column of columns) {
    for (let row of newTable.rows) {
      row[column] = {}
      row.range[column] = []
    }
  }

  for (let index in newTable.rows) {
    for (let column in table.rows[index].range) {
      newTable.rows[index][column] = { name: table.rows[index].name }
      newTable.rows[index].range[column] = table.rows[index].range[column]
    }
  }
  return newTable;
}

/************************************************************************************/
const __patchStyleSheet = () => {
  for (let styleSheet of document.styleSheets) {
    if (styleSheet.href && styleSheet.href.includes("wfrp4e.css")) {
      let found = 0
      for (let i = 0; i < styleSheet.cssRules.length; i++) {
        let rule = styleSheet.cssRules[i]
        if (rule.selectorText == '.sidebar-popout') {
          console.log("DELETE RULE", rule)
          found = i
          /*rule.cssText = ".sidebar-popout {  }"
          rule.style.width = ""
          console.log("Found rul2", rule)*/
        }
      }
      styleSheet.deleteRule(found)
    }
  }
}

/************************************************************************************/
const __add_actors_translation = () => {
  const lang = game.settings.get('core', 'language');
  if (lang == "fr") {
    let pack_array = [];
    for (let metadata of game.packs) {
      if (!game.babele.isTranslated(metadata) && 
           metadata.collection != "wfrp4e-core.actors" && 
           metadata.collection != "wfrp4e-core.bestiary" && 
           metadata.collection != "wfrp4e-ua1.actors" && 
           metadata.collection != "wfrp4e-altdorf.actors" && 
           metadata.collection != "wfrp4e-rnhd.actors" && 
           metadata.collection != "wfrp4e-dotr.actors" && 
           metadata.collection != "wfrp4e-eis.actors" && 
           metadata.collection != "wfrp4e-pbtt.actors" && 
           metadata.collection != "wfrp4e-middenheim.actors" && 
           metadata.documentName === 'Actor') {
        //console.log("REPLACE PACK : ", metadata);
        let translations = {
          "label": metadata.name,
          "mapping": {
            "name": "name",
            "description": "system.details.biography.value",
            "items": {
              "path": "items",
              "converter": "bestiary_traits"
            },
            "characteristics": {
              "path": "system.characteristics",
              "converter": "npc_characteristics"
            },
            "details": {
              "path": "system.details",
              "converter": "npc_details"
            }
          }
        }
        //console.log(metadata, translations)
        game.babele.packs.set(metadata.metadata.id, new TranslatedCompendium(metadata.metadata, translations))
      }
    }
  }
  // Close the warning dialog
  if ( game.wfrp4e.warnDialog) {
    game.wfrp4e.warnDialog.close();
    game.wfrp4e.warnDialog = null;
  }
}


/************************************************************************************/
/* Hook for specific command */
Hooks.on("chatMessage", (html, content, msg) => {

  if (content.toLowerCase().includes('auberge')) {
    _manage_inn_roll(content, msg);
    return false;
  }
});

/************************************************************************************/
/* Additionnal hooks ready */
Hooks.on('ready', () => {

  if (game.user.isGM) {
    game.wfrp4e.warnDialog = new Dialog({  
      title: "Chargement de la traduction FR - Merci d'attendre",
      content: `<img src="modules/wh4-fr-translation/images/warhammer-v1-logo.webp"><p class="wfrp4-fr-message">Les moines de l'ordre de l'Enclume, associés aux légistes de Talabaheim, préparent la traduction Bretonnienne de ce monde...</h3><p class="wfrp4-fr-message">Merci d'attendre la disparition de ce message pour vaquer dans l'Empire.</p> <p class="wfrp4-fr-message">Si une bénédiction de Shallya apparait dans le tchat, c'est que tout s'est bien passé.</p>`,
      buttons: {
      }
    })
    game.wfrp4e.warnDialog.render(true, {focus: true, left: 20, top: 20});
    let chatData = {
      user: game.user.id,
      rollMode: game.settings.get("core", "rollMode"),
      whisper: ChatMessage.getWhisperRecipients('GM'),
      content: `<div>Les modules WFRP4E sont <strong>en cours de patch pour traduction</strong>... Merci <strong>d'attendre le message de fin</strong> (dans environ 20 secondes)<p>Pour rappel et à titre informatif, il faut activer ce module de traduction FR <strong>avant</strong> de procéder à l'importation des données des modules C7 (core compris). Autrement dit, activez ce module FR <strong>AVANT</strong> tout autre module.</p><p>Support et informations sur le Discord FR de Foundry :  https://discord.gg/pPSDNJk</p></div>`
    }
    ChatMessage.create(chatData);
  }
  
  // Patch function for effects
  game.wfrp4e.utility.findKey = warhammer.utility.findKey
  
  /** New modifiers */
  game.wfrp4e.config.difficultyModifiers = {
    "veasy": 60,
    "easy": 40,
    "banal": 30,
    "average": 20,
    "medium": 10,
    "challenging": 0,
    "difficult": -10,
    "hard": -20,
    "vhard": -30,
    "doom": -40
  }
  game.wfrp4e.config.difficultyLabels = {

    "veasy": "Très Facile (+60)",
    "easy": "Facile (+40)",
    "banal": "Banal (+30)",
    "average": "Accessible (+20)",
    "medium": "Faisable (+10)",
    "challenging": "Intermédiaire (+0)",
    "difficult": "Complexe (-10)",
    "hard": "Difficile (-20)",
    "vhard": "Très Difficile (-30)",
    "doom": "Maudit (-40)"
  }

  game.wfrp4e.warnDialog.render(true, {focus: true, left: 20, top: 20});
  //setTimeout( __check_fix_wrong_modules, 2000, true, false);
  setTimeout(__check_fix_wrong_modules, 20000, true, true);
  setTimeout(__add_actors_translation, 21000, false, true);
  
  //__patchStyleSheet()

  /* ATTEMPT !!
  loadCompendium("wfrp4e-core.spells").then( comp => {
    let sorted = {};
    for (let spell of comp) {
      if ( !sorted[spell.data.data.lore.value]) {
        sorted[spell.data.data.lore.value] = [];
      }
      sorted[spell.data.data.lore.value].push( foundry.utils.duplicate(spell.data) );
    }
    console.log("SORTED", sorted);
  });*/

  /*
  let compmod = "wfrp4e";
  // Check various settings in the installation  
  game.modules.forEach((module, name) => {
    if ( name == "wfrp4e-core" && module.active) {
      compmod = "wfrp4e-core";
    }
  } );
  __auto_patch_translation_journal_compendium( compmod )
  /* Uncomment this to auto-create the translation tables 
     Auto-create translation journal tables
  __create_translation_tables(compmod);
  */

});
