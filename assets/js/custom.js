/*toggle open class on main navigation*/ 
function toggleHamBurger() {
    const menuWrap = document.getElementById("menuWrap");
    const hamBurger = document.getElementById("hamBurger");
    const html = document.getElementsByTagName("html")[0];
    const body = document.body;
    menuWrap.classList.toggle("open");
    hamBurger.classList.toggle("open");
    html.classList.toggle("overflow-hidden");
    body.classList.toggle("overflow-hidden");
    
}
/*toggle open class on main navigation*/ 

/*accordion*/

const accordions = document.querySelectorAll(".quick-links");

const openAccordion = (accordion) => {
	const content = accordion.querySelector(".quick-links ul");
	accordion.classList.add("accordion-active");
	content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector(".quick-links ul");
	accordion.classList.remove("accordion-active");
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector(".quick-links h4");
	const content = accordion.querySelector(".quick-links ul");

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});