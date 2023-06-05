const questions=[
    {
        question:"When was the first general election to the Lok Sabha held?",
        answers:[
            {text:"1999", correct: false},
            {text:"1952",correct: true},
            {text:"1995",correct: false},
            {text:"1980",correct: false},
        ]
    },
    {
        question:"By whom is the budget passed first?",
        answers:[
            {text:"Rajya Sabha", correct: true},
            {text:"Lok Sabha",correct: false},
            {text:"Both Rajya Sabha and Lok Sabha",correct: false},
            {text:"None of the above",correct: false},
        ]
    },
    {
        question:"Indian Parliament is included in?",
        answers:[
            {text:"Lok Sabha and Rajya Sabha", correct: true},
            {text:"Lok Sabha",correct: false},
            {text:"Rajya Sabha",correct: false},
            {text:"None of the Above",correct: false},
        ]
    },
    {
        question:"Who appoints the provisional Speaker of Lok Sabha?",
        answers:[
            {text:"Election Commission", correct: false},
            {text:"President",correct: true},
            {text:"Vice President",correct: false},
            {text:"Mirabai Chanu",correct: false},
        ]
    },
    {
        question:"Who among the following is called the Custodian of Lok Sabha?",
        answers:[
            {text:"Leader of the opposition party", correct: false},
            {text:"Prime Minister",correct: false},
            {text:"Parimarjan Negi",correct: false},
            {text:"Speaker of the Lok Sabha",correct: true},
        ]
    },
    {
        question:"To whom do the members of the Lok Sabha submit their resignations?",
        answers:[
            {text:"President", correct: false},
            {text:"Speaker of the lok sabha",correct: true},
            {text:"Prime Minister",correct: false},
            {text:"None of the Above",correct: false},
        ]
    },
    {
        question:"In which house the no-confidence motion is brought?",
        answers:[
            {text:"Lok sabha", correct: true},
            {text:"Rajya sabha",correct: false},
            {text:"In either house",correct: false},
            {text:"None of the Above",correct: false},
        ]
    },
    {
        question:"How many times the same person can be made the President of India?",
        answers:[
            {text:"Many times", correct: true},
            {text:"2 Times",correct: false},
            {text:"3 Times",correct: false},
            {text:"None of the above",correct: false},
        ]
    },
    {
        question:"Which veto power does the President of India have?",
        answers:[
            {text:"Suspend Prohibition", correct: false},
            {text:"Complete Prohibition",correct: false},
            {text:"Pocket",correct: false},
            {text:"All of these",correct: true},
        ]
    },
    {
        question:"Parliament is not included in?",
        answers:[
            {text:"Rajya sabha", correct: false},
            {text:"President of India",correct: false},
            {text:"Lok sabha",correct: false},
            {text:"Chief Election Commissioner",correct: true},
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