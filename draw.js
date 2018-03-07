// attributes
var board = document.getElementById("board");
var clear = document.getElementById("clear");

//=========================================================

// clicked on board
var draw = function(e) {
    circling(e.offsetX, e.offsetY);
}

// circle clicked on again; rm it or change color; don't add circle to board
var again = function(e) {
    if ( this.getAttribute("rm") == "t" ) {
	this.remove();
	circling( Math.floor(Math.random() * 500),
		  Math.floor(Math.random() * 500) );

    } else {
	this.setAttribute("fill", rand_color());
	this.setAttribute("rm", "t");
    }
    e.stopPropagation();
}


//=========================================================

// create circle element; add attributes; append child
var circling = function( x, y ) {
    var cic = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cic.setAttribute("rm", "f");
    cic.setAttribute("cx", x.toString());
    cic.setAttribute("cy", y.toString());
    cic.setAttribute("r", 15);
    cic.setAttribute("fill", "#000000");
    cic.addEventListener("click", again);
    board.appendChild(cic);
}


//rand color
var values = '0123456789ABCDEF';
var rand_color = function() {
    var color = '#';
    for (var x = 0; x < 6; x++) {
        color += values[Math.floor(Math.random() * 16)];
    }
    return color;
}



//=========================================================

//delete all child nodes and reseting previous x and y
var clearing = function(e) {
    while (board.hasChildNodes()) {
	board.removeChild(board.childNodes[0]);
    }
}

board.addEventListener("click", draw);
clear.addEventListener("click", clearing);
