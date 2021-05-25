
let questions = [
  {
    id: 1,
    question: "What is a reusable resource?",
    answer: "that can be used by one process at a time and is not depleted by that use",
    options: [
      "that can be used by one process at a time and is not depleted by that use",
      "that can be used by more than one process at a time",
      "that can be shared between various threads",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "The circular wait condition can be prevented by ____________",
    answer: "defining a linear ordering of resource types",
    options: [
      "defining a linear ordering of resource types",
      "using thread",
      "using pipes",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "Which one of the following is the deadlock avoidance algorithm?",
    answer: "banker’s algorithm",
    options: [
      "banker’s algorithm",
      "round-robin algorithml",
      "elevator algo",
      "karn’s algorithm"
    ]
  },
  {
    id: 4,
    question: "A problem encountered in multitasking when a process is perpetually denied necessary resources is called ____________",
    answer: "starvation",
    options: [
      "deadlock",
      "starvation",
      "inversion",
      "aging"
    ]
  },
  {
    id: 5,
    question: "Which one of the following is a visual ( mathematical ) way to determine the deadlock occurrence?",
    answer: "resource allocation graph",
    options: [
      "resource allocation graph",
      "starvation graph",
      "inversion graph",
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
