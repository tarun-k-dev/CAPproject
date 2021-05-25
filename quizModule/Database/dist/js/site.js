
let questions = [
  {
    id: 1,
    question: "The tuples of the relations can be of ________ order.",
    answer: "Any",
    options: [
      "Any",
      "Same",
      "Sorted",
      "Constant"
    ]
  },
  {
    id: 2,
    question: "A table on the many side of a one to many or many to many relationship must:",
    answer: "Have a composite key",
    options: [
      "Be in Second Normal Form (2NF)",
      "Be in Third Normal Form (3NF)",
      "Have a single attribute key",
      "Have a composite key"
    ]
  },
  {
    id: 3,
    question: "Tables in second normal form (2NF):",
    answer: "Eliminate all hidden dependencies",
    options: [
      "Eliminate all hidden dependencies",
      "Eliminate the possibility of a insertion anomalies",
      "Have a composite key",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "Which-one of the following statements about normal forms is FALSE?",
    answer: "Loss less, dependency – preserving decomposition into BCNF is always possible",
    options: [
      "BCNF is stricter than 3 NF",
      "Lossless, dependency -preserving decomposition into 3 NF is always possible",
      "Loss less, dependency – preserving decomposition into BCNF is always possible",
      "Any relation with two attributes is BCNF"
    ]
  },
  {
    id: 5,
    question: "Functional Dependencies are the types of constraints that are based on______",
    answer: "Key",
    options: [
      "Key",
      "Superset Key",
      "Key Revisit",
      "None of these"
    ]
  },
  
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
