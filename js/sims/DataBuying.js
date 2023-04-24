Loader.addToManifest(Loader.manifest,{
	zuck: "assets/data_buying/zuck.json",
    mc: "assets/data_buying/mc.json",
    mystery:  "assets/data_buying/mystery.json"
 });

function DataBuying(config){
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
	self.mc= _makeMovieClip("mc", {anchorX:-.3, anchorY:-.3, scale:0.5});
	app.stage.addChild(self.mc);

	self.zuck= _makeMovieClip("zuck", {anchorX:-1.3, anchorY:-.3, scale:0.5});
	app.stage.addChild(self.zuck);
	
	
	self.add = function(){
		_add(self);
	};
	self.remove = function(){
		app.destroy();
		_remove(self);
	};

}

function Anon(config){
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

    //Characters
	self.mc= _makeMovieClip("mc", {anchorX:-1.3, anchorY:-.3, scale:0.5});
	app.stage.addChild(self.mc);

    const p1 = { x: -1, y: -0.2 };
    const p2 = { x: -1.6, y: -0.2 };
    const p3 = { x: -0.8, y: -0.3 };
    const p4 = { x: -1.8, y: -0.3 };
    const p5 = { x: -1, y: -0.4 };
    const p6 = { x: -1.6, y: -0.4 };
    
    points = [p1, p2, p3, p4, p5, p6];

    for (const p of points) {
        console.log(p)
        self.mystery = _makeMovieClip("mystery", {anchorX: p.x, 
            anchorY: p.y, scale:0.5});
        app.stage.addChild(self.mystery);
    }

    

    self.add = function(){
		_add(self);
	};
	self.remove = function(){
		app.destroy();
		_remove(self);
	};
    
}
