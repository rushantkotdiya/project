document.addEventListener("DOMContentLoaded", function () {
    console.log("ProCar About Page Loaded");

    // Add an interactive effect for scrolling
    window.addEventListener("scroll", function () {
        let nav = document.querySelector("nav");
        if (window.scrollY > 50) {
            nav.style.background = "#333";
        } else {
            nav.style.background = "black";
        }
    });
});
