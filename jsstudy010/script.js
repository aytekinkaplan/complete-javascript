const bigContainer = document.querySelector(".big-container");
const containers = document.querySelectorAll(".container"); // Tüm container'ları seç

// .big-container grid ayarı
bigContainer.style.display = "grid";
bigContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
bigContainer.style.gridTemplateRows = "repeat(2, auto)"; // Her iki container için yer bırakır
bigContainer.style.gridGap = "20px";

// Her bir .container için flex ayarları yap
containers.forEach((container) => {
  container.style.display = "flex";
  container.style.justifyContent = "space-around"; // Öğeler arasında boşluk oluşturur (isteğe bağlı)
  container.style.alignItems = "center"; // Yatayda ortalar (isteğe bağlı)
});

// Tüm .rounded-edge öğelerini seç ve stil uygula
const elements = document.querySelectorAll(".rounded-edge");

elements.forEach((element) => {
  element.style.width = "500px";
  element.style.height = "900px";
  element.style.aspectRatio = "3 / 2";
  element.style.clipPath = "ellipse(85% 100% at 50% 0%)";
  element.style.backgroundColor = "#6c5ce7";
});
