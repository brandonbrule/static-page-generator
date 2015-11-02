





var ExportNotes = (function(){

	var Styles = function(){
		var style_tag = document.getElementsByTagName('style')[0].innerHTML;
		style_tag = escapeHtml(style_tag);

		return style_tag;
	};

	var Background = function(){
	  var background = document.getElementById('background').getAttribute('style');
	  background = escapeHtml(background);
	  return background;
	};

	var getContents = function(content_container){
	var content_blocks = content_container.getElementsByTagName('textarea');
	var blocks_arr = [];

	[].forEach.call(content_blocks, function(content_block){
		var view_type = content_block.getAttribute('view');
		if (view_type === 'title'){
				blocks_arr.push( '<h1 class="title">' + content_block.value + '</h1>' );
			} else if (view_type === 'subtitle'){
				blocks_arr.push( '<h2 class="subtitle">' + content_block.value + '</h2>' );
			} else if (view_type === 'message'){
				blocks_arr.push( '<div class="message">' + content_block.value + '</div>' );
			}
		});

		return blocks_arr.join('');
	};

	var init = function(){
		var content_containers = document.querySelectorAll('[view="content-container"]');
		var content_container_items = [];
		[].forEach.call(content_containers, function(content_container){
			content_container_items.push( '<div class="content-container">' + getContents(content_container) + '</div>' );
		});

		var title = document.querySelector('[view="title"]').value;
		var url = title.replace(/\s+/g, '-').toLowerCase();
		var testStr = [
		'<!DOCTYPE html>',
		'<head>',
			'<title>' + title + '</title>',
			'<style>' + Styles() + '</style>',
		'</head>',
		'<body>',
			'<div class="background-image" style="' + Background() + '"></div>',
			'<div class="notes-container">',
				content_container_items.join(''),
			'</div>',
		'</body/>'
		].join('');

		saveTextAsFile(testStr, url);

		return ;
	};

  return{
    init: init
  };
})();





// Save Button
document.getElementById('save').addEventListener('click', function(e){
  ExportNotes.init();
});