// Modal Component
var modal = document.querySelector("#wiModal");
var btn = document.querySelector("#openModal");
var closeBtn = document.querySelector(".close");

if (btn) {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

if (modal) {
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
