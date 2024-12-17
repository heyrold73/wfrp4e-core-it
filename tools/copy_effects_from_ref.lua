local lfs = require"lfs"

local src = "../reference_scripts/"
local dst = "../scripts/"

for file in lfs.dir(src) do
  if file == '.' or file == '..'  then 
  else 
    local fp = io.open(dst..file, "r+")
    if not fp then
      print("File not found", dst..file)
      os.execute("cp "..src..file.." "..dst..file)
    else
      fp:close()
    end
  end
end
