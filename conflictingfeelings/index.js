const imageContainers = document.querySelectorAll(".image-container");

imageContainers.forEach((container) => {
    const image = container.querySelector(".image");
    let imageVisible = false;

    container.addEventListener("click", function () {
        if (!imageVisible) {
            image.style.display = "block";
            imageVisible = true;
        } else {
            image.style.display = "none";
            imageVisible = false;
        }
    });
});
