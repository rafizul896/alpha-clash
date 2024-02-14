function hiddenElementByID(element){
    const Element = document.getElementById(element);
    Element.classList.add('hidden');
}

function showElementByID(element) {
    const Element = document.getElementById(element);
    Element.classList.remove('hidden');
}

function letterBgColor(elementId){
    const elementID = document.getElementById(elementId);
    elementID.classList.add('bg-orange-400')
}

function getRandomLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const letter = letters.split('');
    
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const Letter = letter[index];
    return Letter;
}