class Ground
{
    constructor(x,y,w,h)
    {
        var options = 
        {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(myWorld, this.body);
    }
    
    display()
    {
        push();
        fill("yellow");
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    }


}