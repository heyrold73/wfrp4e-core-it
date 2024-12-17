
package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"

--local talent_db  = "../../WFRP4e-FoundryVTT/packs/talents.db"
local traitdb  ='/home/morr/.local/share/FoundryVTT/Data/modules/wfrp4e-core/packs/talents.db'
local f1 = io.open(traitdb)

local translatedf = "../compendium/wfrp4e-core.talents.json"
local f2 = io.open(translatedf)
local content = f2:read("*a")
local dbData = JSON.decode(content)
f2:close()

local function trim1(s)
   return (s:gsub("^%s*(.-)%s*$", "%1"))
end

local line = f1:read()
while line do 
  --print(line)
  local trait = JSON.decode( line )
  if trait.effects then
    local comp    
    for _, item in pairs(dbData.entries) do 
      if string.lower(item.id) == string.lower(trait.name)then 
        comp = item
        print("====================> Found", trait.name, item.name)
      end
    end
    if #comp.effects == 0 and #trait.effects > 0 then 
      print( "MISSING EFFECTS", trait.name )
      --print( JSON.encode (trait.effects) )
        --print ()
    end
  end

  line = f1:read()
end
f1:close()

