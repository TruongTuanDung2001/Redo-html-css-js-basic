const btn = document.querySelector(".btn");

const closeIcon = document.querySelector(".close-icon");


const container = document.querySelector(".container");

const popupContainer = document.querySelector(".popup-container");

//
btn.addEventListener("click", () => {
    if (popupContainer.classList.contains("active")) {
        popupContainer.classList.remove("active")

        container.classList.add("active");
    }
});

//
closeIcon.addEventListener("click", () => {
    popupContainer.classList.add("active")

    container.classList.remove("active");

});