const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit);

let var1 = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max)
    }
    
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value
};

function handleSubmit(e) {
    e.preventDefault();
    console.log('CHAMOU CERTINHO')
    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite algum valor!')
        return;
    };

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if(numberDrawn == kick) {
        playAgain();
        var1.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0,4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        var1.style.color = '#fff';
        clear();
    } else if(numberDrawn > kick) {
        var1.innerHTML = 'O número é maior!';
        var1.result.color = '#de4251';
        clear();
    } else if(numberDrawn < kick) {
        var1.innerHTML = 'O número é menor!';
        var1.result.color = '#de4251';
        clear();
    }
};

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';

};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
};