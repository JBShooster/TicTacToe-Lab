window.addEventListener("load", function(){
	var turn = 0;
	var xScore = [];
	var oScore = [];
	var marquee= document.querySelector("#marquee");
	var begin=document.querySelector("button");
	marquee.innerHTML = "Welcome to Tic-Tac-Toe!";
	console.log("Tic Tac Toe!");
	function startGame(){
		var button = document.getElementsByClassName("button col-md-4");
		var every = document.querySelectorAll(".button, .X, .O");
		var xScore = [];
		var oScore = [];
		var turn = 0;
		//var moves = {"one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9}
		for (i=0; i<every.length; i++){
			every[i].setAttribute("class", "button col-md-4");
			every[i].innerHTML = "";
			}
		marquee.setAttribute("class", "playerOneTurn");
		marquee.innerHTML = "Player One's Turn";
		function changeSquare(){
			if (turn % 2 ===0){
				this.setAttribute("class", "X col-md-4");
				this.innerHTML = "X";
				xScore.push(this["id"]);
				this.removeEventListener("click", changeSquare);
				marquee.setAttribute("class", "playerTwoTurn");
				marquee.innerHTML = "Player Two's Turn";
			}
			if(turn % 2 ===1){
				this.setAttribute("class", "O col-md-4");
				this.innerHTML = "O";
				oScore.push(this["id"]);
				this.removeEventListener("click", changeSquare);
				marquee.setAttribute("class", "playerOneTurn");
				marquee.innerHTML = "Player One's Turn";
			}
			console.log("event", turn, "X: " + xScore, "O: " + oScore, event);
			turn +=1;
			xScore.sort();
			oScore.sort();

			/*for (var i = 0; i<xScore.length; i++){
				if 	(xScore[i]===(["one" &&"two" && "three"])) {
					(
					(xScore[i].contains.call(["one", "two", "three"], 0)) || 
					(xScore[i].contains.call(["four", "five", "six"], 0)) ||
					(xScore[i].contains.call(["seven", "eight", "nine"], 0)) || 
					(xScore[i].contains.call(["one", "four", "seven"], 0)) ||
					(xScore[i].contains.call(["two", "five", "eight"], 0)) || 
					(xScore[i].contains.call(["three", "six", "nine"], 0)) ||
					(xScore[i].contains.call(["one", "five", "nine"], 0)) ||
					(xScore[i].contains.call(["three", "five", "seven"], 0))
					);
					marquee.setAttribute("class", "marquee");
					marquee.innerHTML = "Player One Wins!";
					for (var i=0; i<button.length; i++){
						button[i].removeEventListener("click", changeSquare);
					}
				}
			}
			*/
		}			
	for (var i = 0; i< button.length; i++){
	    button[i].addEventListener("click", changeSquare);
	    }

	}
	begin.addEventListener("click", startGame);
});	
