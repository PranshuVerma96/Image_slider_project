const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainer = document.querySelector(".image-container");
const imgE1 = document.querySelectorAll("img");

let currentImg = 1;
let timeout;

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

function updateImg() {
  if (currentImg > imgE1.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgE1.length;
  }

  imageContainer.style.transform =
    `translateX(-${(currentImg - 1) * 500}px)`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 2000);
}