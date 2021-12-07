// const _ = require("lodash");

const addEffect = (name: string, timeout: number) => {
	setTimeout(() => {
		document.querySelector(`.${name}`)?.classList.add("figure-fade-in");
	}, timeout);
};

// random shuffle
// const shuffle = (array: number[]) => {
// 	let i = array.length;
// 	let j = 0;
// 	let temp = 0;

// 	while (i--) {
// 		j = _.random(11);

// 		// swap randomly chosen num with current num
// 		temp = array[i];
// 		array[i] = array[j];
// 		array[j] = temp;
// 	}

// 	return array;
// };

// row start and end
const icons: string[] = [];

const iconFade = (nums: number[]) => {
	// const randNums = shuffle(_.range(12));
	const all = document.querySelectorAll(".figure");
	all.forEach(icon => {
		icons.push(icon.classList[0]);
	});

	let timeout = 500;
	for (let n of nums) {
		addEffect(icons[n], timeout);
		timeout += 210;
	}
};

export default iconFade;
