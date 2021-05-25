
let questions = [
  {
    id: 1,
    question: "What is the field of Natural Language Processing (NLP)?",
    answer: "All of the mentioned",
    options: [
      "Computer Science",
      "Artificial Intelligence",
      "Linguistics",
      "All of the mentioned"
    ]
  },
  {
    id: 2,
    question: "What is the main challenge/s of NLP?",
    answer: "Handling Ambiguity of Sentences",
    options: [
      "Handling Ambiguity of Sentences",
      "Handling Tokenization",
      "Handling POS-Tagging",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "Choose form the following areas where NLP can be useful.",
    answer: "All of the mentioned",
    options: [
      "Automatic Text Summarization",
      "Automatic Question-Answering Systems",
      "Information Retrieval",
      "All of the mentioned"
    ]
  },
  {
    id: 4,
    question: "What is Machine Translation?",
    answer: "Converts one human language to another",
    options: [
      "Converts one human language to another",
      "Converts human language to machine language",
      "Converts any human language to English",
      "Converts Machine language to human language"
    ]
  },
  {
    id: 5,
    question: "What is Morphological Segmentation?",
    answer: "Separate words into individual morphemes and identify the class of the morphemes",
    options: [
      "Does Discourse Analysis",
      "Separate words into individual morphemes and identify the class of the morphemes",
      "Is an extension of propositional logic",
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
