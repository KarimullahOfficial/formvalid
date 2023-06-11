var submitBtn = document.getElementById("submitbtn");
var NameError = document.getElementById("NameError");
var EmailError = document.getElementById("EmailError");
var PasswordError = document.getElementById("PasswordError");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validatename() && validatEmail() && validatePassmail()) {
    alert("Form is Submitted successfully");
  }
});

function validatename() {
  let name = document.getElementById("name").value;
  if (name.length == 0) {
    NameError.innerHTML = "Name Is Requried";
    NameError.previousElementSibling.classList.add(" fa-xmark");
    return false;
  }
  return true;
  if (!name.match(/^[A-Za-z]*s{1}[A-Za-z]*$/)) {
    NameError.innerHTML = "Write a full name";
    NameError.previousElementSibling.classList.add("fa-solid fa-xmark");

    return false;
  }
  NameError.innerHTML == "";
  NameError.previousElementSibling.classList.add("fa-solid fa-check");
  return true;
}
function validatEmail() {
  let mail = document.getElementById("mail").value;
  if (mail.length == 0) {
    EmailError.innerHTML = "Email Is Requried";
    EmailError.previousElementSibling.classList.add(" fa-xmark");
    return false;
  }
  return true;
  if (!mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    EmailError.innerHTML = "Write a format email";
    EmailError.previousElementSibling.classList.add("fa-solid fa-xmark");

    return false;
  }
  NameError.innerHTML == "";
  NameError.previousElementSibling.classList.add("fa-solid fa-check");
  return true;
}
function validatePassmail() {
  let password = document.getElementById("password").value;
  if (password.length == 0) {
    PasswordError.innerHTML = "Password Is Requried";
    PasswordError.previousElementSibling.classList.add(" fa-xmark");
    return false;
  }
  return true;
  if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
    PasswordError.innerHTML = "Pasword must be 8 character special character";
    PasswordError.previousElementSibling.classList.add("fa-solid fa-xmark");

    return false;
  }
  NameError.innerHTML == "";
  NameError.previousElementSibling.classList.add("fa-solid fa-check");
  return true;
}
