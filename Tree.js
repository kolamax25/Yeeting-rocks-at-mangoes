class Tree {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.image = loadImage("sprites/tree.png");
     World.add(world, this.body);
    }
    
    display(){
      
      push();
      
      imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
      pop();
    }
  };
  