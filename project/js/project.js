document.addEventListener("DOMContentLoaded", function () {
    console.log("ProCar Projects Page Loaded");

    // Interactive hover effect for project items
    document.querySelectorAll(".project-item").forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.background = "red";
        });

        item.addEventListener("mouseleave", () => {
            item.style.background = "#333";
        });
    });
});
