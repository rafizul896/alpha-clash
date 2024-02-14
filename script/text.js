// function play(){
//     const homeSection = document.getElementById('home');
//     // home.classList.add('hidden') // rules => 01;
//     homeSection.style.display = 'none'; // rules => 02;

//     const playGroundSection = document.getElementById('play-ground');
//     // playGroundSection.style.display = 'block'; // 01
//     playGroundSection.classList.remove('hidden'); // 02
// }

function continueGame(){
    const alphabet = getRandomLetter();
    const display = document.getElementById('display');
    display.innerText = alphabet;
    letterBgColor(alphabet);
}

function play(){
    hiddenElementByID('home');
    showElementByID('play-ground');
    continueGame();
}