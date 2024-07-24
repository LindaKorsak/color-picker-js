const colorBtns = document.querySelectorAll(".colorItem");
const imgPicker = document.querySelector(".imgPicker");
colorBtns.forEach(function (button) {
  button.addEventListener("click", function (event) {
    imgPicker.src = "./img/" + event.target.dataset.file;

    const previousActiveBtn = document.querySelector(".colorItem--active");
    previousActiveBtn.classList.remove("colorItem--active");
    event.target.classList.add("colorItem--active");
  });
});
