/*class Log{
    constructor(x,y,width,height,angle){
        var opts ={
            isStatic : true
        }
    this.body = Bodies.rectangle(x,y,width,height,opts);
    this.width = width;
    this.height = height;
    Matter.Body.setAngle(this.body,angle);
    
    this.image = loadImage("sprites/wood2.png")
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER); 
        image(this.image,pos.x,pos.y,this.width,this.height)
        pop();
    }
}*/

class Log{
    constructor(x,y,width,height){
        var opts ={
            isStatic : true
        }
    this.body = Bodies.rectangle(x,y,width,height,opts);
    this.width = width;
    this.height = height;
 //   Matter.Body.setAngle(this.body, angle);
    this.image = loadImage("sprites/wood2.png")
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
       // var angle = this.body.angle;
       // push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER); 
        image(this.image,pos.x,pos.y,this.width,this.height)
       // pop();
    }
}