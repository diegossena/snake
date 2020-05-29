var intervalGame = null;
var position = [];
var pointscore = 0;
function start(){
	// Seta Posição Inicial do snake
	var y = 0;
	position = [TAMANHO/2+TAMANHO*(TAMANHO/2)-TAMANHO*2];
	for (var i=1; i<3; i++){
		y += TAMANHO;
		position.push(TAMANHO/2+TAMANHO*TAMANHO/2-TAMANHO*2+y);
	}
	// Direções
	const UP = -TAMANHO;
	const DOWN = TAMANHO;
	const LEFT = -1;
	const RIGHT = 1;
	var direction = UP;
	// Movimenta o snake
	var gameover = false;
	var scorepoint = false
	var scoreboard = "";
	intervalGame = window.setInterval(function(){
		scoreboard = "Pontos: " + (position.length-3);
		document.getElementById("placar").innerText = scoreboard;
		if(position[0]-TAMANHO < 0 && direction == UP){
			gameover = true;
			clearInterval(intervalGame);
		}
		if(position[0]+TAMANHO > TAMANHO*TAMANHO  && direction == DOWN){
			gameover = true;
			clearInterval(intervalGame);
		}
		for(i=0; i<TAMANHO*TAMANHO; i+=TAMANHO){
			if(position[0] == i && direction == LEFT){
				gameover = true;
				clearInterval(intervalGame);
			}
		}
		for(i=TAMANHO-1; i<TAMANHO*TAMANHO; i+=TAMANHO){
			if(position[0] == i && direction == RIGHT){
				gameover = true;
				clearInterval(intervalGame);
			}
		}
		for(i=1; i<position.length; i++){
			if(position[0] == position[i]){
				gameover = true;
				clearInterval(intervalGame);
			}
		}
		if(position[0] == pointscore){
			scorepoint = false;
			position.push(position[position.length-1]);
		}
		if(scorepoint == false){
			pointscore = Math.floor(Math.random() * (TAMANHO*TAMANHO));
			scorepoint = true;
		}
		$("#"+pointscore).css("background-color", "red")
		if(position[0]+direction == position[1]){
			direction = -direction;
		}
		if(gameover == false){
			for (i=position.length-1; i>=0; i--){	
				if (i != 0){
					$("#"+position[i]).css("background-color", "black")
					position[i] = position[i-1];
				}else{
					$("#"+position[0]).css("background-color", "black")
					position[0] += direction;
				}
			}
			for (i=0; i<position.length; i++){
				if (i == 0){
					$("#"+position[i]).css("background-color", "rgb(53,222,0)")
					$("#"+position[i]).css("border-style", "solid")
					$("#"+position[i]).css("border-width", ".1px")
				}else{
					$("#"+position[i]).css("background-color", "rgb(44,174,0)")
				}
			}
		}
	}, 125);
	// Muda Direção do snake
	document.onkeydown = checkKey;
	function checkKey(e) {
		e = e || window.event;
		
		if (e.keyCode == '38') {
			// up arrow
			direction = UP;
		}
		else if (e.keyCode == '40') {
			// down arrow
			direction = DOWN;
		}
		else if (e.keyCode == '37') {
		   // left arrow
			direction = LEFT;
		}
		else if (e.keyCode == '39') {
			// right arrow
			direction = RIGHT;
		}
	}
}
function reset(){
	clearInterval(intervalGame);
	for (i=0; i<position.length; i++){
		$("#"+position[i]).css("background-color", "black")
	}
	$("#"+pointscore).css("background-color", "black")
}