let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));

minValue = minValue || -999;
maxValue = maxValue || 999;

minValue < -999 ? minValue = -999 : minValue;
maxValue > 999 ? maxValue = 999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

let orderNumberField = document.getElementById('orderNumberField');
orderNumberField.innerText = orderNumber;

let answerField = document.getElementById('answerField');
answerField.innerText = `${randomText()} ${answerNumber}?`;

function randomText() {
const phraseRandom = Math.round( Math.random() *2);
switch (phraseRandom) {
    case 0:
        text = 'Очень просто, это';
        break;
    case 1:
        text = 'Как два пальца... Это';
        break;
    case 2:
        text = 'Думаю';
        break;        
    }
    return text;
}

document.getElementById('btnRetry').addEventListener('click', function () {
    
    minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));

    minValue = minValue || -999;
    maxValue = maxValue || 999;
    
    minValue < -999 ? minValue = -999 : minValue;
    maxValue > 999 ? maxValue = 999 : maxValue;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
answerNumber  = Math.floor((minValue + maxValue) / 2);
orderNumber = 1;
gameRun = true;

orderNumberField = document.getElementById('orderNumberField');
orderNumberField.innerText = orderNumber;

answerField = document.getElementById('answerField');
answerField.innerText = `${randomText()} ${answerNumber}?`;

function randomText() {
const phraseRandom = Math.round( Math.random() *2);
switch (phraseRandom) {
    case 0:
        text = 'Очень просто, это';
        break;
    case 1:
        text = 'Как два пальца... Это';
        break;
    case 2:
        text = 'Думаю';
        break;        
    }  
return text;
}
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F47A}`:
                `Я сдаюсь..\n\u{1F480}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${randomText()} ${answerNumber}?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F47A}`:
                `Я сдаюсь..\n\u{1F480}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${randomText()} ${answerNumber}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = `${randomText()}!`;

function randomText() {
const phraseRandom = Math.round( Math.random() *2);
switch (phraseRandom) {
    case 0:
        text = 'Я всегда угадываю \n\u{1F481}';
        break;
    case 1:
        text = 'Проще простого \n\u{1F913}';
        break;
    case 2:
        text = 'Я бест оф the бест \n\u{1F63C}';
        break;        
    }  
return text;
}
        gameRun = false;
    }
})