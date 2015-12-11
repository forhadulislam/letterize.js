
var letterize = function (elementSelector, textType, childType){
	var theElement = document.querySelector(elementSelector);
  var theElementText = theElement.textContent;
  var theElementHTML = theElement.innerHTML;
  var outputText = "";

	if(textType == "lines"){
  	var allLines = theElementHTML.split("<br>");
    
    for (var i = 0, len = allLines.length; i < len; i++) {
    	var className = "line" + (i + 1);
    	outputText += "<" + childType + " class='" + className + "'>" + allLines[i] + "<br /></" + childType + "> ";          
    }
  }else if(textType == "words"){
  	
    var words = theElementText.split(" ");
    
    for (var i = 0, len = words.length; i < len; i++) {
    	var className = "word" + (i + 1);
    	outputText += "<" + childType + " class='" + className + "'>" + words[i] + "</" + childType + "> ";          
    }
    outputText = outputText.trim();
  }else{
  
  	for (var i = 0, len = theElementText.length; i < len; i++) {
    	var className = "letter" + (i + 1);
    	outputText += "<" + childType + " class='" + className + "'>" + theElementText[i] + "</" + childType + ">";          
    }
  }	
  theElement.innerHTML = outputText;
}

