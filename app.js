// login/signin variables
var getName;
var getEmail;
var getPassword;
var email = document.getElementById("email");
var password = document.getElementById("password");

var htmlQuiz = [
  {
    question: "HTML stands for?",
    option1: "Hypertext Markup Language",
    option2: "Hyper Tool Language",
    option3: "Hypertext Machine Language",
    option4: "Hyperlink Text Language",
    answer: "Hypertext Markup Language",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    option1: "ul",
    option2: "ol",
    option3: "li",
    option4: "list",
    answer: "ul",
  },
  {
    question: "Which tag is used to create a line break in HTML?",
    option1: "break",
    option2: "br",
    option3: "lb",
    option4: "newline",
    answer: "br",
  },
  {
    question: "CSS stands for?",
    option1: "Colorful Style Sheets",
    option2: "Cascading Style Sheets",
    option3: "Creative Style Sheets",
    option4: "Computer Style Sheets",
    answer: "Cascading Style Sheets",
  },
  {
    question: "What is the correct syntax to apply a CSS style to an element?",
    option1: "element.style",
    option2: "element { style: value; }",
    option3: "element = style.value;",
    option4: "style: element { value; }",
    answer: "element { style: value; }",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    option1: "color",
    option2: "bgcolor",
    option3: "background-color",
    option4: "background",
    answer: "background-color",
  },
  {
    question: "Which HTML tag is used to create a table?",
    option1: "tr",
    option2: "td",
    option3: "table",
    option4: "th",
    answer: "table",
  },
  {
    question: "How do you link an external CSS file in HTML?",
    option1: "stylesheet",
    option2: "css",
    option3: "link",
    option4: "style",
    answer: "link",
  },
  {
    question: "Which tag is used to define a footer in HTML5?",
    option1: "bottom",
    option2: "footer",
    option3: "end",
    option4: "section",
    answer: "footer",
  },
  {
    question: "What is the default position value in CSS?",
    option1: "relative",
    option2: "absolute",
    option3: "static",
    option4: "fixed",
    answer: "static",
  },
  {
    question: "Which CSS property controls the text size?",
    option1: "font-style",
    option2: "text-size",
    option3: "font-size",
    option4: "text-style",
    answer: "font-size",
  },
  {
    question: "What is the correct way to comment in CSS?",
    option1: "// comment",
    option2: "<!-- comment -->",
    option3: "/* comment */",
    option4: "' comment",
    answer: "/* comment */",
  },
  {
    question: "Which attribute is used in HTML to define inline styles?",
    option1: "style",
    option2: "class",
    option3: "id",
    option4: "inline",
    answer: "style",
  },
  {
    question: "Which property is used to align text in CSS?",
    option1: "text-indent",
    option2: "text-align",
    option3: "alignment",
    option4: "font-align",
    answer: "text-align",
  },
  {
    question: "Which tag is used to define an image map in HTML?",
    option1: "map",
    option2: "img",
    option3: "area",
    option4: "coords",
    answer: "map",
  },
];

// Quiz variables
var question = document.getElementById("question");
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
var label4 = document.getElementById("label4");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

var quizOptions = document.getElementsByName("quizOption");

// increament variables
var questionNo = 0;
var score = 0;

function renderQuestion() {
  question.innerHTML = htmlQuiz[questionNo].question;

  label1.innerHTML = htmlQuiz[questionNo].option1;
  label2.innerHTML = htmlQuiz[questionNo].option2;
  label3.innerHTML = htmlQuiz[questionNo].option3;
  label4.innerHTML = htmlQuiz[questionNo].option4;

  option1.value = htmlQuiz[questionNo].option1;
  option2.value = htmlQuiz[questionNo].option2;
  option3.value = htmlQuiz[questionNo].option3;
  option4.value = htmlQuiz[questionNo].option4;
}
window.onload = renderQuestion();

// Deselect function

function deselect() {
  for (var i = 0; i < quizOptions.length; i++) {
    quizOptions[i].checked = false;
  }
}

// next question
function nextQuestion() {
  var questionCheck = false;

  for (var i = 0; i < quizOptions.length; i++) {
    if (quizOptions[i].checked) {
      questionCheck = true;

      if (quizOptions[i].value === htmlQuiz[questionNo].answer) {
        score++;
      }
    }
  }

  if (!questionCheck) {
    Swal.fire({
      title: "No Option Selected",
      text: "Please Select Any Option",
      icon: "error",
    });
  } else {
    if (questionNo < htmlQuiz.length - 1) {
      questionNo++;
      deselect();
      renderQuestion();
    } else {
      window.location.href = "result.html";
    }
  }
}

// result variables
var status1 = document.getElementById("status");
var totalQuestion = document.getElementById("totalQuestion");
var correctAnswer = document.getElementById("correctAnswer");
var showPercentage = document.getElementById("showPercentage");

function result1() {
  var percentage = Math.round((score / htmlQuiz.length) * 100);
  var statusResult = "";
  if (percentage < 70) {
    statusResult = "You are failed! Better Luck Next Time";
  } else {
    statusResult = "Congratulations! You are Passed";
    showPercentage.classList.remove = "border-danger";
    showPercentage.classList.add = "border-success";
  }
  status1.innerHTML = statusResult;
  totalQuestion.innerHTML = htmlQuiz.length;
  correctAnswer.innerHTML = score;
  showPercentage.innerHTML = percentage;
}
result1();
// Signup function

function signUp() {
  getName = document.getElementById("getName").value;
  getEmail = document.getElementById("getEmail").value;
  getPassword = document.getElementById("getPassword").value;

  if (getName.trim() !== "") {
    if (getEmail.trim() !== "") {
      if (getPassword.trim() !== "") {
      } else {
        Swal.fire("Please Enter Your Password");
      }
    } else {
      Swal.fire("Please Enter Your Valid Email");
    }
  } else {
    Swal.fire("Please Enter Your Name");
  }
}

function logIn() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  if (email.toLowerCase() === getEmail) {
    if (password.toLowerCase() === getPassword) {
      window.location.href = "welcome.html";
    } else {
      alert("Enter a Valid Password");
    }
  } else {
    alert("Enter a Valid Email");
  }
}

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
