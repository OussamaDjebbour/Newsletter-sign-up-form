"use strict";

// const input = document.querySelector('[type="text"]');
const form = document.querySelector("form");
const btnDismiss = document.querySelector(".btn-dismiss");
const errMessage = document.querySelector(".error-message");
const container = document.querySelector(".container");
const containerSuccess = document.querySelector(".container-success");
const successEmailContent = document.querySelector(".success-email-content");

const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const tomatoColor = "hsl(4, 100%, 67%)";

const errDisplay = function (targetInput) {
  errMessage.classList.remove("hidden");
  targetInput.style.color = tomatoColor;
  targetInput.style.borderColor = tomatoColor;
  targetInput.style.backgroundColor = "hsla(4, 100%, 67%,0.1)";
};

const showAndHideContainers = function () {
  container.classList.toggle("hidden");
  containerSuccess.classList.toggle("hidden");
};

const validation = function (e) {
  const input = e.target.querySelector('[type="text"]');

  if (!regExp.test(input.value.trim())) {
    errDisplay(input);
    return;
  }

  showAndHideContainers();
  successEmailContent.textContent = input.value;
  input.value = "";
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validation(e);
});

btnDismiss.addEventListener("click", function () {
  showAndHideContainers();
});
