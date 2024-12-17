local lfs = require"lfs"

local src = "../reference_scripts/"
local dst = "../scripts/"

for file in lfs.dir(src) do
  if file == '.' or file == '..'  then 
  else 
    local fp1 = io.open(dst..file, "r+")
    local fp2 = io.open(src..file, "r+")
    if fp1 and fp2 then
      -- Compare files 
      local content1 = fp1:read("*all")
      local content2 = fp2:read("*all")
      if content1 == content2 then
        print("Identical files: "..file)
      end
      fp1:close()
      fp2:close()
    else
      print("Error: Could not open file: "..file)
    end
  end
end
