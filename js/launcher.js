class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }
    attach(body){
        this.throw.bodyA = body;
    }
    
    fly(){
        this.throw.bodyA = null;
    }

    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }

    display(){

    }
    
}