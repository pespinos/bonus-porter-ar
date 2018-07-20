var AFRAME = require('aframe');
var onsenUI = require('onsenui');

clickCallback = function(event){
	var myNavigator =document.querySelector('#myNavigator');
	myNavigator.pushPage('arView.html',{});
	};

document.addEventListener('init', function(event) {
	var page = event.target;
	if(page.id== "arView"){
		var arView = document.querySelector('#arView');
		var bg = arView._getBackgroundElement();
		bg.hidden = true;
	};
});
