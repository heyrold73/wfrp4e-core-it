package.path = package.path .. ";luajson/?.lua"
local JSON = require"json"
local lfs = require"lfs"

local pathTab = {
  "../../WFRP4e-FoundryVTT/", 
  "/home/morr/.local/share/FoundryVTT/Data/modules/wfrp4e-core",
  "/home/morr/.local/share/FoundryVTT/Data/modules/wfrp4e-eis",
  "/home/morr/.local/share/FoundryVTT/Data/modules/wfrp4e-rnhd",
  "/home/morr/.local/share/FoundryVTT/Data/modules/wfrp4e-dotr"
}

local frjsonf = "../fr.json"
fp = io.open(frjsonf, "r")
local frtags = JSON.decode( fp:read("*a") )
fp:close()

local function parse_folder( mypath )
  --print("*** ENTERING", mypath)
  for file in lfs.dir(mypath) do
    --print(file)
    if file == '.' or file == '..'  then 
    else 
      if lfs.attributes(mypath.."/"..file).mode == "directory" then
         parse_folder(mypath .."/".. file)
      else 
        local fp = io.open(mypath .."/".. file, "r+")
        if fp then
          local html = fp:read("*a");
          -- Template case
          for match in html:gmatch( "{{localize \"([%w%.]*)\"") do
            --print(match)
            if not frtags[match] then
              print("MATCH not found !!!", match,mypath .."/"..  file)
            end
          end
          -- Template case
          for match in html:gmatch( "game.i18n.localize%(%s*\"([%w%.%d%-]*)\"") do -- .localize(%s*"
            --print(match)
            if not frtags[match] then
              print("MATCH not found !!!", match, mypath .."/".. file)
            end
          end
          fp:close()
        end
      end
    end
  end
end

for _, path in pairs(pathTab) do
  parse_folder( path )
end
