// THE TRUST GAME - COOPERATE, YA NO?

SLIDES.push({

	id: "vp",

	onstart: function(self){
		// Iterated Simulation
		self.add({
			id:"topWords", type:"TextBox", text_id:"test_0_top",
			x:130, y:10, width:700, height:50, align:"center"
		});

		self.add({id:"movie", type:"Movie", x:130, y:133});

        self.add({
			id:"btnNext", type:"Button", x:600, y:-20, text_id:"label_next", uppercase:true,
			onclick:function(){
				_.answer = "NEXT";
				publish("slideshow/next");
			}
		});

	},
	onend: function(self){
		self.clear();
	}

}

);

