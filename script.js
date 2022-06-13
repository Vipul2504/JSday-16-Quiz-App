const QuizDB = [
    {
      question: "Q1:What is the full form of HTML?",
      a: "Hello To My Land",
      b: "Hey Text Markup Language",
      c: "HyperText Makeup Language",
      d: "Hypertext Markup Language",
      ans: "ans4",
    },
    {
      question: "Q2:What is the full form of CSS?",
      a: "Cascading Style Sheets",
      b: "Cascading Style Sheep",
      c: "Cartoon Style Sheets",
      d: "Cascading Super Sheets",
      ans: "ans1",
    },
    {
      question: "Q3:What is the full form of HTTP?",
      a: "Hypertext Transfer Product",
      b: "Hypertext Test Protocol",
      c: "Hey Transfer Protocol",
      d: "Hypertext Transfer Protocol",
      ans: "ans4",
    },
  {
    question: "Q4:Inside which HTML element do we put the JavaScript??",
    a: "<script>",
    b: "<javascript>",
    c: "<js>",
    d: "<scripting>",
    ans: ans1,
  },
  {
    question:
      "Q5:What is the correct syntax for referring to an external script called 'xxx.js'?",
    a: "<script href='xxx.js'>",
    b: "<script name='xxx.js'>",
    c: "<script src='xxx.js'>",
    d: "<script file='xxx.js'>",
    ans: ans3,
  },
  {
    question: "Q6:How do you write 'Hello World' in an alert box?",
    a: "msgBox('Hello World');",
    b: "alertBox('Hello World');",
    c: "msg('Hello World');",
    d: "alert('Hello World');",
    ans: ans4,
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#opt1");
const option2 = document.querySelector("#opt2");
const option3 = document.querySelector("#opt3");
const option4 = document.querySelector("#opt4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showscore");
let questioncount = 0;
let score = 0;

const loadquestion = () => {
  const questionList = QuizDB[questioncount];
  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadquestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false)
}

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  if (checkedAnswer === QuizDB[questioncount].ans) {
    score++;
  }
  questioncount++;
  deselectAll();
  if (questioncount < QuizDB.length) {
    loadquestion();
  } else {
    showScore.innerHTML = `
        <h3>Your scored ${score}/${QuizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;

    showScore.classList.remove(".scoreArea");
  }
});
