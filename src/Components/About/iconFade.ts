// const _ = require("lodash");

const addEffect = (name: string, timeout: number) => {
	setTimeout(() => {
		document.querySelector(`.${name}`)?.classList.add("figure-fade-in")
	}, timeout)
};

const iconFade = () => {
	// const numsNormal = _.range(500, 10 * 230 + 500, 230);
	const numsCircular = [0, 9, 3, 6, 7, 2, 8, 1, 5, 4]
	const icons: string[] = []
	const all = document.querySelectorAll(".figure")
	all.forEach((icon) => {
		icons.push(icon.classList[0])
	})

	// circular flow
	let timeout = 500
	for (let n of numsCircular) {
		addEffect(icons[n], timeout)
		timeout += 230
	}

	// normal flow
	// for (let i = 0; i < 10; i++) {
	// 	addEffect(icons[i], nums[i])
	// }
};

export default iconFade;
