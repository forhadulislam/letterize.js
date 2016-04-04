
var letterize = function (elementSelector, textType, childType){
    var theElement = document.querySelectorAll(elementSelector);
    var elemLen = theElement.length;
    console.log(elemLen);
    
    for(var a=0; a<elemLen; a++){
        
        var theElementText = theElement[a].textContent;
        var theElementHTML = theElement[a].innerHTML;
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
        theElement[a].innerHTML = outputText;
    }
    
}

