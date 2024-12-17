local JSONDEC = [[ 
  [
  {
    "Plante": "Pomme",
    "Rareté": "Commun",
    "Milieu": "Terre agricole",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Forêt",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "Haricot noir",
    "Rareté": "Commun",
    "Milieu": "Prairie",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "Coriandre",
    "Rareté": "Rare",
    "Milieu": "Prairie",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "Vêture de Renard",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "Iris",
    "Rareté": "Commun",
    "Milieu": "Marais",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Lande",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "Laurier",
    "Rareté": "Limité",
    "Milieu": "Forêt",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "Roquette",
    "Rareté": "Commun",
    "Milieu": "Tourbière",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "Romarin",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Bête (Ghur)"
  },
  {
    "Plante": "Câpre",
    "Rareté": "Commun",
    "Milieu": "Marais",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Lande",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "Ciboulette",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "prairie",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "Cigüe aquatique",
    "Rareté": "Limité",
    "Milieu": "Aquatique",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Marais",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "Primevère officinale",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "Belladone",
    "Rareté": "Limité",
    "Milieu": "Forêt",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "Armoise",
    "Rareté": "Rare",
    "Milieu": "Obscurité",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "Rose",
    "Rareté": "Limité",
    "Milieu": "Forêt",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "Rose de Morr",
    "Rareté": "Rare",
    "Milieu": "Jardin de Morr",
    "Affinité": "Mort (Shyish)"
  },
  {
    "Plante": "Aulne",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "Orge",
    "Rareté": "Commun",
    "Milieu": "Terre agricole",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "Consoude officinale",
    "Rareté": "Rare",
    "Milieu": "Désert",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Lande",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "Houblon",
    "Rareté": "Commun",
    "Milieu": "Terre agricole",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Forêt",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "Lys",
    "Rareté": "Limité",
    "Milieu": "Aquatique",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Marais",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "Livège",
    "Rareté": "Commun",
    "Milieu": "Prairie",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "Mauve",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "Valériane officinale",
    "Rareté": "Limité",
    "Milieu": "Lande",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Montagnes",
    "Affinité": "Feu (Aqshy)"
  },
  {
    "Plante": "Saxifraga",
    "Rareté": "Limité",
    "Milieu": "Aquatique",
    "Affinité": "Cieux (Azur)"
  },
  {
    "Plante": "Chervile",
    "Rareté": "Rare",
    "Milieu": "Désert",
    "Affinité": "Cieux (Azur)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Lande",
    "Affinité": "Cieux (Azur)"
  },
  {
    "Plante": "Aneth",
    "Rareté": "Commun",
    "Milieu": "Prairie",
    "Affinité": "Cieux (Azur)"
  },
  {
    "Plante": "Scille",
    "Rareté": "Commun",
    "Milieu": "Montagnes",
    "Affinité": "Cieux (Azur)"
  },
  {
    "Plante": "Marjolaine",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Cieux (Azur)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Cieux (Azur)"
  },
  {
    "Plante": "Basilic",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Montagnes",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "Camomille",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "Cyprès",
    "Rareté": "Commun",
    "Milieu": "Collines",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "Gingembre",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "Menthe",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Collines",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "Chêne",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "Safran",
    "Rareté": "Exotique",
    "Milieu": "Prairie",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "Achillée millefeuille",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Lande",
    "Affinité": "Métal (Chamon)"
  },
  {
    "Plante": "Anis",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Arnica",
    "Rareté": "Commun",
    "Milieu": "Prairie",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Centaurium",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Stellaire intermédiaire",
    "Rareté": "Commun",
    "Milieu": "Marais",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Tussilage",
    "Rareté": "Commun",
    "Milieu": "Prairie",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Lande",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Molène Thapsus",
    "Rareté": "Commun",
    "Milieu": "Montagnes",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Noisetier",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Millepertuis perforé",
    "Rareté": "Commun",
    "Milieu": "Marais",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Obscurité",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Souci officinal",
    "Rareté": "Commun",
    "Milieu": "Prairie",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Ortie",
    "Rareté": "Commun",
    "Milieu": "Tous",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Coquelicot",
    "Rareté": "Commun",
    "Milieu": "Prairie",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Sauge",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Oseille",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Thym",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Sève d'arbre",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Vie (Ghyran)"
  },
  {
    "Plante": "Angélique officinale",
    "Rareté": "Limité",
    "Milieu": "Herbacée",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "Pétasite",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "Aunée",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "Fenouil",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "Ail",
    "Rareté": "Limité",
    "Milieu": "Forêt",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "Genevrier",
    "Rareté": "Commun",
    "Milieu": "Prairie",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Lande",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "Saponaire officinal",
    "Rareté": "Commun",
    "Milieu": "Marais",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "Aurone",
    "Rareté": "Rare",
    "Milieu": "Forêt",
    "Affinité": "Lumière (Hysh)"
  },
  {
    "Plante": "Chardon béni",
    "Rareté": "Rare",
    "Milieu": "prairie",
    "Affinité": "Ombre (Uglu)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Lande",
    "Affinité": "Ombre (Uglu)"
  },
  {
    "Plante": "Digitale pourpre",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Ombre (Uglu)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Ombre (Uglu)"
  },
  {
    "Plante": "Jusquiame",
    "Rareté": "Rare",
    "Milieu": "Forêt",
    "Affinité": "Ombre (Uglu)"
  },
  {
    "Plante": "Mélisse",
    "Rareté": "Exotique",
    "Milieu": "Montagnes",
    "Affinité": "Ombre (Uglu)"
  },
  {
    "Plante": "Noix de Muscade",
    "Rareté": "Rare",
    "Milieu": "Désert",
    "Affinité": "Ombre (Uglu)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Prairie",
    "Affinité": "Ombre (Uglu)"
  },
  {
    "Plante": "",
    "Rareté": "",
    "Milieu": "Lande",
    "Affinité": "Ombre (Uglu)"
  },
  {
    "Plante": "Saule Blanc",
    "Rareté": "Commun",
    "Milieu": "Forêt",
    "Affinité": "Ombre (Uglu)"
  }
]
]]

package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"
local herbOut = {}

local herbsIn = JSON.decode(JSONDEC)

for idx, herb in pairs(herbsIn) do
  local rec = { type = "plante" }
  if herb.Plante == "" then 
    local rec = herbOut[#herbOut]
    rec.milieu[#rec.milieu+1] = string.lower(herb.Milieu)
  else 
    for key, data in pairs(herb) do
      local key = string.lower(key)
      if key == "plante" then 
        rec.name = data
      elseif key == "affinité" then 
        rec.affinite = data
      elseif  key == "rareté" then 
        rec.rarete = data
      else
        if key == "milieu" then 
          if not rec[key] then
            rec[key] = {}
          end 
          rec[key][#rec[key]+1] = string.lower(data)
        else 
          rec[key] = string.lower(data)
        end
      end
      herbOut[#herbOut+1] = rec
    end
  end

end

local JSONO = JSON.encode( herbOut)
local fp = io.open("herbs.json", "w+")
fp:write(JSONO)
fp:close()
