AFRAME.registerComponent('didload',{
	scheme: {
		selector: { type: "string", default: ""},
		number: {typer: "int", default: 0}
	},
	
	init: function(){
		this.onModelLoad = function(){
			console.log("this gltf-model is ready");
			this.numberOfTagerts --;
			if(this.numberOfTagerts <= 0){
				//the scene is ready
				this.el.opcity= 0;
				setTimeout(function() {
					console.log("here");
					this.el.parentNode.removeChild(this.el);
				}.bind(this), 18000);
				//
			}
		}.bind(this);

		this.numberOfTagerts = this.data.number;

		//subscribe to the model loaded event of every element in target list
		var targetList = this.el.sceneEl.querySelectorAll(this.data.selector);
		this.elementsNumber = targetList.length;
		console.log(this.elementsNumber);
		console.log (": targetList")
		for(var i = 0; i < this.elementsNumber; i++){
			console.log(i);
			targetList[i].addEventListener('model-loaded',this.onModelLoad());
		}

		this.isPlaying = true;
	},

	tick: function(){
		if(this.isPlaying){
			//TODO animate the spritesheet
		}
	}

})