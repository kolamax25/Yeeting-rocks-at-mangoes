class Stone {
    constructor(x, y, r) {
      var options = {
          
          'restitution':0.3,
          'friction':0.5,
          'density':0.3
          
      }
      this.image = loadImage("sprites/stone.png");
      this.x=x;
      this.y=y;
      this.r= r
      this.body = Bodies.circle(x, y, r, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS)
      strokeWeight(4);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r*3, this.r*3);
      pop();
    }
    
    
    
}
  