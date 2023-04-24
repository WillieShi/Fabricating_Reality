Loader.addToManifest(Loader.manifest,{
	tv: "assets/micro_targeting/tv.json",
	cam: "assets/micro_targeting/cam.json",
	snipe: "assets/micro_targeting/snipe.json",
	target: "assets/micro_targeting/target.json"
 });

function Micro(config){
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
	self.snipe= _makeMovieClip("snipe", {anchorX:-.3, anchorY:-.3, scale:0.5});
	app.stage.addChild(self.snipe);

	self.target= _makeMovieClip("target", {anchorX:-1.3, anchorY:-.3, scale:0.5});
	app.stage.addChild(self.target);
	
	
	self.add = function(){
		_add(self);
	};
	self.remove = function(){
		app.destroy();
		_remove(self);
	};

}

function Ads(config){
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
	self.cam = _makeMovieClip("cam", {anchorX:-.3, anchorY:-.3, scale:0.5});
	app.stage.addChild(self.cam);
	self.tv = _makeMovieClip("tv", {anchorX:-1.3, anchorY:-.3, scale:0.5});
	app.stage.addChild(self.tv);
	
	self.add = function(){
		_add(self);
	};
	self.remove = function(){
		app.destroy();
		_remove(self);
	};

}

