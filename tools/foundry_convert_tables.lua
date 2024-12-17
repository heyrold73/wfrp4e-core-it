
package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"

local path_in  = "/home/morr/Téléchargements/fvtt-RollTable-you-find-yourself-in-a-tavern-what-happens-next_.json"
local f1 = io.open(path_in, "r")
local strjson = f1:read("*a")
f1:close()
local tabData = JSON.decode(strjson)

local results = {}
for idx, res in pairs(tabData.results) do
  results[res.range[1].."-"..res.range[2]] = res.text 
end

local entries = JSON.encode(results)
print()
print()
print(entries)