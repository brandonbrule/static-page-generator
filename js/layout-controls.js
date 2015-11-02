var layoutControls = ( function(){
	var layout_controls = document.getElementById('layout-controls');
	var content_container = document.getElementById('content-container');

	var removeBlock = function(element){
		element.parentElement.removeChild(element)
	};

	var moveUp = function(element){
		if (element.previousSibling){
			element.parentNode.insertBefore(element,element.previousSibling);
		}
	};

	var moveDown = function(element){
		if (element.nextSibling){
			element.parentNode.insertBefore(element,element.nextSibling.nextSibling);
		} else {
			element.parentNode.appendChild(element);
		}
	};

	var newBlock = function(type){
		var block = document.createElement('div');
		var textarea = document.createElement('textarea');
		var remove_button = document.createElement('button');
		var move_up_button = document.createElement('button');
		var move_down_button = document.createElement('button');

		block.setAttribute('class', 'content-block');

		textarea.setAttribute('view', type);
		textarea.setAttribute('class', type);

		remove_button.innerHTML = 'X';
		move_up_button.innerHTML = 'UP';
		move_down_button.innerHTML = 'DOWN';

		block.appendChild(remove_button);
		block.appendChild(move_up_button);
		block.appendChild(move_down_button);
		block.appendChild(textarea);
		content_container.appendChild(block);


		remove_button.addEventListener('click', function(e){
			removeBlock(e.target.parentNode);
		});
		move_up_button.addEventListener('click', function(e){
			moveUp(e.target.parentNode);
		});
		move_down_button.addEventListener('click', function(e){
			moveDown(e.target.parentNode);
		});


		textarea.focus();
	};

	var init = function(){
		layout_controls.addEventListener('click', function(e){
			if ( e.target.nodeName === 'BUTTON' && e.target.getAttribute('control') ){
				var control_type = e.target.getAttribute('control');
				newBlock(control_type);
			}
		});
	};

	return {
		init: init
	}
})();

layoutControls.init();