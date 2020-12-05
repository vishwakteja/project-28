class Mango{
constructor(x, y, width, height){
var options={
    isStatic:false,
            'restitution':0,
            'friction':1
}
this.body=Bodies.rectangle(x, y, width, height, options)
this.width=width;
this.height=height;
this.image=loadImage("Plucking mangoes/mango.png")


}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(RADIUS)
    fill(193, 27, 102);
    strokeWeight(4)
    stroke(193, 27, 102)
    image( this.image, 0, 0, this.width, this.height);
    pop();

}
}