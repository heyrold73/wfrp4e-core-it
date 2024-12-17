/************************************************************************************/
// Some internal test strings
let strfr = `LA TERREUR DE LA TEUFEL, TROLL DE RIVIÈRE RUSÉ
M  CC CT  F  E  I  Ag Dex Int FM Soc B
4 40 15  55  45  20  15 15 30 20 5 38 
Traits : Amphibie, Arme +9, Armure (2), Dur à Cuire, Insensible
à la douleur, Morsure +8, Régénération, Taille (Grande), Vision
Nocturne, Vomissement`

let str1 = `JABBERSLYTHE
M WS BS  S  T  I  Agi Dex
 Int WP Fel W
7  45 40 55   
50 20 35  -  10 20  - 20
Traits: Armour 3, Bestial, Bite+9, Bounce, Corrosive
Blood, Distracting, Infected, Maddening Aura (see
page 17), Night Vision, Size (Enormous), Tail +8,
Tongue Attack +5 (12), Venom, Weapon +9.
`;
let str = `REINER AND DIETER LEDERMANN
SMUGGLERS (BRASS 3)
M WS BS S
 T
 I
 Agi Dex Int WP Fel W
4
 33 33 32 35 38 41 39 33 37 38 12
Traits: Weapon (Dagger +5, Sword +7)
Skills: Bribery 43, Charm 43, Cool 42,
Consume Alcohol 45, Gossip 43, Haggle 43,
Lore (Local 38), Perception 43,
Secret Signs (Smuggler) 37
Talents: Briber, Criminal, Dealmaker,
Etiquette (Criminals, Doktor, Guilder)
Trappings: Dagger, Hand Weapon (Sword)
`
//import ItemWfrp4e from "/systems/wfrp4e/modules/item/item-wfrp4e.js"
//import ItemWfrp4e from "/systems/wfrp4e/wfrp4e.js"

