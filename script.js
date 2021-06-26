var sideNavToggle = document.querySelector(".side-nav-toggle");
var sidePanel = document.querySelector("nav");

sideNavToggle.addEventListener("click", function() {
        sidePanel.classList.add('open');
});