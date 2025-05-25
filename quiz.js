const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: 0
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS"],
      answer: 2
    },
    {
      question: "Which is not a JavaScript Framework?",
      options: ["Python Script", "JQuery", "NodeJS"],
      answer: 0
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const options = document.getElementById("options");
    options.innerHTML = "";
    q.options.forEach((opt, i) => {
      const li = document.createElement("li");
      li.textContent = opt;
      li.addEventListener("click", () => selectOption(i));
      options.appendChild(li);
    });
  }
  
  function selectOption(selected) {
    if (selected === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("quiz-container").innerHTML = <h2>Your Score: ${score}/${questions.length}</h2>;
    }
  }
  
  document.getElementById("next").addEventListener("click", loadQuestion);
  loadQuestion();
