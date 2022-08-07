let sliderArticlesWrapper = document.getElementById("articles-slider__articles");
let sliderArticles = document.getElementsByClassName("articles-slider__article");

let sliderArticlesIndex = 0;
let sliderArticlesPrevScrollTop = sliderArticlesWrapper.scrollTop;

function scrollHandler(event) {
	if(sliderArticlesPrevScrollTop != sliderArticlesWrapper.scrollTop) {
		if (event.deltaY < 0) { // if scroll to up
			sliderArticlesIndex = sliderArticlesIndex === 0 ? (sliderArticles.length) : (sliderArticlesIndex - 1);
			sliderArticles[sliderArticlesIndex].scrollIntoView({block: "start"});
		} else if (event.deltaY > 0) { // if scroll to down
			sliderArticlesIndex = sliderArticlesIndex === (sliderArticles.length) ? 0 : (sliderArticlesIndex + 1);
			sliderArticles[sliderArticlesIndex].scrollIntoView({block: "end"});
		} else { // other variants
			sliderArticlesIndex = sliderArticlesIndex === 0 ? (sliderArticles.length) : (sliderArticlesIndex - 1);
			sliderArticles[sliderArticlesIndex].scrollIntoView({block: "start"});
		}
	}
	sliderArticlesPrevScrollTop = sliderArticlesWrapper.scrollTop;
};

sliderArticlesWrapper.addEventListener("wheel", scrollHandler);