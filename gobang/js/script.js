var chessBoard = [];
var me = true;

// 不让重复落子，给每个坐标一个标记
for(var i=0; i<15; i++){
	chessBoard[i] = [];
	for(var j = 0; j < 15; j++){
		chessBoard[i][j] = 0;
	}
}

var gobang = document.getElementById('gobang');
var context = gobang.getContext('2d');
// 设置画笔颜色
context.strokeStyle = '#BFBFBF';

var logo = new Image();
logo.src = "img/bg.jpg";
logo.onload = function() {
    // 背景图
    context.drawImage(logo, 0, 0, 450, 450);
    // 画棋盘
    drawChessBoard();
}

var drawChessBoard = function() {
    for (var i = 0; i < 15; i++) {
    	//canvas 画直线
        context.moveTo(15 + 30 * i, 15);
        context.lineTo(15 + 30 * i, 435);
        context.stroke();

        context.moveTo(15, 15 + 30 * i);
        context.lineTo(435, 15 + 30 * i);
        context.stroke();
    }
}

var oneStep = function(i, j, me) {
    // 画棋子
    context.beginPath();
    context.arc(15 + 30 * i, 15 + 30 * j, 13, 0, 2 * Math.PI);
    context.closePath();
    // 填充渐变色
    var gradient = context.createRadialGradient(15 + 30 * i + 2, 15 + 30 * j - 2, 13, 15 + 30 * i + 2, 15 + 30 * j - 2, 0);
    if (me) {
        gradient.addColorStop(0, '#0A0A0A');
        gradient.addColorStop(1, '#636766');
    } else {
        gradient.addColorStop(0, '#D1D1D1');
        gradient.addColorStop(1, '#F9F9F9');
    }
    context.fillStyle = gradient;
    context.fill();
}

gobang.onclick = function(e){
	var x = e.offsetX;
	var y = e.offsetY;

	var i = Math.floor(x / 30);
	var j = Math.floor(y / 30);
	if(chessBoard[i][j] == 0){
		oneStep(i, j, me); // 落子
		if(me){
			chessBoard[i][j] =  1;
		}else{
			chessBoard[i][j] = 2;
		}
		me = !me;
	}
}
