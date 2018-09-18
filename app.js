let keyBoardLower = document.getElementById('keyboard-lower-container');
let keyBoardUpper = document.getElementById('keyboard-upper-container');
let sentenceDiv = document.getElementById('sentence');

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let currentSentence = 0;
sentenceDiv.textContent = sentences[currentSentence];
let letterMatch = 0;


document.addEventListener('keydown', (e) => {
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