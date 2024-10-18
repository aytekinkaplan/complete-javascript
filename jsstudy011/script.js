"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  // Eğer body bulunamazsa, kod çalışmaz. Bu kontrol faydalı olabilir.
  if (body) {
    const color = () => {
      const red = Math.floor(Math.random() * 256 + 1);
      const green = Math.floor(Math.random() * 256 + 1);
      const blue = Math.floor(Math.random() * 256 + 1);
      return `rgb(${red}, ${green}, ${blue})`;
    };

    const changeColor = () => {
      body.style.backgroundColor = color();
    };

    body.addEventListener("click", changeColor);
  }
});
