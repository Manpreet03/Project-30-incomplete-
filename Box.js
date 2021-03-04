class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':1.0,
          'density':1.0
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height
      this.color = color(random(10,255), random(10,255), random(10,255));
      
      World.add(world, this.body);
    }
    display(){
     

     console.log(this.body.speed);

     // if(this.body.speed < 3){
        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke(this.color);
        fill("black");
        rect(0, 0, this.width, this.height);
        pop();

    // }

    // else{
        //World.remove(world, this.body);
     // }
      
    }
  };
  