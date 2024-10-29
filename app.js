const form = document.getElementById("form");
const email = document.getElementById("email");
const errMessage = document.querySelector(".error__message");
const emailPatten = /^[a-zA-Z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
  event.preventDefault();
  if (email.value === "" || !email.value.match(emailPatten))
    email.style.border = "1px solid hsl(354, 100%, 66%)";
  email.placeholder = "example@email/com";

  errMessage.classList.remove("hide");
});
