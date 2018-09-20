let keyBoardLower = document.getElementById('keyboard-lower-container');
let keyBoardUpper = document.getElementById('keyboard-upper-container');
let sentenceDiv = document.getElementById('sentence');
let highlighter = document.getElementById('yellow-block');
let feedback = document.getElementById('feedback');

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];


let currentSentence = 0;
sentenceDiv.textContent = sentences[currentSentence];
let letterMatch = 0;

let left = 20;

let start = 0;
let gameOver = 0;

let startTime;
let mistakes = 0;

document.body.addEventListener('keydown', (e) => {
    if (gameOver === 1) {
        e.preventDefault();
        gameOver = 0;
        feedback.textContent = '';
        return;
    }

    if (start === 0) {
        startTime = new Date();
        console.log(startTime);
        start += 1;
    }

    if (e.keyCode == 32) {
        e.preventDefault();
    }
     let keyPressed = e.key.charCodeAt();
     let keySpanDown = document.getElementById(`${keyPressed}`)
    if (e.key == 'Shift') {
    keyBoardUpper.style.display = 'block';
    keyBoardLower.style.display = 'none';
    return;
    } else {
        keySpanDown.style.backgroundColor = 'yellow';
    }

    let currentLetter = sentences[currentSentence][letterMatch].charCodeAt();

    // key matches current required character
    if (keyPressed === currentLetter) {
        letterMatch = letterMatch + 1;
        left += 17;
        highlighter.style.left = `${left}px`;
        feedback.innerHTML = '<i class="glyphicon glyphicon-ok"></i>';
        
        //check the number of matched letters to see if the current sentence has been completed
        if (letterMatch === sentences[currentSentence].length) {
            
            //check if it is the last sentence and reset everything if it is
            if (currentSentence + 1 == sentences.length) {
                console.log('Game complete');
                console.log(mistakes);
                currentSentence = 0;
                letterMatch = 0;
                sentenceDiv.textContent = sentences[currentSentence];
                left = 20;
                highlighter.style.left = `${left}px`;
                start = 0;
                endTime = new Date();
                console.log(endTime);
                feedback.textContent = `Words per minute: ${(54 / ((endTime - startTime) * 0.00001667) - 2 * mistakes).toFixed(0)}.  Press a key if you'd like to play again`;
                mistakes = 0;
                gameOver = 1;
                return;
            }
            currentSentence += 1;
            sentenceDiv.textContent = sentences[currentSentence];
            letterMatch = 0;
            left = 20;
            highlighter.style.left = `${left}px`;
            feedback.textContent = '';
        }
    } else {
        feedback.innerHTML = '<i class="glyphicon glyphicon-remove"></i>';
        mistakes += 1;
        console.log(mistakes);
    }
});

document.body.addEventListener('keyup', (e) => {
    let keyUnpressed = e.key.charCodeAt();
    let keySpanUp = document.getElementById(`${keyUnpressed}`)
    if (e.key == 'Shift') {
    keyBoardUpper.style.display = 'none';
    keyBoardLower.style.display = 'block';
    }

    keySpanUp.style.backgroundColor = '#f5f5f5';

});












