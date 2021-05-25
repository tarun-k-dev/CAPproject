
let questions = [
  {
    id: 1,
    question: "Artificial Intelligence is about_____.",
    answer: "Making a machine Intelligent",
    options: [
      "Playing a game on Computer",
      "Making a machine Intelligent",
      "Programming on Machine with your Own Intelligence",
      "Putting your intelligence in Machine"
    ]
  },
  {
    id: 2,
    question: "Who is known as the Father of AI?",
    answer: "John McCarthy",
    options: [
      "Fisher Ada",
      "Alan Turing",
      "John McCarthy",
      "Allen Newell"
    ]
  },
  {
    id: 3,
    question: "Select the most appropriate situation for that a blind search can be used.",
    answer: "Small Search Space",
    options: [
      "Real-life situation",
      "Small Search Space",
      "Complex game",
      "All of the above"
    ]
  },
  {
    id: 4,
    question: "The application/applications of Artificial Intelligence is/are",
    answer: "All of the above",
    options: [
      "Expert Systems",
      "Gaming",
      "Vision Systems",
      "All of the above"
    ]
  },
  {
    id: 5,
    question: "Among the given options, which search algorithm requires less memory?",
    answer: "Depth First Search",
    options: [
      "Optimal Search",
      "Depth First Search",
      "Breadth-First Search",
      "Linear Search"
    ]
  },
  {
    id: 6,
    question: "Which rule is applied for the Simple reflex agent?",
    answer: "Condition-action rule",
    options: [
      "Simple-action rule",
      "Simple & Condition-action rule",
      "Condition-action rule",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "Which term describes the common-sense of the judgmental part of problem-solving?",
    answer: "Heuristic",
    options: [
      "Values-based",
      "Critical",
      "Analytical",
      "Heuristic"
    ]
  },
  {
    id: 8,
    question: "The exploration problem is where______.",
    answer: "Agent does not contain the knowledge of State and actions.",
    options: [
      "Agent contains the knowledge of State and actions.",
      "Agent does not contain knowledge State and actions.",
      "Only actions are known to the agent.",
      "None of these"
    ]
  },
  {
    id: 9,
    question: "In the Wumpus World Problem, the reason for the uncertainty is that the agent's sensor gives only__",
    answer: "Partial & local Information",
    options: [
      "Full & Global information",
      "Partial & Global Information",
      "Full & local information",
      "Partial & local Information"
    ]
  },
  {
    id: 10,
    question: "Which algorithm takes two sentences as input and returns a Unifier?",
    answer: "Unify Algorithm",
    options: [
      "Inference",
      "Hill-Climbing",
      "Unify Algorithm",
      "Depth-first search"
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
