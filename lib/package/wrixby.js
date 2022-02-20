// Modal Component
var modal = document.querySelector("#wiModal");
var btn = document.querySelector("#openModal");
var closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
