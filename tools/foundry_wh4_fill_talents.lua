
package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"

--local talent_db  = "../../WFRP4e-FoundryVTT/packs/talents.db"
local talent_db  ='/home/morr/.local/share/FoundryVTT/Data/modules/wfrp4e-core/packs/talents.db'
local talent = "../compendium/wfrp4e-core.talents.json"

local f1 = io.open(talent_db)

local f2 = io.open(talent)
local strjson = f2:read("*a")
f2:close()
local talents = JSON.decode(strjson)

local function trim1(s)
   return (s:gsub("^%s*(.-)%s*$", "%1"))
end

local line = f1:read()
while line do 
  --print(line)
  local db_talent = JSON.decode( line )
  --print("Testing : ", db_talent.name )
  for _, mytalent in pairs(talents.entries) do
    if mytalent.id == db_talent.name then
      mytalent.effects = {}
      for i, effect in pairs(db_talent.effects) do
        if effect.label == db_talent.name then 
          print("Found effect at : ", db_talent.name, mytalent.name, effect.label )
          mytalent.effects['label'..i-1] = mytalent.name
        elseif effect.label == 'Opposed Bonus' then
          print("Test opposé !", effect.label)
          mytalent.effects['label'..i-1] = 'Bonus au Tests Opposés'
        else 
          mytalent.effects['label'..i-1] = effect.name
          print("Unknow effect : ", effect.label)
        end
      end
    end
  end

  line = f1:read()
end
f1:close()


local jsonout = JSON.encode( talents ) 
local fout = io.open("talents.json", "w+")
fout:write( jsonout )
fout:close()
