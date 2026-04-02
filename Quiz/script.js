const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Tolstoy", "Hemingway", "Dickens"],
        answer: "Shakespeare"
    },
    {
        question: "What is 5 × 6?",
        options: ["30", "20", "25", "35"],
        answer: "30"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.querySelectorAll('.option');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next');

function loadQuestion() {
    let q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.forEach((btn, i) => {
        btn.textContent = q.options[i];
        btn.style.backgroundColor = "#2c2c2c"; // reset color
        btn.disabled = false;
    });
}

optionsEl.forEach(btn => {
    btn.addEventListener('click', function() {
        let selected = this.textContent;
        let correct = questions[currentQuestion].answer;
        if(selected === correct) {
            score++;
            this.style.backgroundColor = "green";
        } else {
            this.style.backgroundColor = "red";
            optionsEl.forEach(b => {
                if(b.textContent === correct) b.style.backgroundColor = "green";
            });
        }
        scoreEl.textContent = `Score: ${score}`;
        optionsEl.forEach(b => b.disabled = true);
    });
});

nextBtn.addEventListener('click', function() {
    currentQuestion++;
    if(currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = `Quiz Finished! Final Score: ${score}/${questions.length}`;
        optionsEl.forEach(b => b.style.display = "none");
        nextBtn.style.display = "none";
    }
});

loadQuestion();
