## Letterize.js, a lightweight Javascript library for Web Typography
letterize.js is a lightweight and pure JavaScript library for manipulating characters. It is written in pure JavaScript
and has no dependency at all which makes it a perfect choice for designers and developers.developers

All you need to do is just the the letterize.js script file and you are ready to work with it. 
    <script>
	  var letterize = function (elementSelector, textType, childType);
	</script>
	
	letterize function takse 3 parameters:
	* elementSelector: The element selector which you want to manipulate ( ex: class or ID).
	* textType: it is used to target the type ( 3 types are awailable: letters, words, lines ).
	* childType: the type of wrapper you want with each output element ( ex: span, p ).

### Working with letters
    letterize(".line_split", "letters", "span");
    

### Working with words
    letterize(".line_split", "words", "span");
    

### Working with lines
    letterize(".line_split", "lines", "span");