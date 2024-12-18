let useWard = await Dialog.wait({
	title : this.effect.name,
	content : `<p>Utiliser Ward fourni par <strong>${this.effect.name}</strong>?`,
	buttons : {
		yes : {
			label : "Yes",
			callback: () => {
				return true;
			}
		},
		no : {
			label: "No",
			callback: () => {
				return false;
			}
		}
	}
})

if (useWard)
	args.ward = 9;