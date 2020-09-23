var timer= document.querySelector("#time");
var score= 0;
var secondsLeft= 60;
var i=0;
var messageDiv = document.querySelector("#intro");
var storedScores;
var scoreList = [];
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");


function setTime() {
 var timerInterval= setInterval(function(){
 secondsLeft--;
 timer.textContent = "Timer" + secondsLeft;

 if (secondsLeft === 0){
     clearInterval(timerInterval);
     alert("Times Up");
     endQuestions();
 }

 else if (i === questions.length){
      clearInterval(timerInterval);
 }
}, 1000)
return (score)
 }
 

function setQuestions(){
   choice1.hidden = false;
   choice2.hidden = false;
   choice3.hidden = false;
   choice4.hidden = false;


   document.getElementById("startButton").hidden = true;
     if(i === questions.length){
endQuestions();

     }

     else {

        document.getElementById("question").textContent = questions[i]["theQuestion"];
        document.getElementById("choice1").textContent = questions[i]["options"][0];
        document.getElementById("choice2").textContent = questions[i]["options"][1];
        document.getElementById("choice3").textContent = questions[i]["options"][2];
        document.getElementById("choice4").textContent = questions[i]["options"][3];





     }
}


document.getElementById("startButton").addEventListener("click", setQuestions);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function() {
    messageDiv.textContent = "";
});

choice1.hidden = true;
choice2.hidden = true;
choice3.hidden = true;
choice4.hidden = true;

document.getElementById("choice1").addEventListener("click", function(){
    if (questions[i]["options"][0]===questions[i]["answer"]) {
        messageDiv.textContent = "Correct!"; score ++;
        
        }
        else { messageDiv.textContent = "Wrong!"; 
        secondsLeft-= 10;

    

    i++;
 

}
document.getElementById("choice2").addEventListener("click",function(){
    if (questions[i]["options"][1]===questions[i]["answer"]){
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
   
})
document.getElementById("choice3").addEventListener("click", function () {
    if (questions[i]["options"][2] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
      
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
        
    }
    i++;
    
})

document.getElementById("choice4").addEventListener("click", function () {
    if (questions[i]["options"][3] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
        
    }
    i++;
   

   
    
}
