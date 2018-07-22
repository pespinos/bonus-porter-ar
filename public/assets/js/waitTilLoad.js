AFRAME.registerComponent('waittilLoad',{
	scheme: {
		src: { type: "string"},
		dataUrl : {type: "string"}
	},
	dependencies: ['gltf-model','animation-mixer','sprite-sheet'],
	onModelLoad: function(){
		this.waitingSprite.hidden = true;

	},
	init: function(){
		this.waitingSprite = {};
		this.waitingSprite = document.createElement("a-image");
		this.waitingSprite.setAttribute('src', '#' +this.data.src);
		this.waitingSprite.setAttribute('dataUrl',this.dataUrl);
		this.waitingSprite.setAttribute('sprite-sheet', spriteAttributes);

		this.el.parentEl.appendChild(this.waitingSprite);

		this.el.addEventListener('model-loaded',this.onModelLoad().bind(this));
		this.isPlaying = true;
	},

	tick: function(){
		if(this.isPlaying){
			//TODO animate the spritesheet
		}
	}

})