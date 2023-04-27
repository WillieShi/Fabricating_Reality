// THE TRUST GAME - COOPERATE, YA NO?

SLIDES.push({

	id: "asb",

	onstart: function(self){
		// Iterated Simulation
		self.add({
			id:"topWords", type:"TextBox", text_id:"ai_0_top",
			x:130, y:10, width:700, height:50, align:"center"
		});

		self.add({
			id:"btnNext", type:"Button", x:600, y:-20, text_id:"label_next", uppercase:true,
			onclick:function(){
				_.answer = "NEXT";
				publish("slideshow/next");
			}
		});

		self.add({
			id:"img_bot1", type:"ImageBox",
			src: "assets/ai_suprise/bot1.png",
			x:300, y:133, width:240, height:450
		});
        self.add({
			id:"img_bot2", type:"ImageBox",
			src: "assets/ai_suprise/bot2.png",
			x:230, y:133, width:240, height:450
		});
        self.add({
			id:"img_bot3", type:"ImageBox",
			src: "assets/ai_suprise/bot3.png",
			x:160, y:133, width:240, height:450
		});

        self.add({
			id:"img_mc", type:"ImageBox",
			src: "assets/data_buying/mc.png",
			x:60, y:133, width:240, height:450
		});


		

	},
	onend: function(self){
		_.clear();
	}

},{

	onstart: function(self){

		
	},
	onend: function(self){
		self.clear();
	}

}


);

