const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const ammountEl_one = document.getElementById("ammount-one");
const ammountEl_two = document.getElementById("ammount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rateEl.innerText = `1${currency_one}=${rate} ${currency_two}`;
      ammountEl_two.value = (ammountEl_one.value * rate).toFixed(2);
    });
}

//Event listener
currencyEl_one.addEventListener("change", calculate);
ammountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
ammountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
