return args.skill?.name.includes("Corps à corps (Base)") || (args.type == "weapon" && args.item?.system.weaponGroup.value == "basic");