const input = document.querySelector(".kolik");
const sum = document.querySelector(".sum");
const select = document.getElementById("menu");
const resultat = document.querySelector(".result");

let price = 0;
let unit = "m²";

function calculate() {
  const amount = Number(input.value) || 0;
  const result = amount * price;

  const formatted = new Intl.NumberFormat("cs-CZ").format(result);
  resultat.textContent = `${formatted} Kč`;
}

select.addEventListener("change", function () {
  const option = this.selectedOptions[0];

  price = Number(option.value) || 0;
  unit = option.dataset.unit === "mb" ? "mb" : "m²";

  input.placeholder = unit === "mb" ? "Kolik mb" : "Kolik m²";

  calculate(); // пересчёт при смене типа
});

sum.addEventListener("click", calculate);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  }
});
