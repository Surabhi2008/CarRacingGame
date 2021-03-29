var hball,database;
var position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();

    hball = createSprite(250,250,10,10);
    hball.shapeColor = "red";

    var hballposition=database.ref('ball/position')
    hballposition.on("value", readposition,showerror)
}

function draw(){
    background("white");

  //  if(position!== undefined){

    
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
 //  }
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readposition(data){
    position=data.val()
    console.log(position)
    hball.x=position.x
    hball.y=position.y
}

function writeposition(x,y){
     database.ref('ball/position').set({
         'x' : position.x+x,
         'y' : position.y+y
     })

}

function showerror(){
    console.log("error in database")
}
