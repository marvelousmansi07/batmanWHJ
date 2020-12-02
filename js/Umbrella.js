class Umbrella {
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.body = Matter.Bodies.circle(x, y, 50, options);
        World.add(world, this.body);
        this.radius = 50;
    }
    display(){
        fill("red");
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y + 70, 300, 300);
    }
}