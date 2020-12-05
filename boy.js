class Boy {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("plucking mangoes/boy.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //pos.x=mouseX
      //pos.y=mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("red");
      strokeWeight(4)
      stroke("blue")
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
  