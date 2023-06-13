let customSlideItem = document.querySelectorAll(
	".custom-slider .custom-slider-item"
);
let itemSlideBtn = document.querySelectorAll(
	".custom-slider .custom-slider-item--nav .custom-nav-btn"
);
let currentSlide = 1;

// Slider click slide
const customManualNav = function (item) {
	customSlideItem.forEach((slide) => {
		slide.classList.remove("custom-slide-active");

		itemSlideBtn.forEach((btn) => {
			btn.classList.remove("custom-slide-active");
		});
	});

	customSlideItem[item].classList.add("custom-slide-active");
	itemSlideBtn[item].classList.add("custom-slide-active");
};

itemSlideBtn.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		customManualNav(i);
		currentSlide = i;
	});
});

// auto Slider
let customAutoSlide = function (activeClass) {
	let active = document.getElementsByClassName("custom-slide-active");
	let iteration = 1;
	let activeAutoSlide = () => {
		setTimeout(function () {
			[...active].forEach((itemSlide) => {
				itemSlide.classList.remove("custom-slide-active");
			});

			customSlideItem[iteration].classList.add("custom-slide-active");
			itemSlideBtn[iteration].classList.add("custom-slide-active");
			iteration++;

			if (customSlideItem.length == iteration) {
				iteration = 0;
			}
			if (iteration >= customSlideItem.length) {
				return;
			}
			activeAutoSlide();
		}, 8000);
	};
	activeAutoSlide();
};
customAutoSlide();
