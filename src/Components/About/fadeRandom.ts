const _ = require("lodash");

const fadeRandom = () => {
	const icons = document.querySelectorAll(".figure");
	const maxRange = (icons.length + 1) * 280;
	let nums = _.range(500, maxRange, 280);

	icons.forEach((icon) => {
		nums = _.shuffle(nums);
		const randTimeout = nums.pop();

		setTimeout(() => {
			icon.classList.add("figure-fade-in");
		}, randTimeout);
	});
};

export default fadeRandom;
