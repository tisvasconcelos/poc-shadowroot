define(['doc'], function($){
	var proto = Object.create(HTMLElement.prototype);
	proto.createdCallback = function(){
		var children = this.children;
		var root = this.createShadowRoot();
		for (var i = 0, max = children.length; i < max; i++) {
			var child = children[i];
			root.appendChild(child.cloneNode(true));
		}
		this.removeChild(this.querySelector('*'));
	};
	var wc = document.registerElement('web-component', {
		prototype: proto
	});
	//var wcElement = document.createElement('web-component');
	console.log(wc);
	//console.log(wcElement);
	var parent = $('#wc').parent().first();
	parent.insertAdjacentHTML('beforeend','<web-component id="wc-3"><style>@import url("style-2.css");</style><h1>teste</h1></web-component>');
});
