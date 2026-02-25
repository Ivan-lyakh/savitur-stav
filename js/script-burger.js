const burger = document.querySelector(".burger");
const burgerBody = document.querySelector(".burger__body");

burger.addEventListener("click", function (e) {
  e.stopPropagation();

  const isActive = burger.classList.toggle("active");
  burgerBody.classList.toggle("burger__open", isActive);
  document.body.classList.toggle("lock", isActive);
});

document.addEventListener("click", function (e) {
  const isClickInside =
    burger.contains(e.target) || burgerBody.contains(e.target);

  if (!isClickInside) {
    burger.classList.remove("active");
    burgerBody.classList.remove("burger__open");
    document.body.classList.remove("lock");
  }
});

document.querySelectorAll('.burger__body a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    burgerBody.classList.remove('burger__open');
    document.body.classList.remove('lock');
  });
});



const form = document.getElementById("contact-form");
const status = document.querySelector(".form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (result.success) {
    status.innerHTML = "✅ Děkujeme, zpráva byla odeslána.";
    form.reset();
  } else {
    status.innerHTML = "❌ Nastala chyba. Zkuste to prosím znovu.";
  }
});