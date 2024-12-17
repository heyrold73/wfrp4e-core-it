
package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"

--local talent_db  = "../../WFRP4e-FoundryVTT/packs/talents.db"
local dbfile  ='/home/morr/.local/share/FoundryVTT/Data/modules/wfrp4e-core/packs/criticals.db'
local jsonfile = "../compendium/wfrp4e-core.criticals.json"

local dbf = io.open(dbfile)

local jsonf = io.open(jsonfile)
local strjson = jsonf:read("*a")
jsonf:close()
local datajson = JSON.decode(strjson)

local function trim1(s)
   return (s:gsub("^%s*(.-)%s*$", "%1"))
end

local line = dbf:read()
while line do 
  --print(line)
  local itemdb = JSON.decode( line )
  --print("Testing : ", db_talent.name )
  for _, data in pairs(datajson.entries) do
    if data.id == itemdb.name then
      data.effects = itemdb.effects
      for _, effect in pairs(data.effects) do
        if effect.label == itemdb.name then
          effect.label = data.name
        end
      end
    end
  end

  line = dbf:read()
end
dbf:close()


local jsonout = JSON.encode( datajson ) 
local fout = io.open("witheffects.json", "w+")
fout:write( jsonout )
fout:close()
