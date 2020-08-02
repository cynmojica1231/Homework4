function populate() {
  if (quiz.isEnded()) {
    //showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + 1);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}
function showScores() {
  var gameOverHhtml = "<h1>Result</h1>";
  gameOverHhtml += "h2 id='score'> Your scores:" + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHhtml;
}

var questions = [
  new Question(
    "Choose the client-side JavaScript object?",
    ["Database", "Cursor", "Client", "FileUpLoad"],
    "D"
  ),
  new Question(
    "Which of the following is not considered a JavaScript operator?",
    ["new", "delete", "typeof"],
    "B"
  ),
  new Question(
    "JavaScript is interpreted by _________",
    ["Client", "Server", "Object", "None of the above"],
    "A"
  ),
  new Question(
    "Using _______ statement is how you test for a specific condition.",
    ["Select", "If", "Switch", "For"],
    "B"
  ),
  new Question(
    "Choose the client-side JavaScript object:",
    ["Database", "Cursor", "Client", "FileUpload"],
    "D"
  ),
];

var quiz = new Quiz(questions);

populate();
