class Car {
    constructor(x,y,src, speed) {
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src= src;
        this.speed= speed;
    }
    draw(canvas){
        let ctx = canvas.getContext("2d");
        ctx.drawImage(this.img, this.x, this.y, 50, 50);
    }
    move(a, w, s, d){
        if(controler.key[a]) {
            if(this.x>137) this.x -= this.speed;
        }
        if(controler.key[w]) {
            if(this.y>0) this.y -= this.speed;
        }
        if(controler.key[s]) {
            if(this.y<500-vehicleSize) this.y += this.speed;
        }
        if(controler.key[d]) {
            if(this.x<703-vehicleSize) this.x += this.speed;
        }
    }
}