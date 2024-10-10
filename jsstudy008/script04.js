const dolphinsScore = [96, 108, 89];
const koalasScore = [88, 91, 110];

// Ortalama skorları hesaplama
const dolphinsAverageScore =
  (dolphinsScore[0] + dolphinsScore[1] + dolphinsScore[2]) / 3;
const koalasAverageScore =
  (koalasScore[0] + koalasScore[1] + koalasScore[2]) / 3;

console.log(`Dolphins Average Score: ${dolphinsAverageScore}`);
console.log(`Koalas Average Score: ${koalasAverageScore}`);

// Kazananı belirleme ve bonus kuralları kontrolü
if (dolphinsAverageScore >= 100 || koalasAverageScore >= 100) {
  if (
    dolphinsAverageScore > koalasAverageScore &&
    dolphinsAverageScore >= 100
  ) {
    console.log("Dolphins win the trophy!");
  } else if (
    koalasAverageScore > dolphinsAverageScore &&
    koalasAverageScore >= 100
  ) {
    console.log("Koalas win the trophy!");
  } else if (
    dolphinsAverageScore === koalasAverageScore &&
    dolphinsAverageScore >= 100 &&
    koalasAverageScore >= 100
  ) {
    console.log("It's a draw, both teams win the trophy!");
  } else {
    console.log("No team wins the trophy!");
  }
} else {
  console.log("No team wins the trophy, neither scored 100 or more!");
}
