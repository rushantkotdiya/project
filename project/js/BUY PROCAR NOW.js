document.addEventListener("DOMContentLoaded", function () {
    console.log("ProCar Buy Page Loaded");

    // Button click event for Buy Now
    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for your interest! Our sales team will contact you shortly.");
        });
    });
});
