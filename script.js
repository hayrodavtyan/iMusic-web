var sideNavToggle = document.querySelector(".side-nav-toggle");
var sidePanel = document.querySelector("nav");
var mainContent = document.querySelector("html");

sideNavToggle.addEventListener("click", function() {
        sidePanel.classList.add('open');
});


// mainContent.addEventListener("click", function() {
//     sidePanel.classList.remove('open');
// });