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
		console.log("test2");
	}
	if(typeof objects.law !== 'undefined' && !(_isHidden(objects.law))){
		_hide(objects.law);
	}
	if(typeof objects.press !== 'undefined' && !(_isHidden(objects.press))){
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