class Particle{
    constructor(x,y) {
        var options = { 
         'friction':3,
        'density':1.0
       };
       this.r = 10;
       this.body = Bodies.circle(x, y, this.r, options);   
       World.add(world, this.body);

             }
             display()
             {
 this.color=color(random(206, 26, 134),random(242, 152, 16),random(4, 249, 245));
                var pos = this.body.position;
                var angle = this.body.angle;
                push();
                translate(pos.x, pos.y);
           rotate(angle);
           ellipseMode(RADIUS);
           ellipse(0,0,this.r,this.r);
       pop();
   }   
             }
        