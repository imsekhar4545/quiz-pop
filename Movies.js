const questions=[
    {
        question:"First Indian movie submitted for Oscar?",
        answers:[
            {text:"The Guide", correct: false},
            {text:"Mother India",correct: true},
            {text:"Amrapalli",correct: false},
            {text:"kantara",correct: false},
        ]
    },
    {
        question:"Satyajit Ray win Oscar in the year?",
        answers:[
            {text:"1992", correct: true},
            {text:"1994",correct: false},
            {text:"1986",correct: false},
            {text:"1990",correct: false},
        ]
    },
    {
        question:"First Indian sound film was?",
        answers:[
            {text:"Alam Ara", correct: true},
            {text:"Bahubali",correct: false},
            {text:"puspha",correct: false},
            {text:"kantara",correct: false},
        ]
    },
    {
        question:"Filmfare awards started from the year?",
        answers:[
            {text:"1952", correct: false},
            {text:"1964",correct: true},
            {text:"1954",correct: false},
            {text:"1960",correct: false},
        ]
    },
    {
        question:"From which year Indian Govt sponsored National Film Award?",
        answers:[
            {text:"1952", correct: false},
            {text:"1964",correct: false},
            {text:"1954",correct: false},
            {text:"1973",correct: true},
        ]
    },
    {
        question:"Total number of award won by Satyajit Ray in national Film Award?",
        answers:[
            {text:"10", correct: false},
            {text:"32",correct: true},
            {text:"54",correct: false},
            {text:"60",correct: false},
        ]
    },
    {
        question:"First Indian to win an Oscar award?",
        answers:[
            {text:"Bhanu Athaiya", correct: true},
            {text:"AR Rahman",correct: false},
            {text:"Rasul Pookutty",correct: false},
            {text:"None of the Above",correct: false},
        ]
    },
    {
        question:"First Filmfare Award for best actor awarded to?",
        answers:[
            {text:"Dilip Kumar", correct: true},
            {text:"Ashok kumar",correct: false},
            {text:"Raj kapoor",correct: false},
            {text:"None of the above",correct: false},
        ]
    },
    {
        question:"Last film directed by Satyajit Ray?",
        answers:[
            {text:"bala", correct: false},
            {text:"Agantuk",correct: true},
            {text:"pikoo",correct: false},
            {text:"jana aranya",correct: false},
        ]
    },
    {
        question:"Film and Television Institute of Indian located at?",
        answers:[
            {text:"Mumbai", correct: false},
            {text:"Pune",correct: true},
            {text:"Kolkata",correct: false},
            {text:"Delhi",correct: false},
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