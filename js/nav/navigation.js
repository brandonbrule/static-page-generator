var NavigationControls = ( function(){
	var navigation = document.getElementById('navigation');

	var init = function(nav_config){
		for (nav_item in nav_config){
			var li = document.createElement('li');
			var a = document.createElement('a');
			a.innerHTML = nav_config[nav_item].name;
			a.setAttribute('href', nav_config[nav_item].link);

			li.appendChild(a);
			navigation.appendChild(li);
		}
	}

	return {
		init: init
	}
})();
NavigationControls.init(nav_config);