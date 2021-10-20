const fadeRandom = () => {
	const icons = document.querySelectorAll(".figure");
	icons.forEach((icon) => {
		setTimeout(() => {
			icon.classList.add("figure-random");
		}, Math.floor(Math.random() * 2000 + 1000));
	});
};

export default fadeRandom;
