class moveCar{
    constructor() {
        this.key = [];
        for(let i=1; i<88; i++){
        this.key.push(false);
        }
    }
    move(i){
        this.key[i]= true;
    }
    stop(evt){
        this.key[i]= false;
    }
}
let controler= new moveCar();
function selectMove(evt){
    controler.key[evt.keyCode]= true;
}
function selectStop(evt){
    controler.key[evt.keyCode]= false;
}
function docReady(){

    window.addEventListener('keydown', shotBullet);
    window.addEventListener('keydown', selectMove);
    window.addEventListener('keyup', selectStop);
}
let allBullets = [];

function shotBullet(evt){
    switch (evt.keyCode){
        case 96:
            allBullets.push(new Bullet(car.x+25, car.y));
            break;
        default: return;
    }
}
