class Drops {
    constructor(x, y){
        var circ = {
            friction: 0.001,
            restitution: 0.1
        }
        this.body = Matter.Bodies.circle(x, y, 5, circ);
        World.add(world, this.body);
        this.radius = 5;
    }
    updateY(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)});
        }
    }
    display(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}