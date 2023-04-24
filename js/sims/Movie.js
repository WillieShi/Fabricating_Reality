Loader.addToManifest(Loader.manifest,{
	mc: "assets/data_buying/mc.json",
	bob: "assets/data_buying/bob.json",
	mandy: "assets/data_buying/mandy.json"
 });

function Movie(config){
	console.log("test2")
	var self = this;
	self.id = config.id;
	
	// DOM
	self.dom = document.createElement("div");
	self.dom.className = "object";
	self.dom.style.left = config.x+"px";
	self.dom.style.top = config.y+"px";

	// APP
	var app = new PIXI.Application(700, 500, {transparent:true, resolution:2});
	self.app = app;
	app.view.style.width = 700;
	app.view.style.height = 500;
	self.dom.appendChild(app.view);

	///////////////////////////////////////////////
	//////////////// THE GRAPHICS /////////////////
	///////////////////////////////////////////////

	//Characters
	self.mc= _makeMovieClip("mc", {anchorX:-1.1, anchorY:-.3, scale:0.5});
	app.stage.addChild(self.mc);

	self.bob= _makeMovieClip("bob", {anchorX:0, anchorY:-.65, scale:0.5});
	app.stage.addChild(self.bob);

	self.bob= _makeMovieClip("mandy", {anchorX:-2, anchorY:-.65, scale:0.5});
	app.stage.addChild(self.bob);
	
	//Profile Boxes
	var profiles = new PIXI.Container();
	var graphics = new PIXI.Graphics();
	graphics.beginFill(0x1099bb);
	graphics.lineStyle(2, 0x000000);
	graphics.drawRect(0, 0, 200, 300);
	graphics.drawRect(500, 0, 200, 300);
	graphics.beginFill(0x000000);
	graphics.lineStyle(2, 0x000000);
	graphics.drawRect(0, 0, 200, 40);
	graphics.drawRect(500, 0, 200, 40);
    var style = new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: 14,
        fill: "#ffffff"
    });
	var textObj = new PIXI.Text("Mandy", style);
    textObj.x = 70;
    textObj.y = 10;

	var textObj2 = new PIXI.Text("Bob", style);
    textObj2.x = 580;
    textObj2.y = 10;

	profiles.addChild(graphics);
	profiles.addChild(textObj);
	profiles.addChild(textObj2);
	app.stage.addChild(profiles);


	var wordBubbleContainer = createWordBubbleContainer(300, 100, "Military");
	var wordBubbleContainer2 = createWordBubbleContainer(400, 100, "Liberal");
	var wordBubbleContainer3 = createWordBubbleContainer(200, 100, "Millenial");
	var wordBubbleContainer4 = createWordBubbleContainer(250, 150, "Boomer");
	var wordBubbleContainer5 = createWordBubbleContainer(350, 150, "Parent");
	app.stage.addChild(wordBubbleContainer);
	app.stage.addChild(wordBubbleContainer2);
	app.stage.addChild(wordBubbleContainer3);
	app.stage.addChild(wordBubbleContainer4);
	app.stage.addChild(wordBubbleContainer5);
	
	self.add = function(){
		_add(self);
	};
	self.remove = function(){
		app.destroy();
		_remove(self);
	};

}
function MainChar(config){
	var self = this;
	self.config = config;

	// Peep
	self.graphics = new PIXI.Container();
	var g = self.graphics;

	// Animation
	self.animated = new PIXI.Container();
	g.addChild(self.animated);

	// Body
	self.body = _makeMovieClip("mc", {scale:0.5, anchorX:0.5, anchorY:0.95});
	self.animated.addChild(self.body);

}

function createWordBubbleContainer(x, y, text) {
    var wordBubbleContainer = new PIXI.Container();

    var graphics = new PIXI.Graphics();

    // set the line style and fill color
    graphics.lineStyle(2, 0x000000);
    graphics.beginFill(0xffffff);

    // draw the word bubble shape
    graphics.drawRoundedRect(0, 0, 90, 40, 10);
    graphics.endFill();

    // create a new text object to display the text inside the word bubble
    var style = new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: 14,
        fill: "#000000"
    });

    var textObj = new PIXI.Text(text, style);
    textObj.x = 10;
    textObj.y = 10;

    // create a new container to hold the graphics and text objects
    var container = new PIXI.Container();
    container.addChild(graphics);
    container.addChild(textObj);

    // set the container's position
    container.x = x;
    container.y = y;

    // enable dragging of the container with mouse click
    container.interactive = true;
    container.buttonMode = true;

    container.on('mousedown', function(event) {
        this.dragging = true;
        this.data = event.data;
    });

    container.on('mouseup', function() {
        this.dragging = false;
        this.data = null;
    });

    container.on('mousemove', function() {
        if (this.dragging) {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x - this.width/2;
            this.y = newPosition.y - this.height/2;
        }
    });

    // add the container to the word bubble container
    wordBubbleContainer.addChild(container);

    return wordBubbleContainer;
}
