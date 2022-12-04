// select modal-btn,modal-overlay,close-btn
const modalButton = document.querySelector(".modal-btn");
const modalOverLay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-btn");

// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// modaloverlay is hidden until functionality is brought to open-modal class to toggle modal
modalButton.addEventListener("click", function () {
    modalOverLay.classList.toggle("open-modal");
});

// when user clicks close-btn remove .open-modal from modal-overlay
closeButton.addEventListener("click", function () {
    modalOverLay.classList.remove("open-modal");
});