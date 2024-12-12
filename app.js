// darkmode toggle

var button = document.getElementById("buttondark");
function darkmode() {
  if (button.checked) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "white");
  }
  checkMode();
}

var element = document.getElementById("dark");
var heading = document.getElementsByClassName("texting");

function checkMode() {
  var currentMode = localStorage.getItem("mode");
  if (currentMode === "dark") {
    button.checked = true;
    element.className = "bg-black";

    for (var i = 0; i < heading.length; i++) {
      heading[i].classList.remove("text-dark-emphasis", "textColor");
      heading[i].classList.add("text-white");
    }
  } else {
    element.className = "bg-white";
    for (var i = 0; i < heading.length; i++) {
      heading[i].classList.remove("text-white");
      heading[i].classList.add("textColor");
    }
  }
}

function setByDefault() {
  var checkModeState = localStorage.getItem("mode");
  if (checkModeState === null) {
    checkMode();
  } else {
    checkMode();
  }
}

// login/signin variables
var getName;
var getEmail;
var getPassword;
var email = document.getElementById("email");
var password = document.getElementById("password");

// Signup function

function signUp() {
  getName = document.getElementById("getName").value;
  getEmail = document.getElementById("getEmail").value;
  getPassword = document.getElementById("getPassword").value;

  if (getName.trim() !== "") {
    if (getEmail.trim() !== "") {
      if (getPassword.trim() !== "") {
        Swal.fire({
          title: "Sign up Successfull",

          icon: "success",
        });
      } else {
        Swal.fire("Please Enter Your Password");
      }
    } else {
      Swal.fire("Please Enter Your Valid Email");
    }
  } else {
    Swal.fire("Please Enter Your Name");
  }

  var userInfo = {
    userName: getName,
    userEmail: getEmail,
    userPassword: getPassword,
  };

  var objectInfo = JSON.stringify(userInfo);
  localStorage.setItem("info", objectInfo);
}

// Login function

function logIn() {
  var loginInfo = localStorage.getItem("info");
  var loginfoObject = JSON.parse(loginInfo);
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  if (email.toLowerCase() === loginfoObject.userEmail) {
    if (password.toLowerCase() === loginfoObject.userPassword) {
      window.location.href = "welcome.html";
    } else {
      Swal.fire("Enter a Valid Password");
    }
  } else {
    Swal.fire("Enter a Valid Email");
  }
}

function getNameFunction() {
  var loginInfo = localStorage.getItem("info");
  var loginfoObject = JSON.parse(loginInfo);
  var setName = document.getElementsByClassName("name");
  for (var i = 0; i < setName.length; i++) {
    setName[i].innerHTML = loginfoObject.userName;
  }
  setName.innerHTML = loginfoObject.userName;
}
getNameFunction();

function python() {
  window.location.href = "python.html";
}

function webnapp() {
  window.location.href = "webnapp.html";
}

function module1() {
  window.location.href = "module.html";
}

function continueBtn() {
  window.location.href = "quiz.html";
}

function result() {
  window.location.href = "result.html";
}

function welcome() {
  window.location.href = "welcome.html";
}

function logOut() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You want to log Out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, LogOut!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        window.location.href = "index.html";
      }
    });
}

window.onload = setByDefault();
