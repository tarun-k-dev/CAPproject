
let questions = [
  {
    id: 1,
    question: "How to add a background color in HTML?",
    answer: "marquee bgcolor = 'red'",
    options: [
      "marquee bg color:  'red'",
      "marquee bg-color = 'red'",
      "marquee bgcolor = 'red'",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "input is -",
    answer: "an empty tag.",
    options: [
      "a format  tag.",
      "an empty tag.",
      "All of the above",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "Which of the following tag is used to define options in a drop-down selection list?",
    answer: "option",
    options: [
      "select",
      "list",
      "dropdown",
      "option"
    ]
  },
  {
    id: 4,
    question: "The hr tag in HTML is used for -",
    answer: "horizontal ruler",
    options: [
      "new line",
      "vertical ruler",
      "horizontal ruler",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "Which of the following HTML tag is used to display the text with scrolling effect?",
    answer: "marquee",
    options: [
      "marquee",
      "scroll",
      "div",
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
