/*
JavaScript for a rock paper scissors web app.
*/

	var compChoice = parseInt(Math.random() * 3);
	var message;
	var playerWins = 0;
	var compWins = 0;
	var  ties = 0;
	var decision = true;

	function myChoice(choice){
	if(decision == true){
		decision = false;
		if(choice == 0){
				document.getElementById("playerRock").style.borderColor= "red";
				comp();
	    	checkRock(compChoice);
		}
		else if(choice == 1){
				document.getElementById("playerPaper").style.borderColor= "red";
				comp();
				checkPaper(compChoice);
		}
		else if(choice == 2){
			document.getElementById("playerScissors").style.borderColor= "red";
			comp();
			checkScissors(compChoice);
		}
	}
}

	function comp(){
		compChoice = parseInt(Math.random() * 3);
		if(compChoice  == 0){
			document.getElementById("compRock").style.borderColor="red";
		}
		else if(compChoice == 1){
			document.getElementById("compPaper").style.borderColor="red";
		}
		else if(compChoice == 2){
			document.getElementById("compScissors").style.borderColor="red";
		}
	}

	function checkRock(compChoice){
		if(0 == compChoice){
			ties++;
		document.getElementById("result").innerHTML= "Tie!";
			document.getElementById("ties").innerHTML=ties;
		}
		else if(1 == compChoice){
		compWins++;
		document.getElementById("result").innerHTML= "You Lose!";
		document.getElementById("compScore").innerHTML=compWins;

		}
		else if(2 == compChoice){
			playerWins++;
			document.getElementById("result").innerHTML="You Win!";
			document.getElementById("playerScore").innerHTML=playerWins;
		}
	}

		function checkPaper(compChoice){
		if(0 == compChoice){
		playerWins++;
		document.getElementById("result").innerHTML= "You Win!";
		document.getElementById("playerScore").innerHTML=playerWins;
		}
		else if(1 == compChoice){
		ties++;
		document.getElementById("result").innerHTML= "You Tie!";
		document.getElementById("ties").innerHTML=ties;
	 }
		else if(2 == compChoice){
		compWins++;
		document.getElementById("result").innerHTML="You Lose!";
		document.getElementById("compScore").innerHTML=compWins;

	}
}

	function checkScissors(compChoice){

	if(0 == compChoice){
		compWins++;
		document.getElementById("result").innerHTML="You Lose!";
		document.getElementById("compScore").innerHTML=compWins;
	}
	else if(1  == compChoice){
		playerWins++;
		document.getElementById("result").innerHTML="You Lose!";
		document.getElementById("playerScore").innerHTML=playerWins;
	}
	else if(2 == compChoice){
		ties++
		document.getElementById("result").innerHTML="You Lose!";
		document.getElementById("ties").innerHTML=ties;
	}
}
	function reset(){
		decision = true;
		document.getElementById("playerRock").style.borderColor = "black";
		document.getElementById("playerPaper").style.borderColor = "black";
		document.getElementById("playerScissors").style.borderColor ="black";
		document.getElementById("compRock").style.borderColor = "black";
		document.getElementById("compPaper").style.borderColor = "black";
		document.getElementById("compScissors").style.borderColor ="black";
	}
