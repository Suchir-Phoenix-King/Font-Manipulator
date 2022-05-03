difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,450);
    canvas.position(570, 100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#131111");
    textSize(difference);
    fill("D21404");
    text("Fang Rules", 50, 400);
}

function modelLoaded() {
    console.log("PoseNet Is Intialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX);
    }
}