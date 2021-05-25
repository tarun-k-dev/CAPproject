
let questions = [
  {
    id: 1,
    question: "How can we describe an array in the best possible way?",
    answer: "Container that stores the elements of similar types",
    options: [
      "The Array shows a hierarchical structure.",
      "Arrays are immutable.",
      "Container that stores the elements of similar types",
      "The Array is not a data structure"
    ]
  },
  {
    id: 2,
    question: "Which of the following highly uses the concept of an array?",
    answer: "Spatial locality",
    options: [
      "Binary Search tree",
      "Caching",
      "Spatial locality",
      "Scheduling of Processes"
    ]
  },
  {
    id: 3,
    question: "Which one of the following is the process of inserting an element in the stack?",
    answer: "Push",
    options: [
      "Insert",
      "Add",
      "Push",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "When the user tries to delete the element from the empty stack then the condition is said to be a ____",
    answer: "Underflow",
    options: [
      "Underflow",
      "Garbage collection",
      "Overflow",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "Which one of the following is not the application of the stack data structure.?",
    answer: "Asynchronous data transfer",
    options: [
      "String reversal",
      "Recursion",
      "Backtracking",
      "Asynchronous data transfer"
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
