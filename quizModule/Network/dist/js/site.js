
let questions = [
  {
    id: 1,
    question: "Which of these is a standard interface for serial data transmission?",
    answer: "RS232C",
    options: [
      "ASCII",
      "RS232C",
      "2",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "Which type of topology is best suited for large businesses which must carefully control and coordinate the operation of distributed branch outlets?",
    answer: "Star",
    options: [
      "Rings",
      "Local Area",
      "Heirarchical",
      "Star"
    ]
  },
  {
    id: 3,
    question: "Which of the following transmission directions listed is not a legitimate channel?",
    answer: "Double Duplex",
    options: [
      "Simplex",
      "Half Duplex",
      "Full Duplex",
      "Double Duplex"
    ]
  },
  {
    id: 4,
    question: "What kind of transmission medium is most appropriate to carry data in a computer network that is exposed to electrical interferences?",
    answer: "Optical fiber",
    options: [
      "Unshielded twisted pair",
      "Optical fibers",
      "Coaxial cable",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "A collection of hyperlinked documents on the internet forms the ?.?",
    answer: "World Wide Web (WWW)",
    options: [
      "World Wide Web (WWW)",
      "E-mail system",
      "Mailing list",
      "Hypertext markup language"
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
