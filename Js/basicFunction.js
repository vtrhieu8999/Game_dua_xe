function checkCollision(circle, vehicle, size){
    let radius= circle.radius;
    let condition1= (circle.x>=(vehicle.x-radius))  && (circle.x<=(vehicle.x+radius+size)) && (circle.y>=vehicle.y) && (circle.y<=(vehicle.y+size));
    let condition2= (circle.x>=vehicle.x) && (circle.x<=(vehicle.x+size)) && (circle.y>=(vehicle.y-radius)) && (circle.y<=(vehicle.y+size+radius));
    let condition3= Math.pow(circle.x-vehicle.x, 2)+Math.pow(circle.y-vehicle.y, 2) <= Math.pow(radius, 2);
    let condition4= Math.pow(circle.x-vehicle.x-size, 2)+Math.pow(circle.y-vehicle.y, 2) <= Math.pow(radius, 2);
    let condition5= Math.pow(circle.x-size-vehicle.x, 2)+Math.pow(circle.y-vehicle.y-size, 2) <= Math.pow(radius, 2);
    let condition6= Math.pow(circle.x-vehicle.x, 2)+Math.pow(circle.y-vehicle.y-size,2) <= Math.pow(radius, 2);
    if(condition1||condition2||condition3||condition4||condition5||condition6) {
        return true;
    }else return false;
}