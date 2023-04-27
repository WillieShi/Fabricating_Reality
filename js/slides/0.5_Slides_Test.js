// THE TRUST GAME - COOPERATE, YA NO?

SLIDES.push({

	id: "test",

	onstart: function(self){
		// Iterated Simulation
		self.add({
			id:"topWords", type:"TextBox", text_id:"test_0_top",
			x:130, y:10, width:700, height:50, align:"center"
		});

		self.add({
			id:"btnNext", type:"Button", x:600, y:-20, text_id:"label_next", uppercase:true,
			onclick:function(){
				_.answer = "NEXT";
				publish("slideshow/scratch");
			}
		});

		// IMAGE
		self.add({
			id:"img_bob", type:"ImageBox",
			src: "assets/data_buying/Bob.png",
			x:10, y:60, width:340, height:550
		});
		self.add({
			id:"img_many", type:"ImageBox",
			src: "assets/data_buying/Mandy.png",
			x:30, y:300, width:340, height:550
		});

		//WORDS
		self.add({
			id:"text2", type:"TextBox",
			x:350, y:85-10, width:760, size:30, color:"#DD4040",
			text_id:"vp_1_a"
		});
		self.add({
			id:"text3", type:"TextBox",
			x:350, y:135-10, width:760,
			text_id:"vp_1_a2"
		});
		self.add({
			id:"text4", type:"TextBox",
			x:350, y:322-10, width:760, size:30, color:"#4089DD",
			text_id:"vp_2_a"
		});
		self.add({
			id:"text5", type:"TextBox",
			x:350, y:392-10, width:760,
			text_id:"vp_2_a2"
		});

	},
	onend: function(self){
		self.clear();
	}

}

);