/************************************************************************************/
import "./xregexp-all.js";
const us_carac = 'm\\s+ws\\s+bs\\s+s\\s+t\\s+i\\s+agi?\\s+dex\\s+int\\s+\\wp\\s+fel\\s+w';
const fr_carac = 'm\\s+cc\\s+ct\\s+f\\s+e\\s+i\\s+agi?\\s+dex\\s+int\\s+fm\\s+soc\\s+b';
const carac_val = '(?<m>[0-9\\-]+)\\s+(?<ws>[0-9\\-]+)\\s+(?<bs>[0-9\\-]+)\\s+(?<s>[0-9\\-]+)\\s+(?<t>[0-9\\-]+)\\s+(?<i>[0-9\\-]+)\\s+(?<ag>[0-9\\-]+)\\s+(?<dex>[0-9\\-]+)\\s+(?<int>[0-9\\-]+)\\s+(?<wp>[0-9\\-]+)\\s+(?<fel>[0-9\\-]+)\\s+(?<w>[0-9\\-\*]+)';
const name_val = '(?<name>[a-zA-Zéèêâôïäüù\\s\\-,\']*)[\\s\\r\\na-zA-Zéèêâôïäüù]*(?<tiers>.*|[\\(\\)a-z0-9]+)';
let sectionDataFR = [
  { name: "trait", toFind: "Traits\\s*:", secondParse: '(?<name>[a-zöàéè\\s]*)[\\s\\+]*(?<value>.*|[\\+0-9]+)', index: -1 },
  { name: "skill", toFind: "Compétences\\s*:", secondParse: '(?<name>[a-zàéè\\s\\(\\)]*)[\\s\\+]*(?<value>.*|[0-9]+)', index: -1 },
  { name: "talent", toFind: "Talents\\s*:", secondParse: '(?<name>[a-zöàéè\\-\\!\\(\\)\\s\\/\'’]*)[\\s\\+]*(?<value>.*|[0-9]+)', index: -1 },
  { name: "mutation", toFind: "Mutations\\s*:", secondParse: '(?<name>[a-zöàéè\\s]*)[\\s\\+]*(?<value>.*|[0-9]+)', index: -1 },
  { name: "trapping", toFind: "Equipement\\s*:", secondParse: '(?<name>[a-zöàéè0-9\\s(\\)\\-]*)[\\s\\+]*(?<value>.*|[0-9]+)', index: -1 },
  { name: "spell", toFind: "Sorts\\s*\\([a-z\\s]*\\)*:", secondParse: '(?<name>[a-zöàéè\\s]*)', index: -1 },
  { name: "spellpetty", toFind: "Spells\\s*\\(Magie Mineure\\)*:", secondParse: '(?<name>[a-zö\\-\\s]*)', index: -1 },
  { name: "spellarcane", toFind: "Spells\\s*\\(Arcane[a-z\\s]*\\)*:", secondParse: '(?<name>[a-zö\\-\\s]*)', index: -1 },
  { name: "spellarcane", toFind: "Spells\\s*\\(Domaine\\s*(?<lore>[a-z\\s]*)\\)*:", secondParse: '(?<name>[a-zö\\-\\s]*)', index: -1 }
];
let sectionDataUS = [
  { name: "trait", toFind: "Traits\\s*:", secondParse: '(?<name>[a-z\\s]*)[\\s\\+]*(?<value>.*|[\\+0-9]+)', index: -1 },
  { name: "skill", toFind: "Skills\\s*:", secondParse: '(?<name>[a-z\\s\\(\\)]*)[\\s\\+]*(?<value>.*|[0-9]+)', index: -1 },
  { name: "talent", toFind: "Talents\\s*:", secondParse: '(?<name>[a-z\\-\\s\\!\\(\\)\\/\'’]*)[\\s\\+]*(?<value>.*|[0-9]+)', index: -1 },
  { name: "mutation", toFind: "Mutations\\s*:", secondParse: '(?<name>[a-zö\\s]*)[\\s\\+]*(?<value>.*|[0-9]+)', index: -1 },
  { name: "trapping", toFind: "Trappings\\s*:", secondParse: '(?<name>[a-zö0-9\\s\\(\\)\\-]*)[\\s\\+]*(?<value>.*|[0-9]+)', index: -1 },
  { name: "spellpetty", toFind: "Spells\\s*\\(Petty\\s*[a-z\\s]*\\)*:", secondParse: '(?<name>[a-zö\\-\\s]*)', index: -1 },
  { name: "spellarcane", toFind: "Spells\\s*\\(Arcane\\s*[a-z\\s]*\\)*:", secondParse: '(?<name>[a-zö\\-\\s]*)', index: -1 },
  { name: "spelllore", toFind: "Spells\\s*\\(Lore\\s*of\\s*(?<lore>[a-z\\s]*)\\)*:", secondParse: '(?<name>[a-zö\\-\\s]*)', index: -1 }
]
let moneyUS = [ {name:" gold crown", key: "gc"}, {name: " gc", key: "gc"}, 
                {name:" silver shilling", key:"ss"}, {name:" ss", key: "ss"}, {name:"/-", key: "ss"}, {name:" brass penn", key: "bp"}, {name:" bp", key: "bp"} ]
let moneyFR = [ {name:" couronnes d", key: "gc"}, {name: " co", key: "gc"}, 
                {name:" pistoles ", key:"ss"}, {name:" pa", key: "ss"}, {name:"/-", key: "ss"}, {name:" sous de cuivre", key: "bp"}, {name:" sc", key: "bp"} ]
let regSep = XRegExp('\\s*,\\s*', 'gi'); // Term separator, with auto trim
let regLine1 = XRegExp('[\\r\\n\\.]', 'gi'); // Term separator, with auto trim
let regName = XRegExp(name_val, 'gi');

// Used to detect/manage the skill groupings in the statblock
const __SkillGroupsUS = ["Melee", "Lore", "Trade"]
const __SkillGroupsFR = ["Corps à corps", "Domaine", "Métier"]
// Used to auto update the system.tests.value field
const __hasTestValue = {
  "etiquette": true,
  "resistance": true,
  "acute sense": true,
  "strider": true,
  "savant": true,
  "craftsman": true
}

