var user_data;
var socket = io.connect('http://localhost:3000')
socket.on('rfid', function(data){
    setTimeout(function() { window.location = "http://localhost:8000"}, 2000)
})
function preload() {
    bg_image = loadImage('static/paper2.jpg');
    folder = loadImage('static/manilla.png');
    card = loadImage('static/timecard.png');
    coffee_notes = loadImage('static/cofnotes.png');
    //Eventually this should use the URL param to make an AJAX call
    user_data = {
        name: "Duggy McSwisher Johnson",
        cons: ["said they disliked work 87 times and one time they went to a store and they stole a whole bunch of stuff!", 
                "used the word 'late' 150 times",
                "shares articles about communism and sometimes he farts and junk, and what? what if this garbage was an ACTUAL 10 year old?",
                "said drunk 265 times"],
        pros: ["talked about biking 31 times and had a bike when he was a kid, but then he lost it in another shark accident.",
                "mentioned coffee 129 times",
                "said they love technology, and I bet you that technology loves them back! How cute",
                "shared an article about career achievement, but has never even tried to make an effort! What a joke. My god. AHHHH... AHHHHHHHHHH"]
    };
    handy = loadFont('static/type2.ttf');

}

function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('processing');
    textFont(handy);
	fill('rgba(0,0,0,0.75)');
	noStroke();
    image(folder, .15*windowWidth, .01*windowHeight);
    image(bg_image, .2*windowWidth, .2*windowHeight, .6*windowWidth, .8*windowHeight);
	cardWidth = windowWidth/4.6;
	cardHeight = card.height/(card.width/(cardWidth));
	image(card, .02*windowWidth, .25*windowHeight, cardWidth, cardHeight);
	coffeeWidth = windowWidth/4.85;
	coffeeHeight = coffee_notes.height/(coffee_notes.width/(coffeeWidth));
    image(coffee_notes, .7*windowWidth, .09*windowHeight, coffeeWidth, coffeeHeight);
    textStyle(BOLD);
    textSize(42);
    text(user_data.name,.25*windowWidth, .27*windowHeight );
    textStyle(ITALIC);
    textSize(32);
    text("Positive:", .25*windowWidth, .35*windowHeight);
    textSize(26);
    textStyle(NORMAL);
	var prosList = "";
    for (var i = 0; i < user_data.pros.length; i++){
		prosList = prosList + "..." + user_data.pros[i] + "\n";
    }
	text(prosList, windowWidth*.25, windowHeight*.37, windowWidth*.5, windowHeight - windowHeight*.8)
	
    textSize(36);
    text("Concerns:", .25*windowWidth, .65*windowHeight);
    textSize(26);
	var consList = "";
    for (var i = 0; i < user_data.cons.length; i++){
		consList = consList + "..." + user_data.cons[i] + "\n";
    }
	text(consList, windowWidth*.25, windowHeight*.67, windowWidth*.5, windowHeight - windowHeight*.68)
}

function draw() {
}    
