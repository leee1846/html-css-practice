// ---------------------------------찾기
let 찾기버튼 = document
  .querySelector(".box")
  .addEventListener("click", function () {
    let 찾기 = document.querySelector(".look-up");
    let nav = document.querySelector("nav");
    찾기.classList.toggle("toggle");
    nav.classList.toggle("toggle");
  });

//----------------------country 선택
document.querySelector("#country").addEventListener("click", function () {
  this.classList.toggle("toggle");
});

//----------------------reservation
let reservation = document.querySelector(".nav-select");
reservation.addEventListener("click", function () {
  this.classList.toggle("toggle");
});
