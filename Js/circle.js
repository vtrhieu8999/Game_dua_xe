const vehicleSize = 50;
class Circle {
    constructor(x,y,radius,speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = getRandomColor();
        this.speed = speed;
    }

    draw(canvas){
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move(){
        this.y += this.speed;
        if(this.y - this.radius>= 500) {
            this.radius= 5+Math.floor(Math.random()*45);
            this.y= -this.radius;
            this.x= Math.random()*600;
            score++;
            document.getElementById('score').innerText= 'Your scores:'+ score;
        }
        checkCollision(this, car);
    }
}

function checkCollision(circle, vehicle){
    let radius= circle.radius;
    let condition1= (circle.x>=(vehicle.x-radius))  && (circle.x<=(vehicle.x+radius+vehicleSize)) && (circle.y>=vehicle.y) && (circle.y<=(vehicle.y+vehicleSize));
    let condition2= (circle.x>=vehicle.x) && (circle.x<=(vehicle.x+vehicleSize)) && (circle.y>=(vehicle.y-radius)) && (circle.y<=(vehicle.y+vehicleSize+radius));
    let condition3= Math.pow(circle.x-vehicle.x, 2)+Math.pow(circle.y-vehicle.y, 2) <= Math.pow(radius, 2);
    let condition4= Math.pow(circle.x-vehicle.x-vehicleSize, 2)+Math.pow(circle.y-vehicle.y, 2) <= Math.pow(radius, 2);
    let condition5= Math.pow(circle.x-vehicleSize-vehicle.x, 2)+Math.pow(circle.y-vehicle.y-vehicleSize, 2) <= Math.pow(radius, 2);
    let condition6= Math.pow(circle.x-vehicle.x, 2)+Math.pow(circle.y-vehicle.y-vehicleSize,2) <= Math.pow(radius, 2);
    if(condition1||condition2||condition3||condition4||condition5||condition6) {
        clearInterval(timer);
        return alert('ban da thua');
    }else return false;
}
function getRandomColor() {
    let number=+Math.floor(Math.random()*5);
    switch(number){
        case 0: return 'red';
        case 1: return 'yellow';
        case 2: return 'cyan';
        case 3: return 'blue';
        case 4: return 'magenta';
        default: return 'red';
    }
}