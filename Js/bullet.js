class Bullet{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element=this.createBullet();;
    }
    createBullet(){
        let bullet = document.createElement('div');
        bullet.style.width = '20px';
        bullet.style.height = '20px';
        bullet.style.position = 'absolute';
        bullet.style.left = this.x + 'px';
        bullet.style.top = this.y + 'px';
        bullet.style.background = "url('./Img/bullet.png')";
        bullet.style.backgroundPosition = '0px 0px';
        gameWrap.appendChild(bullet);
        return bullet;
    }

    updatePosition(){
        this.y -= 2;
        this.element.style.top = this.y + 'px';
        if (this.y <= 0) {
            allBullets.splice(allBullets.indexOf(this),1);
            this.kill()
        }
    }
    kill(){
        gameWrap.removeChild(this.element);
        delete this;
    }
}