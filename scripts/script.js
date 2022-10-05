var deButton = document.querySelector("header button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	var deNav = document.querySelector("header nav");
	deNav.classList.toggle("open");

  var openButton = document.querySelector("header button")
  openButton.classList.toggle("openMenu")
}