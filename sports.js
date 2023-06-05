const questions=[
    {
        question:"When was the first Cricket World Cup held?",
        answers:[
            {text:"1990", correct: false},
            {text:"1975",correct: true},
            {text:"1995",correct: false},
            {text:"1980",correct: false},
        ]
    },
    {
        question:" When was football introduced in India?",
        answers:[
            {text:"mid-Nineteenth Century", correct: true},
            {text:"mid-Eighteenth Century",correct: false},
            {text:"Nineteenth-Century",correct: false},
            {text:"None of the above",correct: false},
        ]
    },
    {
        question:"Who was the first Indian woman to win an Olympic medal?",
        answers:[
            {text:"Karanam Malleswari", correct: true},
            {text:"P.T. Usha",correct: false},
            {text:"Geetha Phogat",correct: false},
            {text:"Saina Nehwal",correct: false},
        ]
    },
    {
        question:"Who is the first Indian woman wrestler to win a medal in the Olympics?",
        answers:[
            {text:"Mary Kom", correct: false},
            {text:"Sakshi Malik",correct: true},
            {text:"Geetha Phogat",correct: false},
            {text:"Mirabai Chanu",correct: false},
        ]
    },
    {
        question:" Who is the youngest Grandmaster in 2022?",
        answers:[
            {text:"Abhimanyu", correct: false},
            {text:"Gukesh Dommaraju",correct: false},
            {text:"Parimarjan Negi",correct: false},
            {text:"R Praggnanandha",correct: true},
        ]
    },
    {
        question:"Where were the first Asian Games held?",
        answers:[
            {text:"Mumbai", correct: false},
            {text:"New Delhi",correct: true},
            {text:"Bhopal",correct: false},
            {text:"Chennai",correct: false},
        ]
    },
    {
        question:"When did India win the First cricket World Cup?",
        answers:[
            {text:"1997", correct: true},
            {text:"1990",correct: false},
            {text:"2000",correct: false},
            {text:"None of the Above",correct: false},
        ]
    },
    {
        question:"Who is known as the “Flying Sikh”?",
        answers:[
            {text:"Milkha Singh", correct: true},
            {text:"Budhia Singh",correct: false},
            {text:"Fauja Singh",correct: false},
            {text:"None of the above",correct: false},
        ]
    },
    {
        question:"Sachin Tendulkar is known as which of the following names?",
        answers:[
            {text:"bala", correct: false},
            {text:"God of Cricket",correct: true},
            {text:"pikoo",correct: false},
            {text:"jana aranya",correct: false},
        ]
    },
    {
        question:"Who was the first receiver of the Rajiv Gandhi Khel Ratna Award?",
        answers:[
            {text:"Milkha Singh", correct: false},
            {text:"Vishwanathan Anand",correct: true},
            {text:"Sachin Tendulkar",correct: false},
            {text:"Rohit Sharma",correct: false},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question+"(choose the option below to proceed NEXT question)";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Home";
    nextButton.style.display="none";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();