// Arrow function to calculate average of 3 scores
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test Data 1: Dolphins and Koalas scores
const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

// Test Data 2: Dolphins and Koalas scores
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

// Function to check the winner based on the rules
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

// Call checkWinner for Test Data 1
checkWinner(scoreDolphins1, scoreKoalas1);

// Call checkWinner for Test Data 2
checkWinner(scoreDolphins2, scoreKoalas2);
