function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
};



// On Keypress
  window.onkeyup = function(e){
    if ( e.target.nodeName === 'TEXTAREA' ){
      var message = e.target;
      message.style.height = message.scrollHeight + 'px';
    }
  };