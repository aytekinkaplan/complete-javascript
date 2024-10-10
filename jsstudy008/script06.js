// Tip hesaplama fonksiyonu: 50 ile 300 arasındaysa %15, aksi halde %20 hesaplar.
function calculateTip(bill) {
  // Ternary operator ile bahşişi hesaplıyoruz
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}

// Toplam hesaplama fonksiyonu: Hesap ve bahşişi toplar
function calculateTotal(bill, tip) {
  return bill + tip;
}

// İlk fatura için test (275)
const bill1 = 275;
const tip1 = calculateTip(bill1);
const total1 = calculateTotal(bill1, tip1);
console.log(
  `The bill was ${bill1}, the tip was ${tip1.toFixed(
    2
  )}, and the total value ${total1.toFixed(2)}.`
);

// İkinci fatura için test (40)
const bill2 = 40;
const tip2 = calculateTip(bill2);
const total2 = calculateTotal(bill2, tip2);
console.log(
  `The bill was ${bill2}, the tip was ${tip2.toFixed(
    2
  )}, and the total value ${total2.toFixed(2)}.`
);

// Üçüncü fatura için test (430)
const bill3 = 430;
const tip3 = calculateTip(bill3);
const total3 = calculateTotal(bill3, tip3);
console.log(
  `The bill was ${bill3}, the tip was ${tip3.toFixed(
    2
  )}, and the total value ${total3.toFixed(2)}.`
);
