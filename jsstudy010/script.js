const container = document.querySelector(".container");

// container flex ayarı
container.style.display = "flex";
container.style.justifyContent = "space-around"; // Öğeler arasında boşluk oluşturur (isteğe bağlı)
container.style.alignItems = "center"; // Yatayda ortalar (isteğe bağlı)

// Tüm .rounded-edge öğelerini seç
const elements = document.querySelectorAll(".rounded-edge");

// Döngü ile her bir öğeye stil uygula
elements.forEach((element) => {
  element.style.width = "500px";
  element.style.height = "900px";
  element.style.aspectRatio = "3 / 2";
  element.style.clipPath = "ellipse(85% 100% at 50% 0%)";
  element.style.backgroundColor = "#6c5ce7";
});