/************************************************************************************/
async function __findItem(itemName, itemType, location = null) {
  let toSearch = itemName.toLowerCase().trim();
  let items = game.items.contents.filter(i => i.type == itemType)

  console.log("Searching for", toSearch, itemType)

  // Search imported items first
  for (let i of items) {
    if (i.name.toLowerCase() == toSearch.toLowerCase() && i.type == itemType)
      return i.toObject();
  }
  let itemList

  // find pack -> search pack -> return entity
  if (location) {
    let pack = game.packs.find(p => {
      location.split(".")[0] == p.metadata.package && location.split(".")[1] == p.metadata.name
    })
    if (pack) {
      await pack.getIndex().then(index => itemList = index);
      let searchResult = itemList.find(t => (t.translated && t.type == itemType && (t.flags?.babele?.originalName.toLowerCase() == toSearch || s.flags?.babele?.originalName.toLowerCase().split("(")[0].trim() == toSearch)) || (t.type == itemType && (t.name.toLowerCase() == toSearch || t.name.toLowerCase().split("(")[0].trim() == toSearch)));
      if (searchResult) {
        let item = await pack.getDocument(searchResult._id)
        return item.toObject()
      }
    }
  }

  // If all else fails, search each pack
  for (let p of game.wfrp4e.tags.getPacksWithTag(itemType)) {
    await p.getIndex().then(index => itemList = index);
    console.log("Seatch", itemType, toSearch, itemList);
    let searchResult = itemList.find(t => (t.translated && t.type == itemType && (t.flags?.babele?.originalName.toLowerCase() == toSearch || t.flags?.babele?.originalName.toLowerCase().split("(")[0].trim() == toSearch)) || (t.type == itemType && (t.name.toLowerCase() == toSearch || t.name.toLowerCase().split("(")[0].trim() == toSearch)));
    if (searchResult) {
      let item = await p.getDocument(searchResult._id)
      return item.toObject()
    }
  }
}


/************************************************************************************/
async function __findSkill(skillName, value = undefined) {
  let toSearch = skillName.toLowerCase().trim();
  let parseStr = '(?<name>[a-z\\s]*)[\\s\\+]*(?<specialized>[a-z\\s\\(\\)]*)';
  let skillSplit = XRegExp.exec(skillName, XRegExp(parseStr, 'gi'));

  // First try world items
  let item
  let worldItem = game.items.contents.filter(i => i.type == "skill" && i.name.toLowerCase() == toSearch)[0];
  if (worldItem) {
    item = worldItem.toObject()
  } else {
    let packs = game.wfrp4e.tags.getPacksWithTag("skill");
    for (let pack of packs) {
      let skillList = await pack.getIndex();
      // Search for specific skill (won't find unlisted specializations)
      let searchResult = skillList.find(s => (s.type == "skill" && s.translated && s.flags?.babele?.originalName.toLowerCase() == toSearch) || (s.type == "skill" && s.name.toLowerCase() == toSearch));
      if (!searchResult) {
        let toSearchClean = toSearch.split("(")[0].trim();
        searchResult = skillList.find(s => (s.type == "skill" && s.translated && s.flags?.babele?.originalName.toLowerCase().split("(")[0].trim() == toSearchClean) ||
          (s.type == "skill" && s.name.toLowerCase().split("(")[0].trim() == toSearchClean));
      }
      if (searchResult) {
        let dbSkill;
        await pack.getDocument(searchResult._id).then(packSkill => dbSkill = packSkill);
        item = dbSkill.toObject();
      }
    }
  }
  if (item) {
    //console.log("Skill name1", skillSplit)
    if (skillSplit.specialized && (item.name.includes('()') || item.name.includes('( )'))) {
      let spec = XRegExp.replace(skillSplit.specialized, "(", "");
      spec = XRegExp.replace(spec, ")", "");
      let skillSplit2 = XRegExp.exec(item.name, XRegExp(parseStr, 'gi'));
      item.name = skillSplit2.name + '(' + game.i18n.localize(spec.trim()) + ')'
      //dbSkill.update( { name: } );
    }
    //game.babele.translate('wfrp4e-core.skills', dbSkill);
    return item
  }
}

