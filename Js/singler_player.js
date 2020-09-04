let canvas = document.getElementById("myCanvas");
let score= +0;
document.getElementById('score').innerText= 'Your scores:'+ score;
let circles = [];
let car= new Car(300, 400, 'Img/car.png', 2);
function animation() {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    car.move(37, 38, 40, 39);
    car.draw(canvas);
    for (let i = 0; i < circles.length; i++) {
        circles[i].move();
        circles[i].draw(canvas);
        if(checkCollision(circles[i], car, vehicleSize)){
            clearInterval(timer);
            alert("Game over");
        }
        for(j=0; j<allBullets.length; j++) {
            let bull=allBullets[j];
            if(checkCollision(circles[i], bull, 20)) {
                bull.kill();
                circles[i].radius= 5+Math.floor(Math.random()*45);
                circles[i].y= -this.radius;
                circles[i].x= Math.random()*566+137;
                circles[i].speed= Math.random()+1;
            }
        }
    }


}
function createCircle(number){
    for (let i = 0; i < number; i++) {
        let circle = new Circle(Math.random()*566+137,0,5+Math.floor(Math.random()*45),Math.random()+1);
        circles.push(circle);
    }
}
createCircle(9);
let timer =setInterval(animation,10);