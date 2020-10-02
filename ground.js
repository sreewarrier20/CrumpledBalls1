class ground{
    constructor(x,y,width,height){
        this.object=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        World.add(world,this.object);
    }

    display(){
        push ();
        translate(this.object.position.x,this.object.position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}