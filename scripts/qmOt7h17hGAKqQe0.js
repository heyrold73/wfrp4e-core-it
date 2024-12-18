
let choice = await Dialog.wait({
    title: this.effect.name,
    content: `<p><strong>${this.effect.name}</strong>: Est-ce que l'attaque magique ou à distance provient de l'extérieur du Dome?</p>`,
    buttons: {
        yes: {
            label: "Oui",
            callback: () => {
                return true;
            }
        },
        no: {
            label: "Non",
            callback: () => {
                return false;
            }
        }
    }
})

if (choice)
{
	args.ward = 6;
}