package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"

--local enjsonf = "/home/morr/foundry/foundrydata-dev/Data/modules/wfrp4e-dotr/lang/en.json"
local careerv10 = "careerv10.json"
local goodC = "../compendium/wfrp4e-core.items.json"

local fp = io.open(careerv10, "r")
local c10 = JSON.decode( fp:read("*a") )
fp:close()

local fp = io.open(goodC, "r")
local good10 = JSON.decode( fp:read("*a") )
fp:close()


for k1, v1 in pairs( good10.entries) do 
  for k2, v2 in pairs(c10.entries) do 
    if v1.id == v2.id then              
      local careerGroup = string.match(v2.description, "{([%w%s]*)}")
      local careerFR
      for k3, v3 in pairs( good10.entries) do 
        if v3.id == careerGroup then 
          careerFR = v3.name
        end
      end
      if ( careerGroup == 'Slayer' ) then
        careerFR = "Tueur"
      end
      if careerGroup and careerFR then 
        local careerGroupFR = string.gsub(v2.description, careerGroup, careerFR)
        v1.description = careerGroupFR
      else 
        print("Error", v2.description)
      end
      --print("Career group", careerGroupFR, careerGroup)
    end
  end
end

local fp = io.open(goodC, "w+")
fp:write( JSON.encode(good10))
fp:close()