/************************************************************************************/
async function __findTalent(talentName) {
  let parseStr = '(?<name>[a-z\\s\\!\\/\']*)[\\s\\+]*(?<specialized>[a-z\\s\\(\\)\'’]*)';
  let talentSplit = XRegExp.exec(talentName, XRegExp(parseStr, 'gi'));
  let toSearch = talentSplit.name.toLowerCase().trim();

  //console.log("Talent name", toSearch, talentName, talentSplit)

  // First try world items
  let item
  let worldItem = game.items.contents.filter(i => i.type == "talent" && i.name.toLowerCase() == toSearch)[0];
  if (worldItem) {
    item = worldItem.toObject()
  } else {
    let packs = game.wfrp4e.tags.getPacksWithTag("talent");
    for (let pack of packs) {
      let talentList = await pack.getIndex();
      // Search for specific talent (won't find unlisted specializations)
      let searchResult = talentList.find(s => (s.type == "talent" && s.translated && s.flags?.babele?.originalName.toLowerCase() == toSearch) || (s.type == "talent" && s.name.toLowerCase() == toSearch));
      if (!searchResult) {
        let toSearchClean = toSearch.split("(")[0].trim();
        searchResult = talentList.find(s => (s.type == "talent" && s.translated && s.flags?.babele?.originalName.toLowerCase().split("(")[0].trim() == toSearchClean) ||
          (s.type == "talent" && s.name.toLowerCase().split("(")[0].trim() == toSearchClean));
      }
      if (searchResult) {
        let dbTalent;
        //console.log("Talent name1", talentSplit)
        await pack.getDocument(searchResult._id).then(packTalent => dbTalent = packTalent);
        item = dbTalent.toObject();
      }
    }
  }
  if (item) {
    if (talentSplit.specialized) {
      let spec = XRegExp.replace(talentSplit.specialized, "(", "");
      spec = XRegExp.replace(spec, ")", "");
      spec = spec.trim()
      let addToName = true
      //console.log("Talent name2", dbTalent.name, spec, game.i18n.localize( spec.trim()) )
      if (toSearch == 'doomed') {
        item.system.description.value += `<br><br><em>${spec}</em>`;
        addToName = false // Very specific case
      }
      if (__hasTestValue[toSearch]) {
        item.system.tests.value = game.i18n.localize(spec);
      }
      item.name = talentSplit.name
      if (addToName) {
        item.name += '(' + game.i18n.localize(spec) + ')'
      }
      item.system.advances.value = 1 // Set 1 advance
    }
    // Specific Talent post-processing
    return item;
  }
}

/************************************************************************************/
function __patchName(name) {
  if (name.toLowerCase == 'magic sense')
    name = 'Magical Sense'
  return name
}

