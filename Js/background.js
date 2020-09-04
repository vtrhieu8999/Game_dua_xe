var body = document.getElementsByTagName('body')[0];
var gameWrap = document.getElementById('main-wrapper');

gameWrap.style.width = '840px';
gameWrap.style.height = '500px';
gameWrap.style.position = 'relative';
gameWrap.style.background = "url('./Img/background.png')";
gameWrap.style.backgorundRepeat = 'repeat-y';
gameWrap.style.overflow = 'hidden';
// mainWrap.appendChild(gameWrap);

var resetButton = document.createElement('button');
resetButton.innerHTML = 'RESET';
resetButton.onclick = function(){
    window.location.reload();
};
gameWrap.appendChild(resetButton);

// Speed Controller, less its value, faster the game
var speed = 12;

// Move background
var increment=0;
var backgroundInterval = setInterval(function(){
    // Move background
    gameWrap.style.backgroundPosition = '0px '+increment+'px';
    // Move Obstavles
    // allObstacles.forEach(function(obs){
    //     obs.updatePosition();
    // });
    // // Move Foods
    // allFoods.forEach(function(food){
    //     food.updatePosition();
    // });
    // // Move Bullets
    for(i=0; i<allBullets.length; i++){
        allBullets[i].updatePosition();
    }
    // // End game when either car hits an obstacle
    // allObstacles.forEach(function(obs){
    //     if (checkCollision(obs, car1)) {
    //         gameOver();
    //     }
    //     if (checkCollision(obs, car2)) {
    //         gameOver();
    //     }
    //     // Destroy obstacle when it is hit by a bullet
    //     // Destroy the bullet too
    //     allBullets.forEach(function(bull){
    //         if (checkCollision(obs, bull)){
    //             obs.kill();
    //             allObstacles.splice(allObstacles.indexOf(obs),1);
    //             bull.kill();
    //             allBullets.splice(allBullets.indexOf(bull),1);
    //         }
    //     });
    increment += 2;
    }, 10);