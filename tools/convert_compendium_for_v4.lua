package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"
local lfs = require"lfs"

local mypath = '../compendium/'

local function convert( jsondb) 

  jsondb = jsondb:gsub("test.result", "test.result.outcome")
  jsondb = jsondb:gsub("result.result", "result.outcome")
  jsondb = jsondb:gsub("result.extra", "result")
  jsondb = jsondb:gsub("actor.data.AP", "actor.status.armour")
  jsondb = jsondb:gsub("item.data.APdamage", "item.getFlag('wfrp4e', 'APdamage')")
  jsondb = jsondb:gsub("data.data.", "")
  jsondb = jsondb:gsub("item.data", "item")
  jsondb = jsondb:gsub("weapon.data", "weapon")
  jsondb = jsondb:gsub("spell.data", "spell")
  jsondb = jsondb:gsub("prayer.data", "prayer")
  jsondb = jsondb:gsub("trait.data", "trait")
  jsondb = jsondb:gsub("testData.extra.characteristic", "testData.item")
  jsondb = jsondb:gsub("testData.extra.skill", "testData.item")
  jsondb = jsondb:gsub("testData.extra.weapon", "testData.item")
  jsondb = jsondb:gsub("testData.extra.spell", "testData.item")
  jsondb = jsondb:gsub("testData.extra.prayer", "testData.item")
  jsondb = jsondb:gsub("testData.extra.trait", "testData.item")
  jsondb = jsondb:gsub("testData.roll", "test.result.roll")
  jsondb = jsondb:gsub("testData", "test")
  jsondb = jsondb:gsub("item._id", "item.id")
  jsondb = jsondb:gsub("result.ammo", "test.ammo")
  jsondb = jsondb:gsub("args.result", "args.test.result")
  jsondb = jsondb:gsub(".owner", ".isOwner")
  jsondb = jsondb:gsub("spell.overcasts", "result.overcast")
  jsondb = jsondb:gsub("opposeResult", "opposedTest.result")
  jsondb = jsondb:gsub("opposeData.hitloc", "opposeData.result.hitloc")
  jsondb = jsondb:gsub("opposeData", "opposedTest")
  jsondb = jsondb:gsub("extra.critical", "critical")
  jsondb = jsondb:gsub("attackerTestResult.weapon", "attackerTest.item")
  jsondb = jsondb:gsub("defenderTestResult.weapon", "defenderTest.item")
  jsondb = jsondb:gsub("attackerTestResult.trait", "attackerTest.item")
  jsondb = jsondb:gsub("defenderTestResult.trait", "defenderTest.item")
  jsondb = jsondb:gsub("attackerTestResult.spell", "attackerTest.item")
  jsondb = jsondb:gsub("defenderTestResult.spell", "defenderTest.item")
  jsondb = jsondb:gsub("attackerTestResult.prayer", "attackerTest.item")
  jsondb = jsondb:gsub("defenderTestResult.prayer", "defenderTest.item")
  jsondb = jsondb:gsub("attackerTestResult.skill", "attackerTest.item")
  jsondb = jsondb:gsub("defenderTestResult.skill", "defenderTest.item")
  jsondb = jsondb:gsub("attackerTestResult", "attackerTest.result")
  jsondb = jsondb:gsub("defenderTestResult", "defenderTest.result")
  jsondb = jsondb:gsub("actor.data.characteristics", "actor.characteristics")
  jsondb = jsondb:gsub("test.result.outcome.result", "test.result.outcome")
  jsondb = jsondb:gsub("test.item.characteristic.value", "test.item.characteristic.key")
  jsondb = jsondb:gsub("test.extra.other", "test.result.other")

  return jsondb
end

local function parse_folder( mypath )
  --print("*** ENTERING", mypath)
  for file in lfs.dir(mypath) do
    --print(file)
    if file == '.' or file == '..'  then 
    
    else 
      local fp = io.open(mypath .."/".. file, "r+")
      local jsondb = fp:read("*a")
      fp:close()
      
      jsondb = convert( jsondb)
    
      fp = io.open(mypath .."/".. file, "w+")
      fp:write(jsondb)
      fp:close()

    end
  end
end

--parse_folder( mypath )
local fp = io.open("../modules/config-patch.js", "r+")
local jsondb = fp:read("*a")
fp:close()

jsondb = convert(jsondb)

fp = io.open("../modules/config-patch.js", "w+")
fp:write(jsondb)
fp:close()
