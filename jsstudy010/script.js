const elements = document.querySelectorAll(".rounded-edge");

elements.forEach((element) => {
  // Stilleri doğrudan JavaScript'te ayarlamak yerine sadece clipPath ile oynuyoruz
  element.style.clipPath = "ellipse(75% 100% at 50% 0%)";
});
