// THE TRUST GAME - COOPERATE, YA NO?

SLIDES.push({

	id: "test2",

	onstart: function(self){
		// Iterated Simulation
		var o = self.objects;

		self.add({
			id:"topWords", type:"TextBox", text_id:"micro_0_top",
			x:130, y:10, width:700, height:50, align:"center"
		});

		self.add({
			id:"nextBut", type:"Button", x:600, y:-20, text_id:"label_next", uppercase:true,
			onclick:function(){
				_.answer = "SCRATCH";
				Scratcher.smallScratch(130, 133, 400, 400,
					function(){
						_hide(o.micro);
					},function(){
					});
				Scratcher.smallScratch(330, 133, 400, 400,
					function(){
						self.add({id:"ads", type:"Ads", x:130, y:133});
					},function(){
					});
				publish("slideshow/next");
			}
		});
	
		// self.add({
		// 	id:"btnScratch", type:"Button", x:275, y:70, text_id:"label_scratch", uppercase:true,
		// 	onclick:function(){
		// 		_.answer = "SCRATCH";
		// 		// NEW OPPONENT
		// 		// Scratcher.smallScratch(700, 260, 150, 162,
		// 		// 	function(){
		// 		// 	},function(){
		// 		// 	});
		// 	}
		// });
		self.add({id:"micro", type:"Micro", x:130, y:133});
		
	},
	onend: function(self){
		_.clear();
	}

},{

	onstart: function(self){
		// Iterated Simulation
		var o = self.objects;

		self.add({
			id:"nextBut2", type:"Button", x:600, y:-20, text_id:"label_next", uppercase:true,
			onclick:function(){
				_.answer = "NEXT";
				publish("slideshow/next");
			}
		});
		_hide(o.nextBut);
		
		
	},
	onend: function(self){
		self.clear();
	}

}

);
