// THE TRUST GAME - COOPERATE, YA NO?

SLIDES.push({

	id: "test3",

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
			id:"img_bob", type:"ImageBox",
			src: "assets/splash/q_final.png",
			x:-100, y:100, width:240, height:450
		});

		//speech bubble
		self.add({id:"speech", type:"SpeechBubble", x:-350, y: 0});
		_hide(self.objects.speech);
		self.add({
			id:"btnDeepExp", type:"Button", x:-200, y:80, text_id:"label_exp", uppercase:true,
			onclick:function(){
				_.answer = "EXP";
				_show(self.objects.speech)
				_hide(self.objects.btnDeepExp)
				
			}
		});
		self.add({id:"surprise", type:"Surprise", x:130, y:133});

		

	},
	onend: function(self){
		_hide(self.objects.btnNext);
		_hide(self.objects.topWords)
		_hide(self.objects.btnDeepExp)
		_.clear();
	}

},{

	onstart: function(self){
		var o = self.objects;
		self.add({
			id:"topWords2", type:"TextBox", text_id:"ai_1_top",
			x:130, y:10, width:700, height:50, align:"center"
		});

		self.add({
			id:"btnSocial", type:"Button", x:175, y:540, text_id:"label_social", uppercase:true,
			onclick:function(){
				_.answer = "SOCIAL";
				Scratcher.smallScratch(130, 133, 400, 400,
					function(){
						_hide(o.topWords2);
						_hide(o.surprise);
					},function(){
					});
				Scratcher.smallScratch(330, 133, 400, 400,
					function(){
						hide_all(o);
						self.add({id:"social", type:"Social", x:130, y:133});
						self.add({
							id:"topSocial", type:"TextBox", text_id:"ai_2_top",
							x:130, y:10, width:700, height:50, align:"center"
						});
						publish("btnSocial/deactivate");
					},function(){
						check_finished(o);
					});
			}
		});
		self.add({
			id:"btnPress", type:"Button", x:375, y:540, text_id:"label_press", uppercase:true,
			onclick:function(){
				_.answer = "PRESS";
				Scratcher.smallScratch(130, 133, 400, 400,
					function(){
						_hide(o.topWords2);
						_hide(o.surprise);
					},function(){
					});
				Scratcher.smallScratch(330, 133, 400, 400,
					function(){
						hide_all(o);
						self.add({id:"press", type:"Press", x:130, y:133});
						self.add({
							id:"topPress", type:"TextBox", text_id:"ai_3_top",
							x:130, y:10, width:700, height:50, align:"center"
						});
						publish("btnPress/deactivate");
					},function(){
						check_finished(o);
					});
			}
		});
		self.add({
			id:"btnLaw", type:"Button", x:575, y:540, text_id:"label_law", uppercase:true,
			onclick:function(){
				_.answer = "LAW";
				Scratcher.smallScratch(130, 133, 400, 400,
					function(){
						_hide(o.topWords2);
						_hide(o.surprise);
					},function(){
					});
				Scratcher.smallScratch(330, 133, 400, 400,
					function(){
						hide_all(o);
						self.add({id:"law", type:"Law", x:130, y:133});
						self.add({
							id:"topLaw", type:"TextBox", text_id:"ai_4_top",
							x:130, y:10, width:700, height:50, align:"center"
						});
						publish("btnLaw/deactivate");
						console.log(o.btnLaw.active)
					},function(){
						check_finished(o);
					});
			}
		});

		
	},
	onend: function(self){
		self.clear();
	}

}


);