/************************************************************************************/
export default async function statParserFR(statString, type = "npc") {
  let model = foundry.utils.duplicate(game.model.Actor[type]);

  // Patch wront/strange carac value before processing
  statString = statString.replace(/ –/g, " 0")
  let moneys = { gc: 0, ss: 0, bp: 0 }

  let statNameReg = us_carac
  let sectionData = foundry.utils.duplicate(sectionDataUS)
  let skillGrouping = __SkillGroupsUS
  let moneyLang = moneyUS
  // Detect French stat block 
  if (statString.includes('CC') && statString.includes('CT') && statString.includes('FM')) {
    //ui.notifications.warn("Le parsing de stablock en Français n'est pas encore prêt")
    statNameReg = fr_carac
    sectionData = foundry.utils.duplicate(sectionDataFR)
    skillGrouping = __SkillGroupsFR
    moneyLang = moneyFR
  }

  let reg1 = XRegExp(statNameReg, 'gi')
  let res = reg1.test(statString)
  if (res) { //stat block identified go on
    let globalItemList = []

    // Extract the name
    let res1 = XRegExp.exec(statString, reg1)
    let pnjStr = statString.substring(0, res1.index)
    console.log("REG", res1, pnjStr, res)
    let nameRes = XRegExp.exec(pnjStr, regName)
    console.log("REG", nameRes, regName)
    //console.log(nameRes)
    if (nameRes.tiers && nameRes.tiers.length > 0 && hasProperty(model, "details.status.value")) {
      let regTiers = XRegExp("(?<name>[A-Za-z]*)\\s+(?<level>[0-9]*)");
      let resTiers = XRegExp.exec(nameRes.tiers, regTiers);
      console.log(resTiers);
      model.details.status.value = game.i18n.localize(resTiers.name.trim()) + " " + resTiers.level;
    }
    let baseName = nameRes.name.split("\n")
    // Compute the PNJ name
    let pnjName = baseName[0].split("—")[0].split(" ").filter(f => !!f)
    pnjName = pnjName.map(word => {
      if (word == "VON")
        return word.toLowerCase();

      word = word.toLowerCase();
      word = word[0].toUpperCase() + word.substring(1, word.length);
      return word;
    })
    pnjName = pnjName.join(" ")
    if (baseName[1]) {
      let careerName = baseName[1].split(",")[0]
      //console.log("CAREER", careerName)
      let career = await __findItem(careerName, "career")
      if (career) {
        globalItemList.push(career)
      }
    }
    // Get the carac values
    let reg2 = XRegExp(carac_val, 'gi')
    let resCarac = XRegExp.exec(statString, reg2) // resr contains all carac found

    // Setup carac
    console.log("CARAC", resCarac)
    if (resCarac["Agi"]) resCarac["Ag"] = resCarac["Agi"] // Auto patch
    model.details.move.value = Number(resCarac["m"])
    for (let key in model.characteristics) {
      if (resCarac[key] === '-') resCarac[key] = 0
      model.characteristics[key].initial = Number(resCarac[key])
    }
    console.log("CARAC", model.characteristics);

    // Search position of skills/talents/...
    for (let def of sectionData) {
      def.regDef = XRegExp(def.toFind, 'gi');
      let res = XRegExp.exec(statString, def.regDef);
      if (res) {
        def.index = res.index // Position of the string in the whole statblock
        def.lore = res.lore // Extraction of the lore, when present
      } // Get the index in the string
      //console.log("   Parsing", def.name, res);
    }
    // Sort to split position of various substring
    sectionData.sort(function (a, b) { return a.index - b.index; });

    // Then loop again and process each item type
    for (let i = 0; i < sectionData.length; i++) {
      let def = sectionData[i];
      if (def.index > -1) {
        let maxIndex = statString.length
        if (sectionData[i + 1] && sectionData[i + 1].index > -1) {
          maxIndex = sectionData[i + 1].index
        }
        def.substring = statString.substring(def.index, maxIndex)
        def.substring = XRegExp.replace(def.substring, def.regDef, "")
        def.substring = XRegExp.replace(def.substring, regLine1, " ")
        // At this point, def.substring contains the items list as a string

        // Then create a table of it in termList, with specific sub-parsing rules
        let termList = XRegExp.split(def.substring, regSep);
        //console.log("Term list identified", termList)
        let lastSkillName
        for (let name of termList) {
          let itemFound, subres, value;
          if (def.secondParse) {
            subres = XRegExp.exec(name, XRegExp(def.secondParse, 'gi'))
            //console.log("Second pars", def, name, subres)
            name = subres.name.trim().replace("\n", "").replace("\r", "")
            if (subres.value) {
              value = XRegExp.replace(subres.value, "(", "")
              value = XRegExp.replace(value, ")", "")
            } else {
              value = 0
            }
          }
          name = __patchName(name)
          if (def.name == 'trait') {
            try {
              itemFound = await __findItem(name, "trait")
            }
            catch { }
            if (itemFound && value && value.length > 0) {
              let number = value.match(/\d+/g);
              if (number && (name.toLowerCase() == 'ranged' || name.toLowerCase() == 'weapon' || name.toLowerCase() == "bite" || name.toLowerCase() == "tail" ||
                name.toLowerCase() == 'arme' || name.toLowerCase() == "morsure" || name.toLowerCase() == "queue")) {
                //console.log(itemFound)
                number = number[0] // Take first number ....
                itemFound.system.specification.value = Number(number) - ((name.toLowerCase() == 'ranged') ? 0 : Math.floor(Number(model.characteristics.s.initial) / 10))
              } else {
                itemFound.system.specification.value = game.i18n.localize(value)
              }
              //itemFound.name += "(" + value + ")"
            }
            if (!itemFound)
              ui.notifications.error("Trait non trouvé, à ajouter manuellement : " + name, { permanent: true })

          } else if (def.name == 'skill') {
            try {
              itemFound = await __findSkill(name, value);
            }
            catch { }
            let newName = name
            if (!itemFound && lastSkillName) {
              newName = lastSkillName + " (" + name + ")"
              itemFound = await __findSkill(newName, value)
            }
            if (itemFound && subres && value) {
              itemFound.system.advances.value = Number(value) - Number(model.characteristics[itemFound.system.characteristic.value].initial);
            }
            lastSkillName = undefined
            for (let keySkillGroup of skillGrouping) {
              if (newName.includes(keySkillGroup)) { // useful to handle skills grouping
                lastSkillName = keySkillGroup
              }
            }
            if (!itemFound) {
              ui.notifications.error("Compétence non trouvée, à ajouter manuellement : " + name, { permanent: true })
            }
          } else if (def.name == 'talent') {
            try {
              itemFound = await __findTalent(name);
            }
            catch { }
            if (itemFound && subres && value)
              itemFound.system.advances.value = Number(value);
            if (!itemFound) {
              ui.notifications.error("Talent non trouvé, à ajouter manuellement : " + name, { permanent: true })
            }
          
          } else if (def.name == 'trapping') {
            itemFound = await __findItem(name, "trapping");
            if (!itemFound) {
              itemFound = await __findItem(name, "weapon");
            }
            if (!itemFound) {
              itemFound = await __findItem(name, "armor");
            }
            if (!itemFound && name) {
              if (name.toLowerCase().includes("armor") || name.toLowerCase().includes("armure") || name.toLowerCase().includes("armour")) {
                itemFound = new ItemWfrp4e({ img: "systems/wfrp4e/icons/blank.png", name: name, type: "armour", system: game.model.Item.armour })
              } else if (name.toLowerCase().includes("weapon") || name.toLowerCase().includes("arme")) {
                itemFound = new ItemWfrp4e({ img: "systems/wfrp4e/icons/blank.png", name: name, type: "weapon", system: game.model.Item.weapon })
              } else {
                itemFound = new ItemWfrp4e({ img: "systems/wfrp4e/icons/blank.png", name: name, type: "trapping", system: game.model.Item.trapping })
                itemFound.system.trappingType.value = "misc"
                if (name.toLowerCase().includes("cloth")) {
                  itemFound.system.trappingType.value = "clothingAccessories"
                }
              }
              itemFound = itemFound.toObject()
            }
            // Searching money stuff
            for (let mondeyDef of moneyLang) {
              if (name.toLowerCase().includes(mondeyDef.name)) {
                let regMoney = XRegExp("(\\d+)\\s*" + mondeyDef.name.trim(), 'gi')
                let moneyParsed = XRegExp.exec(name.toLowerCase(), regMoney)
                console.log("Parsing money", name, moneyParsed)
                moneys[mondeyDef.key] += (moneyParsed && moneyParsed[1]) ? Number(moneyParsed[1]) : 0
              }
            }
          } else if (def.name.toLowerCase().includes('spell')) {
            console.log("Found spells section!!!!", name, def, def.lore || "NO LORE")
            // Lore management, firs pass
            if (def.lore) {
              let newName = name + " (" + def.lore + ")"
              itemFound = await __findItem(newName, "spell");
              //console.log("Trying to find ", newName, itemFound)
            }
            if (!itemFound) { // If not found with Lore, try without the lore
              itemFound = await __findItem(name, "spell");
            }
            if (!itemFound && name) { // Auto-create the spell name
              itemFound = new ItemWfrp4e({ img: "systems/wfrp4e/icons/blank.png", name: name + "(To be checked/completed)", type: "spell", system: game.model.Item.spell })
              itemFound = itemFound.toObject();
            }
          } else if (def.name == 'mutation') {
            try {
              itemFound = await __findItem(name, "mutation");
            }
            catch { }
          }
          if (itemFound)
            globalItemList.push(itemFound);
        }
      }
    }
    let moneyItems = await game.wfrp4e.utility.allMoneyItems() || [];
    moneyItems = moneyItems.sort((a, b) => (a.system.coinValue.value > b.system.coinValue.value) ? -1 : 1);
    for (let m of moneyItems) {
      m.system.quantity.value = 0
      if (m.system.coinValue.value == 1) {
        m.system.quantity.value += moneys.bp
      }
      if (m.system.coinValue.value == 240) {
        m.system.quantity.value += moneys.gc
      }
      if (m.system.coinValue.value == 12) {
        m.system.quantity.value += moneys.ss
      }
    }
    globalItemList = globalItemList.concat(moneyItems);
    //DEBUG : console.log("My liste :", moneyItems, moneys);
    let name = pnjName;

    let effects = globalItemList.reduce((total, globItem) => total.concat(globItem.effects), [])
    effects = effects.filter(e => !!e)
    effects = effects.filter(e => e.transfer)
    for (let e of effects) {
      for (let c of e.changes) {
        // Charac management stuff
        if (c.key?.includes("characteristics")) {
          let cKey = c.key.split(".")[2]
          model.characteristics[cKey].initial -= Number(c.value)
        }
        // Move management
        if (c.key?.includes("move")) {
          model.details.move.value -= Number(c.value)
        }
      }
    }
    //DEBUG : console.log("EFFECTS", effects)

    return { name, type, system: model, items: globalItemList, effects }
  }

  // If the carac string has not been found
  ui.notifications.error("Impossible de convertir ces statitiques, les caractéristiques n'ont pas été trouvées", { permanent: true })
}

