document.addEventListener("DOMContentLoaded", function () {
    console.log("ProCar Services Page Loaded");

    // Interactive hover effect for service items
    document.querySelectorAll(".service-item").forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.background = "red";
        });

        item.addEventListener("mouseleave", () => {
            item.style.background = "#333";
        });
    });
});
