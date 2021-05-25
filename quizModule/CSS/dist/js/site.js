
let questions = [
  {
    id: 1,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ]
  },
  {
    id: 2,
    question: "Which of the following selector matches a element based on its id?",
    answer: "The Id Selector",
    options: [
      "The Universal Selector",
      "The Id Selector",
      "The Descendant Selector",
      "The Class Selector"
    ]
  },
  {
    id: 3,
    question: "Which of the following property changes the width of right border?",
    answer: ":border-right-width",
    options: [
      ":border-bottom-width",
      ":border-top-width",
      ":border-left-width",
      ":border-right-width"
    ]
  },
  {
    id: 4,
    question: "Which of the following property changes the style of bottom border?",
    answer: ":border-bottom-style",
    options: [
      ":border-bottom-style",
      ":border-top-style",
      ":border-left-style",
      ":border-right-style"
    ]
  },
  {
    id: 5,
    question: "Which of the following value of cursor shows it as a pointing hand?",
    answer: "pointer",
    options: [
      "crosshair",
      "move",
      "pointer",
      "None of these"
    ]
  },
  {
    id: 6,
    question: "Which of the following is a way to associate styles with your HTML document?",
    answer: "Both of the above.",
    options: [
      "External CSS - The Element",
      "Imported CSS - @import Rule",
      "Both of the above.",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "Which of the following property is used to control the repetition of an image in the background?",
    answer: "background-repeat",
    options: [
      "background-color",
      "background-image",
      "background-repeat",
      "background-position"
    ]
  },
  {
    id: 8,
    question: "Which of the following property is used as shorthand to specify a number of other font properties?",
    answer: "font",
    options: [
      "font-size",
      "font",
      "font-variant",
      "font-weight"
    ]
  },
  {
    id: 9,
    question: "Which of the following property is used to control the flow and formatting of text?",
    answer: "white-space",
    options: [
      "white-space",
      "text-shadows",
      "text-decoration",
      "text-transform"
    ]
  },
  {
    id: 10,
    question: "How can you created rounded corners using CSS3?",
    answer: "border[round]: 30px;",
    options: [
      "border[round]: 30px;",
      "corner-effect: round;",
      "border-radius: 5px;",
      "alpha-effect: round-corner;"
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
