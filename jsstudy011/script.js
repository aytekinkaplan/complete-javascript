"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    // 16777215 (FFFFFF hexadecimal) sayısına kadar rastgele bir sayı üret
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // Eğer üretilen renk 6 haneli değilse, başına sıfır ekleyerek 6 haneye tamamla
    randomColor = randomColor.padStart(6, "0");

    // Arka plan rengini ayarla
    body.style.backgroundColor = `#${randomColor}`;
  });
});
