
package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"

local translatedf  = "../compendium/wfrp4e-unofficial-grimoire.ug-spells.json"
local fullspellf   = "wfrp4e-unofficial-grimoire.ug-spells.json"

local translatedp = io.open(translatedf, "r")
local strjson = translatedp:read("*a")
local translated = JSON.decode(strjson)
translatedp:close()

local fullspellp = io.open(fullspellf)
strjson = fullspellp:read("*a")
local fullspell = JSON.decode(strjson)
fullspellp:close()

local entries = {}
for _, spell in pairs(fullspell.entries) do
  local newentry = { id = spell.id, name = spell.name, description = spell.description }
  for _, tspell in pairs(translated.entries) do 
    if tspell.id == spell.id then 
      newentry.name = tspell.name 
      newentry.description = tspell.description 
    end 
  end 
  entries[#entries+1] = newentry
end

local jsonout = JSON.encode( entries ) 
local fout = io.open("entries.json", "w+")
fout:write( jsonout )
fout:close()
