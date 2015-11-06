var layoutControls = ( function(){
	var layout_controls = document.getElementById('layout-controls');
	var content_container = document.getElementById('content-container');

	var removeBlock = function(element){
		element = element.parentNode;
		element.parentElement.removeChild(element)
	};

	var moveUp = function(element){
		element = element.parentNode;
		if (element.previousSibling){
			element.parentNode.insertBefore(element,element.previousSibling);
		}
	};

	var moveDown = function(element){
		element = element.parentNode;
		if (element.nextSibling){
			element.parentNode.insertBefore(element,element.nextSibling.nextSibling);
		} else {
			element.parentNode.appendChild(element);
		}
	};

	var blockControls = function(){
		var block_controls = document.createElement('div');
		var remove_button = document.createElement('button');
		var move_up_button = document.createElement('button');
		var move_down_button = document.createElement('button');

		block_controls.id = 'block-controls';
		block_controls.setAttribute('class', 'block-controls');

		remove_button.innerHTML = 'X';
		remove_button.setAttribute('block-control', 'remove');

		move_up_button.innerHTML = 'UP';
		move_up_button.setAttribute('block-control', 'up');

		move_down_button.innerHTML = 'DOWN';
		move_down_button.setAttribute('block-control', 'down');

		block_controls.appendChild(remove_button);
		block_controls.appendChild(move_up_button);
		block_controls.appendChild(move_down_button);

		block_controls.addEventListener('click', function(e){
			if (e.target.nodeName === 'BUTTON'){
				var button = e.target;
				var type = button.getAttribute('block-control');

				if (type === 'remove'){
					removeBlock(button.parentNode);
				} else if (type === 'up'){
					moveUp(button.parentNode);
				} else if (type === 'down'){
					moveDown(button.parentNode);
				}
			}
		});

		document.getElementsByTagName('body')[0].appendChild(block_controls);

	};

	var newBlock = function(type){
		var block = document.createElement('div');
		var textarea = document.createElement('textarea');
		
		block.setAttribute('class', 'content-block');

		textarea.setAttribute('view', type);
		textarea.setAttribute('class', type);

		block.appendChild(textarea);

		content_container.appendChild(block);

		block.addEventListener('click', function(e){
			if (e.target.nodeName === 'TEXTAREA'){
				var block = e.target.parentNode;
				var block_controls = document.getElementById('block-controls');
				block.appendChild( block_controls );
			}
		}, false);

		textarea.focus();
	};

	var init = function(){
		layout_controls.addEventListener('click', function(e){
			if ( e.target.nodeName === 'BUTTON' && e.target.getAttribute('control') ){
				var control_type = e.target.getAttribute('control');
				newBlock(control_type);
			}
		});

		blockControls();
	};

	return {
		init: init
	}
})();

layoutControls.init();