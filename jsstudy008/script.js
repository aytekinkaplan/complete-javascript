const myHeading = document.querySelector("h1");

const words = ["Hello", "World", "My", "Name", "is", "Aytekin", "Kaplan"];

words.forEach((word, index) => {
  setTimeout(() => {
    myHeading.textContent = word;
  }, index * 3000); // Her kelime için gecikme süresi artırılıyor
});
