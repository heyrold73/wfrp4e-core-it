
package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"

local oldf = "../compendium/wfrp4e-core.careers.json"
local newf = "../compendium/wfrp4e-core.career-descriptions.json"

local cf = io.open(oldf, "r")
local strjson = cf:read("*a")
cf:close()
local careers = JSON.decode(strjson)

local cdf = io.open(newf, "r")
strjson = cdf:read("*a")
cdf:close()
local careerDescr = JSON.decode(strjson)

for _, careerD in pairs(careerDescr.entries) do 
  for _, career in pairs(careers.entries) do 
    if careerD.id == career.id then 
      careerD.name = career.name
    end
  end
end

local jsonout = JSON.encode( careerDescr ) 
local fout = io.open("output.json", "w+")
fout:write( jsonout )
fout:close()
