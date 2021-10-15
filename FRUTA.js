class FRUTA {
    constructor (x,y,name){
        this.x = x;
        this.y = y;
        this.name = name;
    }
    printFruit(){
        fill(255,0,0);
        ellipse(this.x,this.y,40,40);
    }
    printName(){
        console.log(this.name);
        
    }
}