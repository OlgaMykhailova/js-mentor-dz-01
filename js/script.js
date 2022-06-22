const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];

const countriesPrice = [100, 200, 300, 400, 500, 600];

let userName;
let userPass;
let userCredits;
let userCountry;
let maxPrice;
let availableTours = [];

userCredits = 1000;

const loginRegistration = prompt("Для реєстрації вкажіть свій логін");
const passwordRegistration = prompt("Для реєстрації вкажіть свій пароль");

function signIn() {
  userName = prompt("Для входу вкажіть свій логін");
  userPass = prompt("Для входу вкажіть свій пароль");
}

signIn();

if (userName === loginRegistration && userPass === passwordRegistration) {
  console.log("Ви успішно увійшли в систему");
} else signIn();

maxPrice = prompt(
  "Вкажіть максимальну суму, яку ви готові витратити на покупку туру"
);

for (let i = 0; i < countries.length; i += 1) {
  if (countriesPrice[i] <= maxPrice) {
    availableTours.push(countries[i]);
  }
}

alert(`Ви можете обрати наступні тури: ${availableTours}`);

userCountry = prompt("Оберіть країну");

userCredits -= countriesPrice[countries.indexOf(userCountry)];

alert(
  `Дякуємо, що обрали нас. Ваш тур оплачений. Залишок на вашому рахнку складає ${[
    userCredits,
  ]}`
);
