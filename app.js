
let a = Math.floor(Math.random() * 31);
let guess = 1;

document.getElementById('submitNum').onclick = function numberGame (){

    let b = document.getElementById('guessNum').value;

    if (b > 31 || b < 0){
        const answer = document.querySelector('#answer');
        answer.textContent = 'OOPS TRY AGAIN WITH A VALID NUMBER (1-30)!';
        answer.style.color = 'yellow';
        guess++;
    } else if (a == b) {
        guess++;
        const answer = document.querySelector('#answer');
        answer.textContent = `Right Answer! You guessed it in ${guess} tries. Good Job!! 🎉`;
        answer.style.color = 'aliceblue';
    } else if ( a > b) {
        const answer = document.querySelector('#answer');
        answer.textContent = 'OOPS SORRY!! TRY A GREATER NUMBER🤚';
        guess++;
        answer.style.color = 'red';
    } else if (a < b) {
        const answer = document.querySelector('#answer');
        answer.textContent = 'OOPS SORRY!! TRY A SMALLER NUMBER🤏';
        guess++;
        answer.style.color = 'orange';
    } 
}





