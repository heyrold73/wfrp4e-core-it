
package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"

--local talent_db  = "../../WFRP4e-FoundryVTT/packs/talents.db"
local jsonfile = "../compendium/wfrp4e-core.items.json"

local jsonf = io.open(jsonfile)
local strjson = jsonf:read("*a")
jsonf:close()
local datajson = JSON.decode(strjson)

for k, v in pairs(datajson.entries) do
  if v.effects then
    v.effects = nil
  end
end

local jsonout = JSON.encode( datajson ) 
local fout = io.open("../compendium/wfrp4e-core.items.json.CLEANUP", "w+")
fout:write( jsonout )
fout:close()
