
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var a

  	var i

  	newGame();

  	$(".button").click(function(e){
  		e.preventDefault();
  		var b = $("#userGuess:text").val();
  		if (isNaN(b) === true) {
  			return alert("Please select a number between 1 and 100");
  		}
  		else if (b > 100) {
  			return alert("Please select a number between 1 and 100");
  		}
  		else if (b <= 0) {
  			return alert("Please select a number between 1 and 100");
  		};
  		countGuesses();
  		$("#guessList").append("<li>" + b + "</li>");
  		if (Math.abs(a - b) >= 41){
   			document.getElementById("feedback").innerHTML = "Ice Cold!";
   		}
   		else if (Math.abs(a - b) >= 31){
   			document.getElementById("feedback").innerHTML = "Cold!";
   		}
   		else if (Math.abs(a - b) >= 21){
   			document.getElementById("feedback").innerHTML = "Warm!";
   		}	
   		else if (Math.abs(a - b) >= 11){
   			document.getElementById("feedback").innerHTML = "Hot!";
   		}
   		else if (Math.abs(a - b) >= 1){
   			document.getElementById("feedback").innerHTML = "Very Hot!";
   		}
   		else if (Math.abs(a - b) === 0){
   			document.getElementById("feedback").innerHTML = "You got it!";
   		};
   		$("#userGuess").val('');
 	});

 	$(".new").click(function(e){
 		e.preventDefault();
 		newGame();  		
  	});

  	function generateNumber(){
  		var d = Math.floor((Math.random() * 100) + 1);
  		return d;
  	};

  	function countGuesses(){
  		i = parseInt(i) + parseInt(1);
  		document.getElementById("count").innerHTML = i;
  	};

  	function newGame(){
  		a = generateNumber();
  		i = 0;
  		console.log(a);
  		document.getElementById("count").innerHTML = "0";
  		document.getElementById("feedback").innerHTML = "Make your Guess!";
  		document.getElementById("guessList").innerHTML = "";
  		$("#userGuess").val('');
  	};
});


