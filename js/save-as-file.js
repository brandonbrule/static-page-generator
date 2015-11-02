var saveTextAsFile = function(string, filename){
    
    var textFileAsBlob = new Blob([string], {type:'text/html'});
    var downloadLink = document.createElement("a");
    
    downloadLink.download = filename;
    downloadLink.innerHTML = "Download File";
    
    if (window.webkitURL !== null){
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = function(){ document.body.removeChild(event.target); };
      document.body.appendChild(downloadLink);
    }

    downloadLink.click();
    
};