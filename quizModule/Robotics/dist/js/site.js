
let questions = [
  {
    id: 1,
    question: "What is the name for information sent from robot sensors to robot controllers?",
    answer: "feedback",
    options: [
      "temperature",
      "signal",
      "feedback",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "Which of the following terms refers to the rotational motion of a robot arm?",
    answer: "roll",
    options: [
      "swivel",
      "axle",
      "retrograde",
      "roll"
    ]
  },
  {
    id: 3,
    question: "What is the name for space inside which a robot unit operates?",
    answer: "work envelope",
    options: [
      "environment",
      "spatial base",
      "work envelope",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "Which of the following terms IS NOT one of the five basic parts of a robot?",
    answer: "peripheral tools",
    options: [
      "peripheral tools",
      "end effectors",
      "controller",
      "drive"
    ]
  },
  {
    id: 5,
    question: "The number of moveable joints in the base, the arm, and the end effectors of the robot determines_________",
    answer: "degrees of freedom",
    options: [
      "Electronic Mail",
      "payload capacity",
      "operational limits",
      "None of these"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
