// result variables
var status1 = document.getElementById("status");
var totalQuestion = document.getElementById("totalQuestion");
var correctAnswer = document.getElementById("correctAnswer");
var showPercentage = document.getElementById("showPercentage");

function result1() {
  var getResult = localStorage.getItem("resultInfo");
  var getResultObject = JSON.parse(getResult);

  var percentage = Math.round(
    (getResultObject.correctAnswer / getResultObject.totalQuestion) * 100
  );
  var statusResult = "";
  if (percentage < 70) {
    statusResult = "You are failed! Better Luck Next Time";
  } else {
    statusResult = "Congratulations! You are Passed";
    status1.classList.remove("text-danger");
    status1.classList.add("text-success");
    showPercentage.classList.remove("border-danger");
    showPercentage.classList.add("border-success");
  }
  status1.innerHTML = statusResult;
  totalQuestion.innerHTML = getResultObject.totalQuestion;
  correctAnswer.innerHTML = getResultObject.correctAnswer;
  showPercentage.innerHTML = `${percentage}%`;
}
result1();
