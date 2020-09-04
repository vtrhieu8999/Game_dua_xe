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
            this.x= Math.random()*566+137;
            this.speed= Math.random()+1;
            score++;
            document.getElementById('score').innerText= 'Your scores:'+ score;
        }

    }
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