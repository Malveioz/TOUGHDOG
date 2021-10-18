var img = document.getElementById("doge1");
var count = document.getElementById("score");
var indonesiaScore = document.getElementById('score');
var score = 0;
var audio = new Audio('pop.mp3');

// mouseclick event
img.addEventListener("mousedown", function(){
    increaseScore();
    img.src = 'doge2.png';
    audio.play();
});
    
img.addEventListener("mouseup", function(){
    img.src = 'doge1.png';
    audio.play();
});

// touch event
img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'doge2.png';
    audio.play();
});

img.addEventListener("touchmove", function(){
    img.src = 'doge1.png';
     audio.play();
});


// Score on leaderboard

function increaseScore(){
    score++;
    
    count.innerHTML = score;
    indonesiaScore.innerHTML = score;
    
}