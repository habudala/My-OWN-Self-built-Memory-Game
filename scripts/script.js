//////////////////////////GENERAL PURPOSE VARIABLES//////////////////////////////
		var aa = "images/1.jpg";
		var bb = "images/2.jpg";
		var cc = "images/3.jpg";
		var dd = "images/4.jpg";
		var ee = "images/5.jpg";
		var ff = "images/6.jpg";
		var gg = "images/7.jpg";
		var hh = "images/8.jpg";
		var ii = "images/9.jpg";
		var jj = "images/10.jpg";

		var mainArray = [];
		var flippedArray = [];
		var targetArray = [];
		var matchArray =[];
		var wrapper;
		var content;
		var beginBtn = document.getElementById("begin");
		var resetBtn = document.getElementById("reset");
		var diff = document.getElementById("selene");
		var singTileId;
///////////////////////////USER PERFORMANCE VARIABLES//////////////////////////////
		var moveCount = 0;
		var winCount = 0;
		var moveCountHold = document.getElementById("moves").innerHTML = "Your Moves : " + moveCount;
		var winCountHold = document.getElementById("wins").innerHTML = "Wins : " + winCount;
///////////////////////////VARIABLES FOR THE SHUFFLE METHOD////////////////////////////
		var holder;
		var random;
//////////////////////////ACTION BEGINS///////////////////////////////////////////

		beginBtn.addEventListener("click", letTheGameBegin, false); // Adding event listener to my begin button
		resetBtn.addEventListener("click", reset, false);

		Array.prototype.shuffle = function() { // Creating a new shuffle method for Array objects
			for(i = 0; i < 7; i++) {
				for(j = this.length; j > 0; j--) {
					random = Math.floor(Math.random() * j);
					holder = this[random];
					this[random] = this[(j-1)];
					this[(j-1)] = holder;
				}
			}
		return this
		}
//console.log(mainArray.shuffle()); CHECKING MYSELF... CHECK:SUCCESS!

		function letTheGameBegin () { //Generating new board 

			switch (diff.value) {

				case "1": mainArray = [aa,aa,bb,bb,cc,cc,dd,dd,ee,ee,ff,ff];
				break;
				case "2": mainArray = [aa,aa,bb,bb,cc,cc,dd,dd,ee,ee,ff,ff,gg,gg,hh,hh];
				break;
				 case "3": mainArray = [aa,aa,bb,bb,cc,cc,dd,dd,ee,ee,ff,ff,gg,gg,hh,hh,ii,ii,jj,jj]; 
				break;
				 default: mainArray = [aa,aa,bb,bb,cc,cc,dd,dd,ee,ee,ff,ff,gg,gg,hh,hh,ii,ii,jj,jj];

			}

		    container = document.getElementById("container");
			mainArray.shuffle();
			for(i = 0; i < mainArray.length; i++) {
				miniCont = document.createElement("div");
				child1 = document.createElement("div");
				child2 = document.createElement("div");
				image = document.createElement("img");

				miniCont.setAttribute("class","miniCont");
				child1.setAttribute("class", "back");
				child2.setAttribute("class", "front");
				image.setAttribute("src", mainArray[i]);

				child1.appendChild(image);
				miniCont.appendChild(child1);
				miniCont.appendChild(child2);
				container.appendChild(miniCont);
				//console.log(container.children.length); //GREAT SUCCESS!!!
			}
			
			singTileId = document.getElementsByClassName("miniCont"); // Adding event listeners to tiles
			for(k = 0; k < singTileId.length; k++) {
				singTileId[k].addEventListener("click", flipTile, false);
					
			}
		}

		function reset () {
			container = document.getElementById("container");
			moveCount = 0;
			moveCountHold = document.getElementById("moves").innerHTML = "Your Moves : " + moveCount;
			container.innerHTML = "";
			mainArray = [];
			matchArray = [];
			
		}

		function flipTile () {
			
			if(flippedArray.length < 2) {

				if(flippedArray.length == 0) { // if no cards have been flipped, then...

					flippedArray.push(this.firstElementChild.firstElementChild.src);
					targetArray.push(this);
					this.firstElementChild.className ="clickedBack";
					this.lastElementChild.className ="clickedFront";
					 
				}else{  // if there is 1 card flipped already, then...

					flippedArray.push(this.firstElementChild.firstElementChild.src);
					targetArray.push(this);
					this.firstElementChild.className ="clickedBack";
					this.lastElementChild.className ="clickedFront";
					//console.log(flippedArray);
				
					if (flippedArray[0] == flippedArray[1]) { // if the two cards match, then...
						//console.log(flippedArray)
						matchArray.push(flippedArray[0]);
						matchArray.push(flippedArray[1]);
					
					    flippedArray = [];

					    moveCount++;
					    moveCountHold = document.getElementById("moves").innerHTML = "Your Moves : " + moveCount;

						if (matchArray.length === mainArray.length) { // if all cards have been flipped, then...
							console.log(matchArray.length);
							console.log(mainArray.length);
							
							switch(diff.value) {
								case "1": 
									if( moveCount <= 10) {
										alert("Congratulations! You won the game in " + moveCount + " moves!!! You are awesome!");
									}else{alert("Congrats! See if you an do even better in the next round!");}
									break;
								case "2":
									if(moveCount <= 15) {
										alert("Congratulations! You won the game in " + moveCount + " moves!!! You are awesome!");
									}else{alert("Congrats! See if you an do even better in the next round!");}
									break;
								case "3":
									if(moveCount <= 20) {
										alert("Congratulations! You won the game in " + moveCount + " moves!!! You are awesome!");
									}else{alert("Congrats! See if you an do even better in the next round!");}
									break;
								default: alert("Congratulations! You won!!!");
									
							}

							winCount++;
							winCountHold = document.getElementById("wins").innerHTML = "Wins : " + winCount;
						}
					}else { // if the two cards don't match, then...

					    function reTurn (){
//console.log("I work");
						 	targetArray[(targetArray.length-1)].firstElementChild.className = "back";
						 	targetArray[(targetArray.length-1)].lastElementChild.className = "front";
						 	targetArray[(targetArray.length-2)].firstElementChild.className = "back";
						 	targetArray[(targetArray.length-2)].lastElementChild.className = "front";
						 	//console.log(targetArray[(targetArray.length-1)].firstElementChild);
						 	//console.log(targetArray[(targetArray.length-2)].lastElementChild);
						 	flippedArray = [];
					    	targetArray = [];

					    	moveCount++;
					    	moveCountHold = document.getElementById("moves").innerHTML = "Your Moves : " + moveCount;
						 }
						
						function timer () { var timeSet = setTimeout(reTurn, 1500);
											}
							timer();

					}
				}
			}
		}
	