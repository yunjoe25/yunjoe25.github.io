
function highlight(){

	var player1_piece = 12;
	var player2_piece = 12;
	var selected = false;
	var potential_left = false;
	var potential_right = false;
	var previous_id_1;
	var previous_id_2;
	// var previous_id_1_point;
	// var previous_id_2
	var playerturn = 1; // 1 = player 1's turn, 2 = plater 2's turn. Player 1 goes first
	var checkboard = [	-1,-1,-1,-1,-1,-1,-1,-1,-1,-1 ,
					  	-1, 1, 0, 1, 0, 1, 0, 1, 0,-1 ,
					  	-1, 0, 1, 0, 1, 0, 1, 0, 1,-1 ,
					  	-1, 1, 0, 1, 0, 1, 0, 1, 0,-1 ,
					  	-1, 0, 0, 0, 0, 0, 0, 0, 0,-1 ,
					  	-1, 0, 0, 0, 0, 0, 0, 0, 0,-1 ,
					  	-1, 0, 2, 0, 2, 0, 2, 0, 2,-1 ,
					  	-1, 2, 0, 2, 0, 2, 0, 2, 0,-1 ,
					  	-1, 0, 2, 0, 2, 0, 2, 0, 2,-1 ,
					  	-1,-1,-1,-1,-1,-1,-1,-1,-1,-1	 ];

	$("div.blackbox").on({
		//highlighting pieces based on mouseenter and mouseleave
		mouseenter:function(){
			var current_id = $(this).attr('id');
			//display position regarding mouseenter
			$("#piece_coord").html("Position: " +current_id);

			//player 1 (green)
			if( (checkboard[current_id] == 1) && (playerturn == 1) ){
				$(this).css("background-color","#00E200");

			//player 2 (blue)
			} else if ( (checkboard[current_id] == 2) && (playerturn == 2) ) {
				$(this).css("background-color","#0000FE");

			}
		},
		//return pieces' original color
		mouseleave:function(){
			var current_id = $(this).attr('id');

			if(checkboard[current_id] == 1){
				$(this).css("background-color","green");
			} else if (checkboard[current_id] == 2) {
				$(this).css("background-color","#000080");

			}
		}
	});

	//mousedown
	//if piece is able to move, change color upon click
	$("div.blackbox").mousedown(function(){
		var current_id = parseInt($(this).attr('id'));
		//if selected is player 1 piece and it's player 1's turn,
		if((checkboard[current_id] == 1 ) && (playerturn == 1) && (selected == false)){
			//if f-left or f-right space is available,
			if((checkboard[current_id + 9] == 0) || (checkboard[current_id + 11] == 0)){	
				
				$(this).css("background-color","yellow");
				//display id and player turn
				$("#bid").html("Current id: "+ current_id);
				$("#pturn").html("Player "+playerturn+"'s turn" );
				//checking pressed status
				$("#presscheck").html("Pressed: true1");
				previous_id_1 = parseInt($(this).attr('id'));
				selected = true;
				// //trying to fix mousebug
				// var esc = $.Event("keydown", { keyCode: 27 });
				// $("div.board").trigger(esc);
			} if((checkboard[current_id + 18] == 0)){
				$(this).css("background-color","yellow");
				//display id and player turn
				$("#bid").html("Current id: " + current_id );
				$("#pturn").html("Player "+playerturn+"'s turn" );
				//checking pressed status
				$("#presscheck").html("Pressed: true1a");
				previous_id_1 = parseInt($(this).attr('id'));
				selected = true;
				potential_left = true;
			
			//right position 
			} if((checkboard[current_id + 22] == 0)){
				$(this).css("background-color","yellow");
				//display id and player turn
				$("#bid").html("Current id: " + current_id );
				$("#pturn").html("Player "+playerturn+"'s turn" );
				//checking pressed status
				$("#presscheck").html("Pressed: true1a");
				previous_id_1 = parseInt($(this).attr('id'));
				selected = true;
				potential_right = true;
			}
		//if mousedown piece is player 2's and it's player 2's turn,
		} else if((checkboard[current_id] == 2) && (playerturn == 2) && (selected == false)){
			
			//if b-left or b-right space is available,
			if((checkboard[current_id - 9] == 0) || (checkboard[current_id - 11] == 0)){	
				$(this).css("background-color","yellow");
				//display id and player turn
				$("#bid").html("Current id: " + current_id );
				$("#pturn").html("Player "+playerturn+"'s turn" );
				//checking pressed status
				$("#presscheck").html("Pressed: true2");
				previous_id_2 = parseInt($(this).attr('id'));
				selected = true;
				// //Trying to fix mouse bug
				// var esc = $.Event("keydown", { keyCode: 27 });
				// $("div.board").trigger(esc);
			
			//left position
			}if((checkboard[current_id - 18] == 0)){
				$(this).css("background-color","yellow");
				//display id and player turn
				$("#bid").html("Current id: " + current_id );
				$("#pturn").html("Player "+playerturn+"'s turn" );
				//checking pressed status
				$("#presscheck").html("Pressed: true2");
				previous_id_2 = parseInt($(this).attr('id'));
				selected = true;
				potential_right = true;
			
			//right position 
			}if((checkboard[current_id - 22] == 0)){
				$(this).css("background-color","yellow");
				//display id and player turn
				$("#bid").html("Current id: " + current_id );
				$("#pturn").html("Player "+playerturn+"'s turn" );
				//checking pressed status
				$("#presscheck").html("Pressed: true2");
				previous_id_2 = parseInt($(this).attr('id'));
				selected = true;
				potential_left = true;
			}
			
		} else{
			//if user press the "valid-conditioned" but decides not to move it
			selected = false;
		}

		//mousebug fix attempt
		var esc = $.Event("keydown", { keyCode: 27 });
		$("body").trigger(esc);
	});

	//mouseup
	//if mouseup location is available move the pieces to the location
	$("div.blackbox").mouseup(function(){
		var current_id = parseInt($(this).attr('id'));
		
		//player 1
		if((checkboard[current_id] == 0) && (playerturn == 1) && (selected == true)){
			var id_difference = current_id - previous_id_1;
			//check drop location
			if(id_difference < 23 && id_difference > 8){
				$(this).css("background-color","green");
				$("#"+previous_id_1).css("background-color", "black");
				//previous space
				checkboard[previous_id_1] = 0;
				//current space 
				checkboard[current_id] = 1;
				//now player 2's turn
				playerturn = 2;
				//showing id and playerturn
				$("#bid").html("current id: "+current_id);
				$("#pturn").html("Player "+playerturn+"'s turn" );
				//showing checkerboard[] content
				// $("#checkerboard").html(checkboard);
				//checking pressed status
				$("#presscheck").html("Pressed: false1");

				//moving left down to take player 2 piece
				if(potential_left == true && id_difference > 13){
					$("#"+previous_id_1).css("background-color", "black");
					var bluepiece_rmv = previous_id_1 + 9;
					$("#"+bluepiece_rmv).css("background-color", "black");
					
					//previous space
					checkboard[previous_id_1] = 0;
					//taking piece
					checkboard[bluepiece_rmv] = 0;
					//current space 
					checkboard[current_id] = 1;

					//now player 2's turn
					playerturn = 2;
					//showing id and playerturn
					$("#bid").html("current id: "+current_id);
					$("#pturn").html("Player "+playerturn+"'s turn" );
					//showing checkerboard[] content
					// $("#checkerboard").html(checkboard);
					//checking pressed status
					$("#presscheck").html("Pressed: false1");
					player2_piece = check_checker(checkboard, 2);
					$("#p2piece").html("player 2 piece: "+player2_piece);
				}

				//moving right down to take player 2 piece
				if(potential_right == true && id_difference > 13){
					$("#"+previous_id_1).css("background-color", "black");
					var bluepiece_rmv = previous_id_1 + 11;
					$("#"+bluepiece_rmv).css("background-color", "black");
					
					//previous space
					checkboard[previous_id_1] = 0;
					//taking piece
					checkboard[bluepiece_rmv] = 0;
					//current space 
					checkboard[current_id] = 1;

					//now player 2's turn
					playerturn = 2;
					//showing id and playerturn
					$("#bid").html("current id: "+current_id);
					$("#pturn").html("Player "+playerturn+"'s turn" );
					//showing checkerboard[] content
					// $("#checkerboard").html(checkboard);
					//checking pressed status
					$("#presscheck").html("Pressed: false1");
					player2_piece = check_checker(checkboard, 2);
					$("#p2piece").html("player 2 piece: "+player2_piece);
				}
				check_gameover(player2_piece,1);
			}
		//player 2
		} else if((checkboard[current_id] == 0) && (playerturn == 2) && (selected == true)){
			var id_difference = previous_id_2 - current_id;
			//check drop location
			if(id_difference < 23 && id_difference > 8){
				$(this).css("background-color","#000080");
				$("#"+previous_id_2).css("background-color", "black");
				//previous space
				checkboard[previous_id_2] = 0;
				//current space 
				checkboard[current_id] = 2;
				//now player 1's turn
				playerturn = 1;	
				//showing id and playerturn
				$("#bid").html("current id: "+current_id);
				$("#pturn").html("Player "+playerturn+"'s turn" );
				//showing checkerboard[] content
				// $("#checkerboard").html(checkboard);
				//checking pressed status
				$("#presscheck").html("Pressed: false2");

				//moving left up to take player 1 piece
				if(potential_left == true && id_difference > 13){
					$("#"+previous_id_2).css("background-color", "black");
					var greenpiece_rmv = previous_id_2 - 11;
					$("#"+greenpiece_rmv).css("background-color", "black");
					
					//previous space
					checkboard[previous_id_2] = 0;
					//taking piece
					checkboard[greenpiece_rmv] = 0;
					//current space 
					checkboard[current_id] = 2;

					//now player 1's turn
					playerturn = 1;
					//showing id and playerturn
					$("#bid").html("current id: "+current_id);
					$("#pturn").html("Player "+playerturn+"'s turn" );
					//showing checkerboard[] content
					// $("#checkerboard").html(checkboard);
					//checking pressed status
					$("#presscheck").html("Pressed: false2");
					player1_piece = check_checker(checkboard, 1);
					$("#p1piece").html("player 1 piece: "+player1_piece);
				}

				//moving right up to take player 1 piece
				if(potential_right == true && id_difference > 13){
					$("#"+previous_id_2).css("background-color", "black");
					var greenpiece_rmv = previous_id_2 - 9;
					$("#"+greenpiece_rmv).css("background-color", "black");
					
					//previous space
					checkboard[previous_id_2] = 0;
					//taking piece
					checkboard[greenpiece_rmv] = 0;
					//current space 
					checkboard[current_id] = 2;

					//now player 1's turn
					playerturn = 1;
					//showing id and playerturn
					$("#bid").html("current id: "+current_id);
					$("#pturn").html("Player "+playerturn+"'s turn" );
					//showing checkerboard[] content
					// $("#checkerboard").html(checkboard);
					//checking pressed status
					$("#presscheck").html("Pressed: false2");
					player1_piece = check_checker(checkboard, 1);
					$("#p1piece").html("player 1 piece: "+player1_piece);
				}
				check_gameover(player1_piece,2);
			}

		}
		selected = false;
		potential_left = false;
		potential_right = false;
		$("#presscheck").html("Pressed: falseE");
	});



	$("div.redbox").mouseup(function(){
		selected = false;
		$("#presscheck").html("Pressed: false");
		
		// var esc = $.Event("keydown", { keyCode: 27 });
		// $("body").trigger(esc);
	});

	$("div.redbox").mousedown(function(){
		selected = false;
		$("#presscheck").html("Pressed: false");
		// var esc = $.Event("keydown", { keyCode: 27 });
		// $("body").trigger(esc);
	});
}


function check_checker(checkArray, player){
	var player_piece = 0;
	for(var i = 0; i < checkArray.length; i++){
		if(checkArray[i] == player){
			player_piece++;
		}
	}
	return player_piece;
}

function check_gameover(piececount, lastmove){
	if(piececount == 0){
		if (lastmove == 1) {
			alert("player1 won!");
		} else if(lastmove == 2){
			alert("player2 won!");
		}
	}
	return;
}

// if user press player 1 piece, use function moveLdown, moveRdown, moveLdownTake, moveRdownTake
// else if user press player 2 piece, use function moveLup, moveRup, moveLupTake, moveRupTake
// 

// function checkMovedown(current){
// 	if(checkboard[current + 9] == 0 || checkboard[current + 11] == 0){
// 		return true;
// 	} else{	
// 		return false;
// 	}
// }

// } else if(checkboard[current_id - 9] == 2 || checkboard[current_id - 11] == 2){

// 			}