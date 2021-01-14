class Bird extends Parent{
    constructor(x,y){
       super(x,y,30,30);  
       this.image = loadImage("sprites/bird.png");
    }
    display(){
     // rect();
        super.display();
    }  
}

/*class Bird{
  constructor(){
    this.body = Bodies.rectangle(20,20,20,20);
    World.add(world,this.body);
    this.image = loadImage("sprites/Bird.png");
  }
  display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
 // rect(pos.x,pos.y,this.width,this.height);
    image(this.image,pos.x,pos.y,this.width,this.height)
  }
}*/