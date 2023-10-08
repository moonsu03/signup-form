const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm_password");
const match = document.createElement("div");
match.classList.add("match");
match.style.cssText =
  "position: absolute; font-size: 13px; color: red;";

function confirm() {
  if (password.value == confirmPass.value || password.value == "") {
    match.textContent = "";
    password.style.cssText = "border-color: auto;";
    confirmPass.style.cssText = "border-color: auto;";
  } else {
    match.textContent = "* Passwords do not match";
    password.style.cssText = "border-color: red;";
    confirmPass.style.cssText = "border-color: red;";
  }
  form.append(match);
}

confirm();
