## Letterize.js, a lightweight Javascript library for Web Typography
letterize.js is a lightweight and pure JavaScript library for manipulating characters and words. It is written in pure JavaScript
and has no dependency at all which makes it a perfect choice for designers and developers.

All you need to do is just add the letterize.js script file to your HTML file and you are ready to work with it. 
    <script>
	  var letterize = function (elementSelector, textType, childType);
	</script>
	
	letterize function takes 3 parameters:
	* elementSelector: The element selector which you want to manipulate ( ex: class or ID).
	* textType: it is used to target the type ( 3 types are awailable: letters, words, lines ).
	* childType: the type of wrapper you want with each output element ( ex: span, p ).

### Working with words
    letterize(".word_split", "words", "span");
    
    <div>  
        <p class="word_split">
            <span class="word1">Yayyyyyy!!</span> 
            <span class="word2">you</span> 
            <span class="word3">ready</span> 
            <span class="word4">to</span> 
            <span class="word5">Letterize!</span>
        </p>
    </div>
    

### Working with lines
    letterize(".line_split", "lines", "span");
    
    
    <div>  
        <p class="line_split">
            <span class="line1">Yayyyyyy!! you<br></span> 
            <span class="line2"> ready to<br></span> 
            <span class="line3"> Letterize!<br></span> 
        </p>
    </div>
    
### Working with letters
    letterize(".letter_split", "letters", "span");
    
    <div>  
        <p class="letter_split">
            <span class='letter1'>L</span>
            <span class='letter2'>e</span>
            <span class='letter3'>t</span>
            <span class='letter4'>t</span>
            <span class='letter5'>e</span>
            <span class='letter6'>r</span>
            <span class='letter7'>i</span>
            <span class='letter8'>z</span>
            <span class='letter9'>e</span>
            <span class='letter10'>!</span>
        </p>
    </div>