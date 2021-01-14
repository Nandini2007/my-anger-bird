class Box{
    constructor(x,y){
        var opts ={
            friction : 3,
//restitution : 1.5,
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,90,90,opts);
        World.add(world,this.body)
        this.image = loadImage("sprites/wood1.png");
    }
    display(){
        var pos = this.body.position;
      //  rect(pos.x,pos.y,40,40)
        image(this.image,pos.x,pos.y,50,50)
    }
}