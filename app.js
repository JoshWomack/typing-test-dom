let keyBoardLower = document.getElementById('keyboard-lower-container');
let keyBoardUpper = document.getElementById('keyboard-upper-container');
let sentenceDiv = document.getElementById('sentence');

let highlighter = document.getElementById('yellow-block');

let feedback = document.getElementById('feedback');

// let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot'];

let currentSentence = 0;
sentenceDiv.textContent = sentences[currentSentence];
let letterMatch = 0;

let left = 20;


document.body.addEventListener('keydown', (e) => {
    if (e.keyCode == 32) {
        e.preventDefault();
    }
     let keyPressed = e.key.charCodeAt();
     let keySpanDown = document.getElementById(`${keyPressed}`)
    if (e.key == 'Shift') {
    keyBoardUpper.style.display = 'block';
    keyBoardLower.style.display = 'none';
    } else {
        keySpanDown.style.backgroundColor = 'yellow';
    }

    let currentLetter = sentences[currentSentence][letterMatch].charCodeAt();
    console.log(currentLetter);


    if (keyPressed === currentLetter) {
        letterMatch = letterMatch + 1;
        left += 17;
        highlighter.style.left = `${left}px`;
        console.log(letterMatch);
        console.log(left);
        feedback.textContent = 'CHECK';
        
        if (letterMatch === sentences[currentSentence].length) {
            if (currentSentence + 1 == sentences.length) {
                console.log('Game complte');
                currentSentence = 0;
                letterMatch = 0;
                sentenceDiv.textContent = sentences[currentSentence];
                left = 20;
                highlighter.style.left = `${left}px`;
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
        feedback.textContent = 'X';
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