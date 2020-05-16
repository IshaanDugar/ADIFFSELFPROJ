var bouncer, bouncer_img;
var ball, ball_img;
var ballGrp;
var bounce;

var score = 0;

function setup(){
    createCanvas(800, 800);
    
    bouncer = createSprite(20, 780, 60, 10);

    bounce = createSprite(400, 600, 10, 10);
    bounce.velocityX = 2;
    bounce.velocityY = -2;

    ballGrp = createGroup();

    for(var i = 10; i<800; i = i + 20){
        ball = createSprite(i, 100, 10, 10);

        ballGrp.add(ball);
    }

    for(var i = 10; i<800; i = i + 20){
        ball = createSprite(i, 125, 10, 10);

        ballGrp.add(ball);
    }

    for(var i = 10; i<800; i = i + 20){
        ball = createSprite(i, 150, 10, 10);

        ballGrp.add(ball);
    }

    for(var i = 10; i<800; i = i + 20){
        ball = createSprite(i, 175, 10, 10);

        ballGrp.add(ball);
    }
    for(var i = 10; i<800; i = i + 20){
        ball = createSprite(i, 200, 10, 10);

        ballGrp.add(ball);
    }
    for(var i = 10; i<800; i = i + 20){
        ball = createSprite(i, 225, 10, 10);

        ballGrp.add(ball);
    }
    for(var i = 10; i<800; i = i + 20){
        ball = createSprite(i, 250, 10, 10);

        ballGrp.add(ball);
    }
    for(var i = 10; i<800; i = i + 20){
        ball = createSprite(i, 275, 10, 10);

        ballGrp.add(ball);
    }

    for(var i = 10; i<800; i = i + 20){
        ball = createSprite(i, 300, 10, 10);

        ballGrp.add(ball);
    }

}

function draw(){

    textSize(30);
    text('Score is: ' + score, 500, 600);

    background('white');
    bouncer.x = mouseX;

    bounce.bounceOff(bouncer);

    // bounce.bounceOff(TOP_EDGE);
    // bounce.bounceOff(LEFT_EDGE);
    // bounce.bounceOff(RIGHT_EDGE);

    if(ballGrp.isTouching(bounce)){
        bounce.bounceOff(ballGrp);
        ball.visible = false;
        score++;
    }

    drawSprites();
}