class Package {
    constructor (x,y){
        var options = {
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1.0,
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        
      //  world.add(world,this.body);

    }
       diaplay(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       fill("brown");
       rect(0,0,this.width,this.height);
       pop();
       }
 
}



