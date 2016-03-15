var user_data;

function preload() {
    imgDC = loadImage('static/Yellow-Tree-logo.png');
    bg_image = loadImage('static/paper2.jpg')
    //Eventually this should use the URL param to make an AJAX call
    user_data = {
        name: "Duggy McSwisher",
        cons: ["said they disliked work 87 times", 
                "used the word 'late' 150 times",
                "shares articles about communism",
                "said drunk 265 times"],
        pros: ["talked about biking 31 times",
                "mentioned coffee 129 times",
                "said they love technology",
                "shared an article about career achievement"]
    };
    handy = loadFont('static/BallpointprintRegular.ttf');

}

function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('processing');
    textFont(handy);
}

function draw() {
    background(bg_image);
    image(imgDC, .1*windowWidth, .05*windowHeight, windowWidth*.1, windowHeight*.2);
    textStyle(BOLD);
    textSize(42);
    text(user_data.name,.3*windowWidth, .15*windowHeight );
    textStyle(ITALIC);
    textSize(36);
    text("Concerns:", .3*windowWidth, .23*windowHeight);
    textSize(30);
    textStyle(NORMAL);
    for (var i = 0; i < user_data.cons.length; i++){
        text("..." + user_data.cons[i], windowWidth*.4, windowHeight*.27 + (windowHeight*.05*i));
    }

    textSize(32);
    text("Positive:", .3*windowWidth, .5*windowHeight);
    textSize(26);
    for (var i = 0; i < user_data.pros.length; i++){
        text("..." + user_data.pros[i], windowWidth*.4, windowHeight*.55 + (windowHeight*.05*i));
    }
}
