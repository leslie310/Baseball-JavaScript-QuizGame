var startBtn = document.querySelector("#startButton");
var resetBtn = document.querySelector("#resetButton");
var questionEl = document.querySelector("#questionDisplay");
var btn1El = document.querySelector("#button1");
var btn2El = document.querySelector("#button2");
var btn3El = document.querySelector("#button3");
var btn4El = document.querySelector("#button4");
var timeRemaining = 35;
var timerCountdown = document.querySelector("#timeRemaining");
var winSpan = document.querySelector("#winSpan");
var currentQuestion = 0;
var scoreUp = 0;
var buttons = document.querySelector(".answers");
var answerCheck = document.querySelector("#validAnswer");


//questions array

var questions = [
   { 
        question: "How  many innings are played in baseball?",
        answers: [
            '8', 
            '5', 
            '9', 
            '12'
        ],
        correctAnswer: "9",
    },
    

   {    
        question:"How  many games are played in a season?",
        answers: [
            "50",  
            "162",
             "25", 
             "90"
        ],
        correctAnswer: "162",
    },

   { 
        question:"What team won the 2020 World Series ?",
        answers: [
            'Los Angeles Dodgers', 
            ' New York Yankees' , 
            "Seattle Mariners",
             " Boston Red Sox"
        ],
        correctAnswer: " Los Angeles Dodgers",
   },    
    
   { 
        question:"Who wears number 38 in the Seattle Mariners?",
        answers: [
            ' Robbie Ray',
             'Kyle Lewis', 
             'Carlos Santana ', 
             ' Eugenio Suarez'
        ],
        correctAnswer: " Robby Ray",
        
   }
];

//start game
startBtn.addEventListener("click", startGame)
function startGame(){
    countdown();
    if (currentQuestion == 0) {
    questionEl.textContent = questions[0].question;
    btn1El.textContent = questions[0].answers[0];
    btn2El.textContent = questions[0].answers[1];
    btn3El.textContent = questions[0].answers[2];
    btn4El.textContent = questions[0].answers[3];
    }
    localStorage.getItem("score");
}


 //start timer// start time at 35
   
function countdown() {
    var timeInterval = setInterval(function() {
        timeRemaining--;
        timerCountdown.textContent = timeRemaining + ' seconds remaining';
        if(timeLeft > 1) {
            if(currentQuestion > 1 && timeRemaining > 0) {
                clearInterval(timeInterval);
                endGame();
            }
        } else {
            timerCountdown.textContent = "OOPS time is up!";
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}

    //loadQuestion()
    buttons.addEventListener("click", nextQuestion)
    function nextQuestion(event){
        if(event.target.textContent===questions[currentQuestion].correctAnswer){
            console.log(questions[currentQuestion].correctAnswer);
            scoreUp++;
            winSpan.textContent = scoreUp
        } else {
            timeLeft = (timeLeft - 5);
        }
    
       if (currentQuestion < 3) {
        currentQuestion++;
        answerCheck.textContent="";
        questionEl.textContent = questions[currentQuestion].question;
        btn1El.textContent = questions[currentQuestion].answers[0];
        btn2El.textContent = questions[currentQuestion].answers[1];
        btn3El.textContent = questions[currentQuestion].answers[2];
        btn4El.textContent = questions[currentQuestion].answers[3];
        return;
        } else {
            endGame();
        }
    }

    //prompt for user initials
var createHighscore = function(event) {
    event.preventDefault()
    var initials = document.querySelector('#initials').value;
    if (!initials) {
        alert('Please enter your initials');
        return;
    }

     formInitials.reset();

     var Highscore = {
        initials: initials,
         score: score
    }
}

// Resets page to reload position
resetBtn.addEventListener("click", function() {
    wins = 0;
    location.reload();
})
 // save to ls
 function endGame() {
    var initials = prompt("Please type your initials below to save your score!");
    questionEl.textContent = "High score for " + initials + " is: " + scoreUp;
    questionEl.setAttribute("style", "font-size:70px");
    answerCheck.textContent = "Nice job!"
    startBtn.style.display = "none";
    buttons.style.display = "none";
    document.getElementById("timeRemaining").style.display = "none";
    document.getElementById("results").style.display = "none";
    localStorage.setItem("score", scoreUp);
    localStorage.setItem("initials", initials);
}