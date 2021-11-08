const userName = document.querySelector(".username");
const email = document.querySelector(".email");
const pwd_1 = document.querySelector(".password-1");
const pwd_2 = document.querySelector(".password-2");
const container = document.querySelector("form");

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  Validation();
});

function Validation() {
  // username
  if (userName.value.trim() === "") {
    onError(userName, "user name is invalid");
  } else if (userName.value.length < 3) {
    onError(userName, "minimum 3 character");
  } else {
    onSuccess(userName);
  }
  // email
  if (email.value.trim() === "") {
    onError(email, "email can't be empty");
  } else {
    if (!emailValidation(email.value.trim())) {
      onError(email, "email is not valid");
    } else {
      onSuccess(email);
    }
  }
  // password 1
  if (pwd_1.value.trim() === "") {
    onError(pwd_1, "password is invalid");
  } else if (pwd_1.value.length < 4) {
    onError(pwd_1, "minimum 4 character");
  } else {
    onSuccess(pwd_1);
  }
  // password 2
  if (pwd_2.value.trim() === "") {
    onError(pwd_2, "password is invalid");
  } else if (pwd_2.value.length < 4) {
    onError(pwd_2, "minimum 4 character");
  } else {
    if (pwd_1.value.trim() !== pwd_2.value.trim()) {
      onError(pwd_2, "password & confirm password doesn't match");
    } else {
      onSuccess(pwd_2);
    }
  }
}

function emailValidation(testEmail) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(testEmail);
}

function onSuccess(input) {
  let parrent = input.parentElement;
  let massege = parrent.querySelector("small");
  massege.style.visibility = "hidden";
  massege.innerText = input;
  parrent.classList.remove("error");
  parrent.classList.add("success");
}
function onError(input, massage) {
  let parrent = input.parentElement;
  let massege = parrent.querySelector("small");
  massege.style.visibility = "visible";
  massege.innerText = massage;
  parrent.classList.add("error");
  parrent.classList.remove("success");
}
