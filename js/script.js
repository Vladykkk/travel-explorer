// Header variables
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let list = document.querySelector(".header__list");
let moveLock = document.querySelector("body");

// Close menu on icon
burger.onclick = function () {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	moveLock.classList.toggle("lock");
}

list.onclick = function () {
	list.classList.remove("active");
	moveLock.classList.toggle("lock");
}

// Close menu on link click
document.querySelectorAll(".header__name, .header__link").forEach(n => n.addEventListener("click", () => {
	burger.classList.remove("active");
	menu.classList.remove("active");
}))