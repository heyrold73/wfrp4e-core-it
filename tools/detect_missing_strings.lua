package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"

--local enjsonf = "/home/morr/foundry/foundrydata-dev/Data/modules/wfrp4e-dotr/lang/en.json"
--local enjsonf = "/home/morr/foundry/foundrydata-dev/Data/modules/wfrp4e-core/lang/en.json"
--local enjsonf = "/home/morr/foundry/foundrydata-dev/Data/modules/wfrp4e-middenheim/lang/en.json"
--local enjsonf = "/home/morr/foundry/foundrydata-dev/Data/modules/wfrp4e-eis/lang/en.json"
--local enjsonf = "/home/morr/foundry/foundrydata-dev/Data/modules/wfrp4e-rnhd/lang/en.json"
--local enjsonf = "/home/morr/foundry/foundrydata-dev/Data/modules/wfrp4e-up-in-arms/lang/en.json"
local enjsonf = "../../WFRP4e-FoundryVTT/static/lang/en.json"
local frjsonf = "../fr.json"

local fp = io.open(enjsonf, "r")
local entags = JSON.decode( fp:read("*a") )
fp:close()

fp = io.open(frjsonf, "r")
local frtags = JSON.decode( fp:read("*a") )
fp:close()

local todisplay  = {}
for tag, value in pairs(entags) do
  if not frtags[tag] then 
    todisplay[#todisplay+1] = { tag=tag, value=value }
  end
end

table.sort(todisplay, function (a, b) 
    return a.tag < b.tag 
  end
)

for _, tagDef in pairs(todisplay) do
  if type(tagDef.value) == "table" then
    print('"'.. tagDef.tag ..'":{')
    for k, v in pairs(tagDef.value) do
      if type(v) == "table" then
        print('"'.. k ..'":{')
        for kk, vv in pairs(v) do
          print('"'.. kk ..'":"'.. vv..'",')
        end
        print('},')
      else
        print('"'.. k ..'":"'.. v..'",')
      end
    end
    print('},')
  else
    print('"'.. tagDef.tag ..'":"'.. tagDef.value..'",')
  end
end


