function create(){

	var board = document.getElementById("board");
	var tile_size = 95;
	var flip = 1;

	board.style.width = 8*tile_size+"px";

	for(var i = 0; i < 8; i++){
		for (var j = 0; j < 8; j++) {
			var position= (i+1)+""+(j+1);
			
			if(j%2 == flip){
				//coloring red tile
				board.innerHTML += "<div id="+position+" class=\"redbox\" style='background-color:red; width:" +tile_size+"px; height:"+tile_size+"px; float:left;'></div>";
			} else {
				if(i < 3){
					//coloring pieces green (player 1)
					board.innerHTML += "<div id="+position+" class=\"blackbox\" style='background-color:green; width:"+tile_size+"px; height:"+tile_size+"px; float:left;'></div>";
				} else if(i > 4){
					//coloring pieces navy (player 2)
					board.innerHTML += "<div id="+position+" class=\"blackbox\" style='background-color:#000080; width:"+tile_size+"px; height:"+tile_size+"px; float:left;'></div>";
				} else {
					//coloring black tile
					board.innerHTML += "<div id="+position+" class=\"blackbox\" style='background-color:black; width:"+tile_size+"px; height:"+tile_size+"px; float:left;'></div>";
				}
			}
		}
		flip = -flip + 1;
	}
}
