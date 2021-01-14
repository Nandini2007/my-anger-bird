class Parent{
    constructor(){
    var opts ={
        isStatic : true
    }
    this.body = Bodies.rectangle(70,70,20,20,opts);
    this.image = loadImage("sprites/base.png");
    World.add(world,this.body);

}    
display(){
    var pos = this.body.position;
     image(this.image,pos.x,pos.y,this.width,this.height);
}
}