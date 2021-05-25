
let questions = [
  {
    id: 1,
    question: "Which of the following is incorrect? Algorithms can be represented:",
    answer: "as syntax",
    options: [
      "as pseudo codes",
      "as syntax",
      "as programs",
      "as flowcharts"
    ]
  },
  {
    id: 2,
    question: "When an algorithm is written in the form of a programming language, it becomes a _________",
    answer: "Program",
    options: [
      "Flowchart",
      "Program",
      "Pseudo Code",
      "Syntax"
    ]
  },
  {
    id: 3,
    question: "Another name for 1-D arrays.",
    answer: "Linear arrays",
    options: [
      "Linear arrays",
      "Lists",
      "Horizontal array",
      "Vertical Array"
    ]
  },
  {
    id: 4,
    question: " Which of the following is an adaptive sorting algorithm?",
    answer: "Recursive Insertion sort",
    options: [
      "Recursive Insertion sort",
      "merge sort",
      "heap sort",
      "selection sort"
    ]
  },
  {
    id: 5,
    question: "Which of the following sorting algorithm is in place?",
    answer: "recursive insertion sort",
    options: [
      "merge sort",
      "recursive insertion sort",
      "radix sort",
      "counting sort"
    ]
  },
  {
    id: 6,
    question: "Which of the following is true?",
    answer: "Prim’s algorithm initialises with a vertex",
    options: [
      "Prim’s algorithm initialises with a vertex",
      "Prim’s algorithm initialises with a edge",
      "Prim’s algorithm initialises with a vertex which has smallest edge",
      "Prim’s algorithm initialises with a forests"
    ]
  },
  {
    id: 7,
    question: "Prim’s algorithm is a ______",
    answer: "Greedy algorithm",
    options: [
      "Divide and conquer algorithm",
      "Greedy algorithm",
      "Dynamic Programming",
      "Approximation algorithm"
    ]
  },
  {
    id: 8,
    question: "Which of the following is false about Prim’s algorithm?",
    answer: "It constructs MST by selecting edges in increasing order of their weights",
    options: [
      "It is a greedy algorithm",
      "It constructs MST by selecting edges in increasing order of their weights",
      "It never accepts cycles in the MST",
      "It can be implemented using the Fibonacci heap"
    ]
  },
  {
    id: 9,
    question: "Kruskal’s algorithm is used to ______",
    answer: "find minimum spanning tree",
    options: [
      "find minimum spanning tree",
      "find single source shortest path",
      "find all pair shortest path algorithm",
      "traverse the graph"
    ]
  },
  {
    id: 10,
    question: "Which of the following is true?",
    answer: "Kruskal’s algorithm can also run on the disconnected graphs",
    options: [
      "Prim’s algorithm can also be used for disconnected graphs",
      "Kruskal’s algorithm can also run on the disconnected graphs",
      "Prim’s algorithm is simpler than Kruskal’s algorithm",
      "In Kruskal’s sort edges are added to MST in decreasing order of their weights"
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
