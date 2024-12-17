/************************************************************************************/
import loadScripts from "./loadScripts.js";
import statParserFR from "./import-stat-2.js";

/************************************************************************************/
var compmod = "wfrp4e-core";
const vo_conditions = {
  "ablaze": "Ablaze",
  "bleeding": "Bleeding",
  "blinded": "Blinded",
  "broken": "Broken",
  "deafened": "Deafened",
  "entangled": "Entangled",
  "fatigued": "Fatigued",
  "poisoned": "Poisoned",
  "prone": "Prone",
  "stunned": "Stunned",
  "surprised": "Surprised",
  "unconscious": "Unconscious",
  "grappling": "Grappling",
  "fear": "Fear",
  "defeated": "Defeated"
}

const __SELECT_BONUS_PREFIX_D = {
  "initiative": 1,
  "intelligence": 1,
  "endurance": 1,
  "agilite": 1,
  "agilité": 1
}

/************************************************************************************/
export class WFRP4FrTranslation {
  
  static parseSpellContent(spell) {
    if (spell.system.range?.value) {
      spell.system.range.value = this.processSpellContent(spell.system.range.value)
    }
    if (spell.system.damage?.value) {
      spell.system.damage.value = this.processSpellContent(spell.system.damage.value)
    }
    if (spell.system.duration?.value) {
      spell.system.duration.value = this.processSpellContent(spell.system.duration?.value)
    }
    if ( spell.system.range?.value) {
      spell.system.range.value = this.processSpellContent(spell.system.range?.value)
    }
    if (spell.system.target?.value ) {
      spell.system.target.value = this.processSpellContent(spell.system.target?.value)
    }
  }

  static processSpellContent(value) {
    //console.log("Spell duration/range/damage/target :", value);
    if (value == "") return ""; // Hop !
    if (value == "Touch") return "Contact"; // Hop !
    if (value == "You") return "Vous"; // Hop !        
    if (value == "Instant") return "Instantané"; // Hop !
    let translw = value;
    let re = /(.*)\s+[Bb]onus\s*(\w*)/i;
    let res = re.exec(value);
    //console.log("RES1:", res);
    let unit = "";
    if (res) { // Test "<charac> Bonus <unit>" pattern
      if (res[1]) { // We have char name, then convert it 
        translw = game.i18n.localize(res[1].trim());
        let bonusPrefix = (translw.toLowerCase() in __SELECT_BONUS_PREFIX_D) ? "Bonus d'" : "Bonus de ";
        translw = bonusPrefix + translw
      }
      unit = res[2];
    } else {
      re = /(\d+) (\w+)/i;
      res = re.exec(value);
      if (res) { // Test : "<number> <unit>" pattern
        translw = res[1];
        unit = res[2];
      } else { // Test 
        re = /(\w+) (\w+)/i;
        res = re.exec(value);
        if (res) { // Test : "<charac> <unit>" pattern
          translw = game.i18n.localize(res[1].trim());
          unit = res[2];
        }
      }
    }
    if (unit == "hour") unit = "heure";
    if (unit == "hours") unit = "heures";
    if (unit == "days") unit = "jours";
    if (unit == "yard") unit = "mètre";
    if (unit == "yards") unit = "mètres";
    if (unit == "Bonus") { // Another weird management
      console.log("Translating bonus", unit);
      translw = "Bonus de " + translw;
    } else {
      translw += " " + unit;
    }
    return translw;
  }
}

