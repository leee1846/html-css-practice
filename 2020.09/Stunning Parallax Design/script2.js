document.addEventListener("mousemove", function (i) {
  const bg = document.querySelector(".bg");
  const bird = document.querySelector(".bird");
  const content = document.querySelector(".content");

  bg.style.width = 100 + i.pageX / 100 + "%";
  bg.style.height = 100 + i.pageY / 100 + "%";

  bird.style.right = 100 + i.pageX / 2 + "px";
  content.style.left = 100 + i.pageX / 1.6 + "px";
});

const ham = document.querySelector(".ham");
const pop = document.querySelector(".pop");

ham.addEventListener("click", function () {
  pop.classList.toggle("active");
  ham.classList.toggle("ex");
});
