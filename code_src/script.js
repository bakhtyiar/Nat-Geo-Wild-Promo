let sliderArticlesWrapper = document.getElementById("articles-slider__articles");
let sliderArticles = document.getElementsByClassName("articles-slider__article");
let sliderArticlesAmount = document.querySelectorAll(".articles-slider__article").length;
let sliderArticlesNumbers = document.querySelectorAll(".numbers__number");

sliderArticlesNumbers[1].innerHTML = `0${sliderArticlesAmount}`;

let sliderArticlesIndex = 0;

function scrollHandler(event) {

	if (sliderArticles.length < 2)
		return ; //stop function if not enough articles to scroll

	if (event.deltaY < 0) { // if scroll to up
		if (sliderArticlesIndex === 0) {
			sliderArticlesIndex = (sliderArticlesAmount - 1);
			sliderArticles[sliderArticlesIndex].scrollIntoView({block: "start"});
		} else {
			sliderArticlesIndex = (sliderArticlesIndex - 1);
			sliderArticles[sliderArticlesIndex].scrollIntoView({block: "nearest"});
		}
	} else { // if scroll to down
		if (sliderArticlesIndex === (sliderArticlesAmount - 1)) {
			sliderArticlesIndex = 0;
			sliderArticles[sliderArticlesIndex].scrollIntoView({block: "end"});
		} else {
			sliderArticlesIndex = (sliderArticlesIndex + 1);
			sliderArticles[sliderArticlesIndex].scrollIntoView({block: "nearest"});
		}
	}
	sliderArticlesNumbers[0].innerHTML = `0${sliderArticlesIndex + 1}`;
};

sliderArticlesWrapper.addEventListener("wheel", scrollHandler);