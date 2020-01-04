var pos_x = 0;
var pos_y =0;
var timer = setInterval(move,20);
var box = document.getElementById('boxId');
var flag_move = true;
function move(){
	if( pos_x >=160 | pos_y >=80){
		clearInterval(timer);
	}
	else{
		pos_x += 1;
		pos_y +=0.5;
		box.style.left = pos_x + 'px';
		box.style.top = pos_y + 'px';
	}
	
}