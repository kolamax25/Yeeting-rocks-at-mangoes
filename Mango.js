class Mango {
    constructor(x, y) {
      var options = {
          
          'isStatic': true
          
      }
      this.image = loadImage("sprites/mango.png");
      this.x=x;
      this.y=y;
      this.r= 20
      this.body = Bodies.circle(x, y, 20, options);
      
      World.add(world, this.body);
    }
    display(){

      var pos = this.body.position;
      push();
      imageMode(CENTER);
      ellipseMode(RADIUS)
      strokeWeight(4);
     
      image(this.image,pos.x , pos.y, this.r*4, this.r*4);
      pop();
    }
    
    
    
}
  