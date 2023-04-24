// THE TRUST GAME - COOPERATE, YA NO?

SLIDES.push({

	id: "databuying",

	onstart: function(self){
		// Iterated Simulation
		self.add({
			id:"topWords", type:"TextBox", text_id:"db_0_top",
			x:130, y:10, width:700, height:50, align:"center"
		});

		self.add({
			id:"btnNext", type:"Button", x:600, y:-20, text_id:"label_next", uppercase:true,
			onclick:function(){
				_.answer = "NEXT";
				publish("slideshow/next");

			}
		});

        self.add({id:"anon", type:"Anon", x:130, y:133});

	},
	onend: function(self){
        self.remove("topWords");
		_.clear();
	}

},{

	onstart: function(self){
		// Iterated Simulation
        var o = self.objects;
        self.add({
			id:"topWords", type:"TextBox", text_id:"db_1_top",
			x:130, y:10, width:700, height:50, align:"center"
		});
        Scratcher.smallScratch(130, 133, 400, 400,
            function(){
                _hide(o.anon);
            },function(){
            });
        Scratcher.smallScratch(330, 133, 400, 400,
            function(){
                self.add({id:"dataBuying", type:"DataBuying", x:130, y:133});
            },function(){
            });
		
	},
	onend: function(self){
		self.clear();
	}

}

);

