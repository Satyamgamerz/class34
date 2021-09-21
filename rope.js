class Rope{
    constructor(bodyA, pointB){
        var options = {
           bodyA : bodyA,
           pointB : pointB,
           length : 400,
           stiffness: 1.2,

        }
        this.pointB = pointB;
        this.rope = Constraint.create(options)
        //this.height= height;
        World.add(world,this.rope)
    }
    display(){
    var pointA = this.rope.bodyA.position
    var pointB = this.pointB
    push()
    strokeWeight(3)
    stroke("green")
    line (pointB.x,pointB.y,pointA.x,pointA.y)
    pop()
    }
}