document.addEventListener("DOMContentLoaded", function () {
    console.log("ProCar Shop Page Loaded");

    // Button click event for Buy Now
    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("This product has been added to your cart!");
        });
    });
});
