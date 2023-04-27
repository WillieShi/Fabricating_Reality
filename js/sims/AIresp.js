Loader.addToManifest(Loader.manifest,{
	law: "assets/ai_suprise/law.json",
	evil: "assets/ai_suprise/evil.json",
	press: "assets/ai_suprise/press.json",
    puppet: "assets/ai_suprise/puppet.json"
 });

function Surprise(config){
	var self = this;
	self.id = config.id;
	
	// DOM
	self.dom = document.createElement("div");
	self.dom.className = "object";
	self.dom.style.left = config.x+"px";
	self.dom.style.top = config.y+"px";

	// APP
	var app = new PIXI.Application(700, 350, {transparent:true, resolution:2});
	self.app = app;
	app.view.style.width = 700;
	app.view.style.height = 350;
	self.dom.appendChild(app.view);

	///////////////////////////////////////////////
	//////////////// THE GRAPHICS /////////////////
	///////////////////////////////////////////////

	//Characters
	self.puppet = _makeMovieClip("puppet", {anchorX:-.3, anchorY:-.1, scale:0.75});
	app.stage.addChild(self.puppet);
	
	
	self.add = function(){
		_add(self);
	};
	self.remove = function(){
		app.destroy();
		_remove(self);
	};

}

function SpeechBubble(config){
	var self = this;
	self.id = config.id;
	
	// DOM
	self.dom = document.createElement("div");
	self.dom.className = "object";
	self.dom.style.left = config.x+"px";
	self.dom.style.top = config.y+"px";

	// APP
	var app = new PIXI.Application(700, 350, {transparent:true, resolution:2});
	self.app = app;
	app.view.style.width = 700;
	app.view.style.height = 500;
	self.dom.appendChild(app.view);

	// Create a new Container object
	const container = new PIXI.Container();

	// Create a new Text object
	const content = "A deep fake is a manipulated video or audio in which a person's likeness and/or voice is replaced with that of someone else using artificial intelligence (AI) and machine learning algorithms. Deep fakes can be used to create convincing and misleading content that appears to be real, potentially causing harm by spreading false information or damaging reputations."
	const text = new PIXI.Text(content, {
	fontFamily: "FuturaHandwritten",
	fontSize: 12,
	fill: "#000000",
	wordWrap: true,
	wordWrapWidth: 200
	});

	// Calculate the width and height of the text
	const textBounds = text.getBounds();
	const textWidth = textBounds.width;
	const textHeight = textBounds.height;

	// Create a new Graphics object
	const graphics = new PIXI.Graphics();

	// Set the fill and outline colors
	graphics.beginFill(0xffffff);
	graphics.lineStyle(2, 0x000000);

	// Draw the rounded rectangle shape
	graphics.drawRoundedRect(0, 0, textWidth + 20, textHeight + 20, 10);

	// Update the wordWrapWidth property of the Text object
	text.style.wordWrapWidth = textWidth;

	// Add the Graphics object to the Container
	container.addChild(graphics);

	// Add the Graphics object to the Container
	container.addChild(text);
	

	// Position the Text object within the speech bubble
	text.x = 10;
	text.y = 10;

	// Position the speech bubble on the canvas
	container.x = 100;
	container.y = 100;

	// Add the Container to the stage
	app.stage.addChild(container);

	self.add = function(){
		_add(self);
	};
	self.remove = function(){
		app.destroy();
		_remove(self);
	};
}

function Social(config){
	var self = this;
	self.id = config.id;
	
	// DOM
	self.dom = document.createElement("div");
	self.dom.className = "object";
	self.dom.style.left = config.x+"px";
	self.dom.style.top = config.y+"px";

	// APP
	var app = new PIXI.Application(700, 350, {transparent:true, resolution:2});
	self.app = app;
	app.view.style.width = 700;
	app.view.style.height = 350;
	self.dom.appendChild(app.view);

	///////////////////////////////////////////////
	//////////////// THE GRAPHICS /////////////////
	///////////////////////////////////////////////

	//Characters
	self.puppet = _makeMovieClip("evil", {anchorX:-.3, anchorY:-.1, scale:0.75});
	app.stage.addChild(self.puppet);
	
	
	self.add = function(){
		_add(self);
	};
	self.remove = function(){
		app.destroy();
		_remove(self);
	};

}

function Law(config){
	var self = this;
	self.id = config.id;
	
	// DOM
	self.dom = document.createElement("div");
	self.dom.className = "object";
	self.dom.style.left = config.x+"px";
	self.dom.style.top = config.y+"px";

	// APP
	var app = new PIXI.Application(700, 350, {transparent:true, resolution:2});
	self.app = app;
	app.view.style.width = 700;
	app.view.style.height = 350;
	self.dom.appendChild(app.view);

	///////////////////////////////////////////////
	//////////////// THE GRAPHICS /////////////////
	///////////////////////////////////////////////

	//Characters
	self.puppet = _makeMovieClip("law", {anchorX:-.3, anchorY:-.1, scale:0.75});
	app.stage.addChild(self.puppet);
	
	
	self.add = function(){
		_add(self);
	};
	self.remove = function(){
		app.destroy();
		_remove(self);
	};

}

function Press(config){
	var self = this;
	self.id = config.id;
	
	// DOM
	self.dom = document.createElement("div");
	self.dom.className = "object";
	self.dom.style.left = config.x+"px";
	self.dom.style.top = config.y+"px";

	// APP
	var app = new PIXI.Application(700, 350, {transparent:true, resolution:2});
	self.app = app;
	app.view.style.width = 700;
	app.view.style.height = 350;
	self.dom.appendChild(app.view);

	///////////////////////////////////////////////
	//////////////// THE GRAPHICS /////////////////
	///////////////////////////////////////////////

	//Characters
	self.puppet = _makeMovieClip("press", {anchorX:-.3, anchorY:-.1, scale:0.75});
	app.stage.addChild(self.puppet);
	
	
	self.add = function(){
		_add(self);
	};
	self.remove = function(){
		app.destroy();
		_remove(self);
	};

}

function hide_all(objects){
	if(typeof objects.social !== 'undefined' && !(_isHidden(objects.social))){
		_hide(objects.social);
		_hide(objects.topSocial);
		console.log("test2");
	}
	if(typeof objects.law !== 'undefined' && !(_isHidden(objects.law))){
		_hide(objects.topLaw);
		_hide(objects.law);
		console.log("test")
	}
	if(typeof objects.press !== 'undefined' && !(_isHidden(objects.press))){
		_hide(objects.topPress);
		_hide(objects.press);
	}
	console.log("test");
}

function check_finished(objects){
	console.log("hello");
	console.log(objects.btnLaw.active);
	console.log(objects.btnSocial.active);
	console.log(objects.btnPress.active);
	if(objects.btnLaw.active == false && objects.btnSocial.active == false 
		&& objects.btnPress.active == false){
			_show(objects.btnNext);
	}
}