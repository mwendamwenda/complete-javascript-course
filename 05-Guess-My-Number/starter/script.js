'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


 let secretNumber = Math.trunc(Math.random()*20) + 1;

let  score = 20;

let highScore = 0;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);//we can store this into a variable so that when we click the input number will be retrieved
    console.log(guess,typeof guess);
    //when there is no input
    if(!guess) {
        document.querySelector('.message').textContent = 'No Number!';
        //when the player wins
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';

        document.querySelector('.number').textContent = secretNumber;


        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;



            //when score is wrong


        }else if(guess !== secretNumber){
            if(score > 1){
                document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low';
          score-- ;//which is equal to  score = score - 1
          document.querySelector('.score').textContent = score;
    
            }else{
                document.querySelector('.message').textContent = 'You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
        };
        


        //when the guess is too high
    // } else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too high!';
    //   score-- ;//which is equal to  score = score - 1
    //   document.querySelector('.score').textContent = score;

    //     }else{
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
        //when guess is too low
    }  else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low!';
      score-- ;//which is equal to  score = score - 1
      document.querySelector('.score').textContent = score;

        }else{
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
        

   }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = 'start guessing ....!';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';


});
