// 99 бутылок пива на стене, 99 бутылок пива!
// Возьми одну, пусти по кругу, 98 бутылок пива на стене!
function generateSingleStanza(number) {
  let secondNum = number - 1;
  if (
    number % 10 === 0 ||
    (number >= 10 && number <= 20) ||
    (number % 10 > 4 && number % 10 < 10)
  ) {
    console.log(`${number} бутылок пива на стене, ${number} бутылок пива!`);
  } else if (number % 10 === 1) {
    console.log(`${number} бутылка пива на стене, ${number} бутылка пива!`);
  } else if (number % 10 > 1 && number % 10 < 5) {
    console.log(`${number} бутылки пива на стене, ${number} бутылки пива!`);
  }
  if (
    secondNum % 10 === 0 ||
    (secondNum >= 10 && secondNum <= 20) ||
    (secondNum % 10 >= 5 && secondNum % 10 <= 9)
  ) {
    console.log(
      `Возьми одну, пусти по кругу, ${secondNum} бутылок пива на стене!`
    );
  } else if (secondNum % 10 === 1) {
    console.log(
      `Возьми одну, пусти по кругу, ${secondNum} бутылка пива на стене!`
    );
  } else if (secondNum % 10 > 1 && secondNum % 10 < 5) {
    console.log(
      `Возьми одну, пусти по кругу, ${secondNum} бутылки пива на стене!`
    );
  }
}
function generateSongText(number) {
  for (let i = number; i >= 1; i--) {
    generateSingleStanza(i);
  }
}
generateSingleStanza(2);
generateSongText(99);