/************************************************************************************/
Hooks.once('init', () => {

  // Check various settings in the installation  
  game.modules.forEach((module, id) => {
    if (id == "wfrp4e-core" && module.active) {
      compmod = "wfrp4e-core";
    }
  });
  game.wfrp4efr = {
    compmod: compmod,
    vo_conditions: vo_conditions
  }

  game.wfrp4e.apps.StatBlockParser.parseStatBlock = async function (statString, type = "npc") {
    return statParserFR(statString, type);
  }
  
  console.log("WFRP4E-FR | Loading Babele translation module ...");
  loadScripts();

  /*---------------------------------------------------------------------*/
  /* DEPRECATED : game.wfrp4e.entities.ItemWfrp4e.prototype.computeSpellDamage = function (formula, isMagicMissile) {
    try {

      formula = formula.toLowerCase();

      if (isMagicMissile) // If it's a magic missile, damage includes willpower bonus
      {
        formula += "+ " + this.actor.characteristics["wp"].bonus
      }

      // Specific case, to avoid wrong matching with "Force"
      if (formula.includes("toughness bonus")) {
        formula = formula.replace("toughness bonus", this.actor.characteristics["t"].bonus);
      }

      // Specific case, to avoid wrong matching with "Force"
      if (formula.includes("force mentale")) {
        // Determine if it's looking for the bonus or the value
        if (formula.includes('bonus')) {
          formula = formula.replace("bonus de force mentale", this.actor.characteristics["wp"].bonus);
          formula = formula.replace("force mentale bonus", this.actor.characteristics["wp"].bonus);
        } else
          formula = formula.replace("force mentale", this.actor.characteristics["wp"].value);
      }

      // Iterate through characteristics
      for (let ch in this.actor.characteristics) {
        // If formula includes characteristic name
        while (formula.includes(this.actor.characteristics[ch].label.toLowerCase())) {
          // Determine if it's looking for the bonus or the value
          if (formula.includes('bonus')) {
            formula = formula.replace("bonus de " + game.wfrp4e.config.characteristics[ch].toLowerCase(), this.actor.characteristics[ch].bonus);
            formula = formula.replace(game.wfrp4e.config.characteristics[ch].toLowerCase() + " bonus", this.actor.characteristics[ch].bonus);
          }
          else
            formula = formula.replace(game.wfrp4e.config.characteristics[ch].toLowerCase(), this.actor.characteristics[ch].value);
        }
      }

      return eval(formula);
    }
    catch (e) {
      throw ui.notifications.error("Error: could not parse spell damage. See console for details")
    }
  }*/

  /*---------------------------------------------------------------------*/
  /* DEPRECATED : game.wfrp4e.entities.ItemWfrp4e.prototype.computeSpellPrayerFormula = function (type, aoe = false, formulaOverride) {
    let formula = formulaOverride || this[type]?.value
    if (Number.isNumeric(formula))
      return formula

    //console.log("Compute FR")
    formula = formula.toLowerCase();

    // Do not process these special values
    if (formula != game.i18n.localize("You").toLowerCase() && formula != game.i18n.localize("Special").toLowerCase() && formula != game.i18n.localize("Instant").toLowerCase()) {
      // Specific case, to avoid wrong matching with "Force"
      if (formula.includes("force mentale")) {
        // Determine if it's looking for the bonus or the value
        if (formula.includes('bonus')) {
          formula = formula.replace("bonus de force mentale", this.actor.characteristics["wp"].bonus);
          formula = formula.replace("force mentale bonus", this.actor.characteristics["wp"].bonus);
        }
        else
          formula = formula.replace("force mentale", this.actor.characteristics["wp"].value);
      }
      if (formula.includes("yard"))
        formula = formula.replace('yard', "mètre");
      if (formula.includes("yds"))
        formula = formula.replace('yds', "m.");
      // Iterate through remaining characteristics
      for (let ch in this.actor.characteristics) {
        // If formula includes characteristic name
        //console.log("Testing :", ch, WFRP4E.characteristics[ch].toLowerCase());
        if (formula.includes(game.wfrp4e.config.characteristics[ch].toLowerCase())) {
          // Determine if it's looking for the bonus or the value
          if (formula.includes('bonus')) {
            formula = formula.replace("bonus de " + game.wfrp4e.config.characteristics[ch].toLowerCase(), this.actor.characteristics[ch].bonus);
            formula = formula.replace(game.wfrp4e.config.characteristics[ch].toLowerCase() + " bonus", this.actor.characteristics[ch].bonus);
          }
          else
            formula = formula.replace(game.wfrp4e.config.characteristics[ch].toLowerCase(), this.actor.characteristics[ch].value);
        }
      }
    }

    // If AoE - wrap with AoE ( )
    if (aoe)
      formula = "AoE (" + formula.capitalize() + ")";

    //console.log("calculateSpellAttributes -> " + formula );
    return formula.capitalize();
  }*/

  /*---------------------------------------------------------------------*/
  // Converters area
  if (game.babele !== 'undefined') {

    game.babele.register({
      module: 'wh4-fr-translation',
      lang: 'fr',
      dir: 'compendium'
    })

    game.babele.registerConverters({

      "career_skills": (skills_list) => {
        let validCompendiums = game.wfrp4e.tags.getPacksWithTag("skill")
        //DEBUG: console.log( "Thru here ...", compendium, skills_list);
        if (skills_list) {
          let i;
          let len = skills_list.length;
          let re = /(.*)\((.*)\)/i;
          for (i = 0; i < len; i++) {
            skills_list[i] = skills_list[i].trim();
            for (let compData of validCompendiums) {
              let translItem = game.babele.translate(compData.metadata.id, { name: skills_list[i], type: "skill" }, true)
              let transl = translItem?.name || undefined
              if (!transl) transl = skills_list[i]
              //console.log("List ...", skills_list[i], compData.metadata.id, translItem);
              if (transl == skills_list[i]) {
                let res = re.exec(skills_list[i]);
                if (res) {
                  //console.log("Matched/split:", res[1], res[2]);
                  let subword = game.i18n.localize(res[2].trim());
                  let s1 = res[1].trim() + " ()";
                  translItem = game.babele.translate(compData.metadata.id, { name: s1, type: "skill" }, true)
                  let translw = translItem?.name || undefined
                  if (translw && translw != s1) {
                    let res2 = re.exec(translw);
                    transl = res2[1] + "(" + subword + ")";
                  } else {
                    s1 = res[1].trim() + " ( )";
                    translItem = game.babele.translate(compData.metadata.id, { name: s1, type: "skill" }, true)
                    translw = translItem?.name || undefined
                    if(translw) {
                      let res2 = re.exec(translw);
                      transl = res2[1] + "(" + subword + ")";
                    } else {
                      transl = res[1] + " (" + subword + ")";
                    }
                  }
                }
              }
              skills_list[i] = transl;
              if (translItem?.system)
                break;
            }
          }
        }
        return skills_list
      },
      "role_skills": (skills) => {
        let skills_list = skills.split(',');
        let skillsFR = game.babele.converters.career_skills(skills_list);
        return skillsFR.join(', ')
      },
      "process_effects": (effectsData, translations, data, tc, tc_translations) => {
        //console.log("Effects :", effectsData, translations, data, tc, tc_translations)
        for (let e of effectsData) {
          let origName = e.name
          e.name = tc_translations.name || game.i18n.localize(e.name)
          if ( e.flags?.wfrp4e?.scriptData) {
            for (let script of e.flags.wfrp4e.scriptData) {
              if (script?.label) {
                // Quand le label du script est strictement identique au nom de l'item concerné
                if ( script.label.toLowerCase() == origName.toLowerCase() ) {
                  script.label = e.name 
                } else if (script.label.toLowerCase().includes("tests to affect")) {
                  script.label = script.label.replace("Tests to affect", "Tests relatifs à ")
                } else if (script.label.toLowerCase().includes("using torn muscle")) {
                  script.label = script.label.replace("Using Torn Muscle", "Utilisation du muscle déchiré ")
                } else {
                  script.label = game.i18n.localize(script.label)
                }
              }
            }
          }
        }
        return effectsData
      },
      "resultConverter": (results, translated) => {
        //console.log("STUF PARSING", results, translated)
        if (translated) {
          for (let data of results) {
            if (translated[`${data.range[0]}-${data.range[1]}`]) {
              data.text = translated[`${data.range[0]}-${data.range[1]}`]
            }
          }
          return results
        }
        // Auto patch
        if (results[0].text.includes("wfrp4e-core.career-descriptions")) {
          if (game.system.version.match("7.")) {
            results[0].text = "wfrp4e-core.journals"
          } else {
            results[0].text = "wfrp4e-core.journal-entries"
          }
        }
        if (results[0].text.includes("wfrp4e-core.journal")) {
          for (let data of results) {
            let career = data.text.match(/{(.*)}/)
            //console.log(">>>>>", career)
            if (career && career[1]) {
              let careerFR = game.babele.converters.career_careergroup(career[1])
              data.text = data.text.replace(career[1], careerFR)
            }
          }
        }
        if (results[0].documentCollection) {
          return game.babele.converters.tableResults(results)
        }
        return results
      },

      "npc_details": (details) => {
        //console.log("DETAILS: ", details);
        let newDetails = foundry.utils.duplicate(details);
        if (details.species?.value)
          newDetails.species.value = game.i18n.localize(details.species.value);
        if (details.gender?.value)
          newDetails.gender.value = game.i18n.localize(details.gender.value);
        if (details.class?.value)
          newDetails.class.value = game.i18n.localize(details.class.value);
        return newDetails;
      },

      "career_talents": (talents_list) => {
        let validCompendiums = game.wfrp4e.tags.getPacksWithTag("talent")
        let i;
        if (talents_list) {
          let len = talents_list.length;
          let re = /(.*)\((.*)\)/i;
          for (i = 0; i < len; i++) {
            for (let compData of validCompendiums) {
              let translItem = game.babele.translate(compData.metadata.id, { name: talents_list[i] }, true);
              //console.log("Search talent name:", compData.metadata.id, talents_list[i], translItem);
              let transl = translItem?.name || undefined
              if (!transl) transl = talents_list[i]
              if (transl == talents_list[i]) {
                let res = re.exec(talents_list[i]);
                if (res) {
                  let subword = game.i18n.localize(res[2].trim());
                  let s1 = res[1].trim(); // No () in talents table
                  translItem = game.babele.translate(compData.metadata.id, { name: s1 }, true)
                  let translw = translItem?.name || undefined
                  //console.log("Search talent name:", compData.metadata.id, s1, translw);
                  if (translw && translw != s1) {
                    transl = translw + " (" + subword + ")";
                  }
                }
              }
              talents_list[i] = transl;
              if (translItem?.system)
                break;
            }
          }
        }
        return talents_list;
      },
      "npc_characteristics": (chars) => { // Auto-convert char names in the sheet
        for (let key in chars) {
          let char = chars[key];
          //console.log("Was here !", key, char ); 
          let abrev = char["abrev"];
          let toTransl = "CHAR." + abrev;
          if (game.i18n.localize(toTransl) != toTransl) { // Manages unknown language
            char["label"] = game.i18n.localize("CHAR." + abrev);
            char["abrev"] = game.i18n.localize("CHARAbbrev." + abrev);
          }
        }
        return chars;
      },
      "bestiary_traits": (beast_traits, translations) => {
        if (!beast_traits) {
          console.log("No beast traits found here ...")
          return beast_traits
        }
        //console.log("TRANS:", beast_traits)
        for (let trait_en of beast_traits) {
          let special = "";
          let nbt = "";
          let name_en = trait_en.name.trim(); // strip \r in some traits name
          if (!trait_en.name || trait_en.name.length == 0) {
            console.log("Wrong item name found!!!!")
            continue
          }
          //console.log(">>>>>>>> Parsing", trait_en.name)
          if (trait_en.type == "trait") {
            //console.log("Trait translation", compmod, trait_en)
            if (name_en.includes("Tentacles")) { // Process specific Tentacles case
              let re = /(.d*)x Tentacles/i;
              let res = re.exec(name_en);
              if (res && res[1])
                nbt = res[1] + "x ";
              name_en = "Tentacles";
            } else if (name_en.includes("(") && name_en.includes(")")) { // Then process specific traits name with (xxxx) inside
              let re = /(.*) \((.*)\)/i;
              let res = re.exec(name_en);
              name_en = res[1]; // Get the root traits name
              special = " (" + game.i18n.localize(res[2].trim()) + ")"; // And the special keyword
            }
            let validCompendiums = game.wfrp4e.tags.getPacksWithTag("trait")
            for (let compData of validCompendiums) {
              let trait_fr = game.babele.translate(compData.metadata.id, { name: name_en }, true)
              if (trait_fr?.system) {
                trait_fr.name = trait_fr.name || trait_en.name
                trait_en.name = nbt + trait_fr.name + special;
                trait_en.system.description.value = trait_fr.system.description.value;
                if (trait_en.system?.specification && isNaN(trait_en.system.specification.value)) { // This is a string, so translate it
                  //console.log("Translating : ", trait_en.system.specification.value);            
                  trait_en.system.specification.value = game.i18n.localize(trait_en.system.specification.value.trim());
                }
                break // Translation has been found, skip other compendiums
              }
            }
          } else if (trait_en.type == "skill") {
            if (name_en.includes("(") && name_en.includes(")")) { // Then process specific skills name with (xxxx) inside
              let re = /(.*) +\((.*)\)/i;
              let res = re.exec(name_en);
              name_en = res[1].trim(); // Get the root skill name
              special = " (" + game.i18n.localize(res[2].trim()) + ")"; // And the special keyword
            }
            let validCompendiums = game.wfrp4e.tags.getPacksWithTag("skill")
            for (let compData of validCompendiums) {
              let trait_fr = game.babele.translate(compData.metadata.id, { name: name_en }, true)
              if (trait_fr?.system) {
                //console.log(">>>>> Skill ?", name_en, special, trait_fr.name, trait_fr);
                trait_fr.name = trait_fr.name || name_en
                trait_en.name = trait_fr.name + special;
                trait_en.system.description.value = trait_fr.system.description.value;
                break; // Translation has been found, skip other compendiums
              }
            }
          } else if (trait_en.type == "prayer") {
            let validCompendiums = game.wfrp4e.tags.getPacksWithTag("prayer")
            for (let compData of validCompendiums) {
              let trait_fr = game.babele.translate(compData.metadata.id, { name: name_en }, true)
              if (trait_fr?.system) {
                //DEBUG : console.log(">>>>> Prayer ?", name_en, special, trait_fr.name );
                WFRP4FrTranslation.parseSpellContent(trait_en)
                trait_fr.name = trait_fr.name || name_en
                trait_en.name = trait_fr.name + special;
                if (trait_fr.system?.description?.value) {
                  trait_en.system.description.value = trait_fr.system.description.value;
                }
                break;
              }
            }
          } else if (trait_en.type == "spell") {
            let validCompendiums = game.wfrp4e.tags.getPacksWithTag("spell")
            for (let compData of validCompendiums) {
              let trait_fr = game.babele.translate(compData.metadata.id, { name: name_en }, true)
              if (trait_fr?.system) {                
                //DEBUG : console.log(">>>>> Spell ?", name_en, special, trait_fr);
                WFRP4FrTranslation.parseSpellContent(trait_en)
                trait_fr.name = trait_fr.name || name_en
                trait_en.name = trait_fr.name + special;
                if (trait_fr.system?.description?.value) {
                  trait_en.system.description.value = trait_fr.system.description.value;
                }
                break;
              }
            }
          } else if (trait_en.type == "talent") {
            if (name_en.includes("(") && name_en.includes(")")) { // Then process specific skills name with (xxxx) inside
              let re = /(.*) +\((.*)\)/i;
              let res = re.exec(name_en);
              name_en = res[1].trim(); // Get the root talent name, no parenthesis this time...
              special = " (" + game.i18n.localize(res[2].trim()) + ")"; // And the special keyword
            }
            let validCompendiums = game.wfrp4e.tags.getPacksWithTag("talent")
            for (let compData of validCompendiums) {
              let trait_fr = game.babele.translate(compData.metadata.id, { name: name_en }, true)
              if (trait_fr?.system) {
                trait_fr.name = trait_fr.name || name_en // Security since babele v10
                //console.log(">>>>> Talent ?", trait_fr, name_en, special, trait_fr.name);
                if (trait_fr.name && (trait_fr.name == "Sprinter" || trait_fr.name != name_en)) { // Talent translated!
                  trait_en.name = trait_fr.name.trim() + special
                  if (trait_fr.system?.description?.value) { // Why ???
                    trait_en.system.description.value = trait_fr.system.description.value;
                  }
                }
                break;
              }
            }
          } else if (trait_en.type == "career") {
            let validCompendiums = game.wfrp4e.tags.getPacksWithTag("career")
            for (let compData of validCompendiums) {
              let career_fr = game.babele.translate(compData.metadata.id, { name: name_en }, true);
              if (career_fr?.system) {
                trait_en.name = career_fr.name || trait_en.name
                // DEBG: console.log(">>>>> Career ?", career_fr.name );
                trait_en.system = foundry.utils.duplicate(career_fr.system);
                break;
              }
            }
          } else if (trait_en.type == "vehicleRole") {
            let validCompendiums = game.wfrp4e.tags.getPacksWithTag("vehicleRole")
            for (let compData of validCompendiums) {
              let role_fr = game.babele.translate(compData.metadata.id, trait_en, true);
              if (role_fr?.system) {
                trait_en.name = role_fr.name || trait_en.name
                // DEBG: console.log(">>>>> Role ?", role_fr.name );
                trait_en.system = foundry.utils.duplicate(role_fr.system);
                break;
              }
            }
          } else if (trait_en.type == "trapping" || trait_en.type == "weapon" || trait_en.type == "armour" || trait_en.type == "container" || trait_en.type == "money") {
            let validCompendiums = game.wfrp4e.tags.getPacksWithTag(["trapping"], ["weapon", "armour", "container", "money"])
            for (let compData of validCompendiums) {
              let trapping_fr = game.babele.translate(compData.metadata.id, { name: name_en }, true);
              if (trapping_fr?.system) {
                //console.log(">>>>> Trapping ?", name_en, trapping_fr.name);
                trait_en.name = trapping_fr.name || trait_en.name
                if (trapping_fr.system?.description?.value) {
                  trait_en.system.description.value = trapping_fr.system.description.value
                }
                break;
              }
            }
          }
        }
        //console.log(">>>>>>>><OUTPUT", beast_traits)
        return beast_traits
      },
      // To avoid duplicateing class for all careers
      "generic_localization": (value) => {
        let ret = value
        if (value) {
          ret = game.i18n.localize(value.trim());
          if (!ret) ret = value
        }
        return ret
      },
      "trapping_qualities_flaws": (value) => {
        if (value) {
          let newQF = [];
          //console.log("ATOUTS", value, typeof(value));
          let list = value
          if (typeof (value) == "string") {
            let myList = value.split(",")
            list = []
            for (let l of myList) {
              list.push({ name: l.trim() })
            }
          }
          for (let i = 0; i < list.length; i++) {
            newQF[i] = foundry.utils.duplicate(list[i])
            if (newQF[i].name == "Trap Blade") {
              newQF[i].name = "TrapBlade"; // Auto-patch, without space!
              //console.log("PATCHED", trim);
            }
            let oldName = newQF[i].name
            newQF[i].name = game.i18n.localize(oldName)
            if (!newQF[i].name) newQF[i].name = oldName
          }
          return newQF;
        }
      },
      // Search back in careers the translated name of the groupe (as it is the name of the level career itself)
      "career_careergroup": (value) => {
        // Manage exception - Dirty hack
        if (value == 'Slayer') {
          return "Tueur";
        }
        if (value == 'Druidic Priest') {
          return "Druide";
        }
        //console.log("Carre groupe : ", value )
        // Per default
        let validCompendiums = game.wfrp4e.tags.getPacksWithTag("career")
        for (let compData of validCompendiums) {
          let newName = game.babele.translate(compData.metadata.id, { name: value }).name
          if (!newName) newName = value
          return newName
        }
        ui.notifications.error("Impossible de trouver la carrière " + value + ". Elle n'est probablement pas traduite.", { permanent: true })
        return value
      },

      "mutations_modifier": (value) => { // This is really UGLYYYY i know, but i started like this and discovered afterward that many strings were not easy to automate... Sorry :)
        //console.log("Parsing mutation :", value);
        value = value.toLowerCase();
        value = value.replace("gain a broken condition if you fail a test derived from ", "Gagnez un état Brisé si vous échouez à un test dérivé de ");
        value = value.replace("weapon skill", "Capacité de Combat");
        value = value.replace("ballistic skill", "Capacité de Tir");
        value = value.replace("strength", "Force");
        value = value.replace("toughness", "Endurance");
        value = value.replace("agility", "Agilité");
        value = value.replace("dexterity", "Dextérité");
        value = value.replace("willpower", "Force Mentale");
        value = value.replace("fellowship", "Sociabilité");
        value = value.replace("initiative", "Initiative");
        value = value.replace("intelligence", "Intelligence");
        value = value.replace("armor points to the head", "PA à la Tête");
        value = value.replace("subject to frenzy", "Sujet à la Frénésie");
        value = value.replace("you do not scar", "Aucune cicatrice");
        value = value.replace("movement", "Mouvement");
        value = value.replace("armor points to all locations", "PA sur tout le corps");
        value = value.replace("to any test when alone", "à tout les tests lorsque seul");
        value = value.replace("track", "Pistage");
        value = value.replace("to any test not hurting another", "à tout les Tests n'aggressant pas autrui");
        value = value.replace("on tests to hurt", "pour les tests impliquant une agression")
        value = value.replace("to all language tests when speaking", "à tout les Tests de Langue lorsque vous parlez");
        value = value.replace("on perception tests involving sight", "aux Tests de Perception impliquant la Vue");
        value = value.replace("to all Sociabilité tests", "à tout les Tests de Sociabilité");
        return value;
      },
      "talent_name": (name, translation) => {
        console.log("NAME !!!", name, translation)
      },
      "effects": (effects, translations) => {
        if (!effects) return;
        if (!translations) return;
        for (let i = 0; i < effects.length; i++) {
          let effect = effects[i];
          //console.log("EFFECT LABEL1:", effect );
          effect.label = translations['label' + i];
        }
        return effects
      },
      "diseases_effects": (effects, translations) => {
        if (!effects) return;
        for (let i = 0; i < effects.length; i++) {
          let effect = effects[i];
          let label = effect.label;
          let gravity = "";
          if (label.includes("(") && label.includes(")")) { // Then process specific skills name with (xxxx) inside
            let re = /(.*) +\((.*)\)/i;
            let res = re.exec(label);
            label = res[1].trim(); // Get the gravity
            gravity = " (" + game.i18n.localize(res[2].trim()) + ")"; // And the special keyword
          }
          effect.label = game.i18n.localize(label) + gravity;
        }
      },
      // Auto-translate duration
      "spells_duration_range_target_damage": (value) => {
        return WFRP4FrTranslation.processSpellContent(value);
      },
      // Auto-translate disease duration units
      "disease_duration_unit": (unit) => {
        return game.i18n.localize(unit).capitalize();
      }
  });
  }

});


/*---------------------------------------------------------------------*/
Hooks.once('ready', () => {

  import("https://www.uberwald.me/fvtt_appcount/count-class-ready.js").then(moduleCounter => {
    console.log("ClassCounter loaded", moduleCounter)
    moduleCounter.ClassCounter.registerUsageCount("wh4-fr-translation")
  }).catch(err =>
    console.log("No stats available, giving up.")
  )

});