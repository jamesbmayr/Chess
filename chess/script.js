/* start the game */
	var lastSelectedPiece;
	var game;
	createGame();
	drawBoard();
	drawPieces();

/* creating the game */
	function createGame() {
		// create the game object (status, player1, player2)
			game = {
				status: {
					turn: 1,
					progress: true,
					possiblesMoves: []				
				},
				player1: {
					pawn1: {
						type: "pawn1",
						symbol: "&#9817;",
						x: 1,
						y: 2,
						player: 1
					},
					pawn2: {
						type: "pawn2",
						symbol: "&#9817;",
						x: 2,
						y: 2,
						player: 1
					},
					pawn3: {
						type: "pawn3",
						symbol: "&#9817;",
						x: 3,
						y: 2,
						player: 1
					},
					pawn4: {
						type: "pawn4",
						symbol: "&#9817;",
						x: 4,
						y: 2,
						player: 1
					},
					pawn5: {
						type: "pawn5",
						symbol: "&#9817;",
						x: 5,
						y: 2,
						player: 1
					},
					pawn6: {
						type: "pawn6",
						symbol: "&#9817;",
						x: 6,
						y: 2,
						player: 1
					},
					pawn7: {
						type: "pawn7",
						symbol: "&#9817;",
						x: 7,
						y: 2,
						player: 1
					},
					pawn8: {
						type: "pawn8",
						symbol: "&#9817;",
						x: 8,
						y: 2,
						player: 1
					},
					rook1: {
						type: "rook1",
						symbol: "&#9814;",
						x: 1,
						y: 1,
						player: 1
					},
					rook2: {
						type: "rook2",
						symbol: "&#9814;",
						x: 8,
						y: 1,
						player: 1
					},
					knight1: {
						type: "knight1",
						symbol: "&#9816;",
						x: 2,
						y: 1,
						player: 1
					},
					knight2: {
						type: "knight2",
						symbol: "&#9816;",
						x: 7,
						y: 1,
						player: 1
					},
					bishop1: {
						type: "bishop1",
						symbol: "&#9815;",
						x: 3,
						y: 1,
						player: 1
					},
					bishop2: {
						type: "bishop2",
						symbol: "&#9815;",
						x: 6,
						y: 1,
						player: 1
					},
					queen: {
						type: "queen1",
						symbol: "&#9813;",
						x: 4,
						y: 1,
						player: 1
					},
					king: {
						type: "king1",
						symbol: "&#9812;",
						x: 5,
						y: 1,
						player: 1
					}
				},
				player2: {
					pawn1: {
						type: "pawn1",
						symbol: "&#9823;",
						x: 1,
						y: 7,
						player: 2
					},
					pawn2: {
						type: "pawn2",
						symbol: "&#9823;",
						x: 2,
						y: 7,
						player: 2
					},
					pawn3: {
						type: "pawn3",
						symbol: "&#9823;",
						x: 3,
						y: 7,
						player: 2
					},
					pawn4: {
						type: "pawn4",
						symbol: "&#9823;",
						x: 4,
						y: 7,
						player: 2
					},
					pawn5: {
						type: "pawn5",
						symbol: "&#9823;",
						x: 5,
						y: 7,
						player: 2
					},
					pawn6: {
						type: "pawn6",
						symbol: "&#9823;",
						x: 6,
						y: 7,
						player: 2
					},
					pawn7: {
						type: "pawn7",
						symbol: "&#9823;",
						x: 7,
						y: 7,
						player: 2
					},
					pawn8: {
						type: "pawn8",
						symbol: "&#9823;",
						x: 8,
						y: 7,
						player: 2
					},
					rook1: {
						type: "rook1",
						symbol: "&#9820;",
						x: 1,
						y: 8,
						player: 2
					},
					rook2: {
						type: "rook2",
						symbol: "&#9820;",
						x: 8,
						y: 8,
						player: 2
					},
					knight1: {
						type: "knight1",
						symbol: "&#9822;",
						x: 2,
						y: 8,
						player: 2
					},
					knight2: {
						type: "knight2",
						symbol: "&#9822;",
						x: 7,
						y: 8,
						player: 2
					},
					bishop1: {
						type: "bishop1",
						symbol: "&#9821;",
						x: 3,
						y: 8,
						player: 2
					},
					bishop2: {
						type: "bishop2",
						symbol: "&#9821;",
						x: 6,
						y: 8,
						player: 2
					},
					queen: {
						type: "queen1",
						symbol: "&#9819;",
						x: 4,
						y: 8,
						player: 2
					},
					king: {
						type: "king1",
						symbol: "&#9818;",
						x: 5,
						y: 8,
						player: 2
					}
				}
			}
	}

/* move piece */
	function movePieceToSquare(event){
		var destination = event.target;			// target.dataset.x && y

		// if the piece belongs to the player whose turn it is
			if (game.status.turn == lastSelectedPiece.dataset.player){

				// loop through the possible moves
					game.status.possibleMoves.forEach(function(possibleMove){

						// if the possible move square (x, y) MATCHES the selected square (x, y)
							if(possibleMove[0] == destination.dataset.x && possibleMove[1] == destination.dataset.y){

								// set the new x and y
									var thisPiece = game["player" + lastSelectedPiece.dataset.player][lastSelectedPiece.dataset.name]

									thisPiece.x =  destination.dataset.x;
									thisPiece.y =  destination.dataset.y;
								
									console.log("the piece " + thisPiece.name + " is now at " + thisPiece.x  + ", " + thisPiece.y);

								// unselect the piece
									lastSelectedPiece = null

								// redraw the board and update the turn
									drawPieces()
									switchTurn()
							} 
					});
			}
	}


	function selectPiece(boardPiece){
		// check whose turn it is
			if (game.status.turn == boardPiece.dataset.player){
				
				// set global
					lastSelectedPiece = boardPiece;

				// unhighlights other squares
					document.querySelectorAll(".selected").forEach(function (square) {
						square.className = "square"
					})

				// highlight this square
					boardPiece.parentNode.className += " selected"

				// get piece object and get possible moves			
					var piece = game["player" + boardPiece.dataset.player][boardPiece.dataset.name];
					game.status.possibleMoves = getPossibleMoves(piece)
					console.log(game.status.possibleMoves)
			}
	}


/* getting moves */
	function getPossibleMoves(piece) {
		// get the moves based on the type of piece
			switch (piece.type) {
				case "pawn":
					return getPawnMoves(piece.x, piece.y)
					break
				case "knight":
					return getKnightMoves(piece.x, piece.y)
					break
				case "bishop":
					return getBishopMoves(piece.x, piece.y)
					break
				case "rook":
					return getRookMoves(piece.x, piece.y)
					break
				case "queen":
					return getQueenMoves(piece.x, piece.y)
					break
				case "king":
					return getKingMoves(piece.x, piece.y)
					break
			}
	}

	function getRookMoves(x1, y1) {
		var validMoves = []

		for (var x2 = 1; x2 <= 8; x2++) {
			for (var y2 = 1; y2 <= 8; y2++) {
				if (!(x2 == x1 && y2 == y1)) {
					if (x2 == x1 || y2 == y1) {
						validMoves.push([x2, y2])
					}
				}
			}
		}

		return validMoves
	}

	function getRookMoves(x1, y1) {
		var validMoves = []

		// up
			var x2 = x1;
			var y2 = y1;

			while(y2 <= 8){
				if

			}

		// down

		// left

		// right

		return validMoves
	}

	function getBishopMoves(x1, y1) {
		var validMoves = []

		for (var x2 = 1; x2 <= 8; x2++) {
			for (var y2 = 1; y2 <= 8; y2++) {
				if (!(x2 == x1 && y2 == y1)) {
					if (Math.abs(y2 - y1) == Math.abs(x2 - x1)) {
						validMoves.push([x2, y2])
					}
				}
			}
		}

		return validMoves
	}

	function getKingMoves(x1, y1) {
		var validMoves = []

		for (var x2 = 1; x2 <= 8; x2++) {
			for (var y2 = 1; y2 <= 8; y2++) {
				if (!(x2 == x1 && y2 == y1)) {
					if ((Math.abs(x2 - x1) <= 1) && (Math.abs(y2 - y1) <= 1)) {
						validMoves.push([x2, y2])
					}
				}
			}
		}

		return validMoves
	}

	function getQueenMoves(x1, y1) {
		var validMoves = []

		for (var x2 = 1; x2 <= 8; x2++) {
			for (var y2 = 1; y2 <= 8; y2++) {
				if (!(x2 == x1 && y2 == y1)) {
					if (x2 == x1 || y2 == y1) {
						validMoves.push([x2, y2])
					} else if (Math.abs(y2 - y1) == Math.abs(x2 - x1)) {
						validMoves.push([x2, y2])
					}
				}
			}
		}

		return validMoves
	}

	function getPawnMoves(x1, y1) {
		var validMoves = []

		for (var x2 = 1; x2 <= 8; x2++) {
			for (var y2 = 1; y2 <= 8; y2++) {
				if (!(x2 == x1 && y2 == y1)) {

					// if this isn't the square the pawn is on

					if (game.status.turn == 1) {
						if ((x2 == x1) && (y2 - y1 == 1)) {
							validMoves.push([x2, y2])
						} else if ((x2 == x1) && (y2 - y1 == 2) && (y1 == 2)) {
							validMoves.push([x2, y2])	
						} else if ((Math.abs(x2 - x1) == 1) && (y2 - y1 == 1) && (isOccupied(x2, y2) /* ??? */)) {
							validMoves.push([x2, y2])
						} else if (false /* en passant */) {
							validMoves.push([x2, y2])	
						}
					}
					else if (game.status.turn == 2) {
						if ((x2 == x1) && (y2 - y1 == -1)) {
							validMoves.push([x2, y2])
						} else if ((x2 == x1) && (y2 - y1 == -2) && (y1 == 7)) {
							validMoves.push([x2, y2])	
						} else if ((Math.abs(x2 - x1) == 1) && (y2 - y1 == -1) && (isOccupied(x2, y2) /* ??? */)) {
							validMoves.push([x2, y2])
						} else if (false /* en passant */) {
							validMoves.push([x2, y2])	
						}
					}
				}
			}
		}

		return validMoves
	}

	function getKnightMoves(x1, y1) {
		var validMoves = []

		for (var x2 = 1; x2 <= 8; x2++) {
			for (var y2 = 1; y2 <= 8; y2++) {
				if (!(x2 == x1 && y2 == y1)) {
					if ((Math.abs(x2 - x1) == 1) && (Math.abs(y2 - y1) == 2)) {
						validMoves.push([x2, y2])
					} else if ((Math.abs(x2 - x1) == 2) && (Math.abs(y2 - y1) == 1)) {
						validMoves.push([x2, y2])
					}
				}
			}
		}

		return validMoves
	}

	function getOccupant(x, y) {
		
		if(typeof(shadowBoard[x + ", " + y]) != "undefined"){		// if there's a piece at this square...
			var shadowPiece = shadowBoard[x + "," + y]
			return game["player" + shadowPiece.player][shadowPiece.type]
		}

	}


	function switchTurn(){
		// if it's player 1's turn, switch to player 2, or else player 1
			game.status.turn = (game.status.turn == 1) ? 2 : 1 
	}


	function makeShadowBoard(){

		var shadowBoard = {}

		for (piece in game.player1){
			var thisPiece = game.player1[piece]

			shadowBoard[thisPiece.x + ", " + thisPiece.y] = JSON.parse(JSON.stringify(thisPiece))			// shadowBoard["7,6"] = { ... }
		}

	// check player 2
		for (piece in game.player2){
			var thisPiece = game.player1[piece]

			if (thisPiece.x == x && thisPiece.y == y){
				return thisPiece
			}
		}


	}



/* UI */

	function drawBoard() {
		// loop through all coordinates (top-down, left-to-right)
			for (y = 8; y >= 1; y--) {
				for(x = 1; x <= 8; x++) {

					// light or dark square?
						var thisClass = "square"
						if((x + y)%2 != 0){ thisClass = "square dark" }

					// build square and add to board
						document.getElementById("board").innerHTML += ("<div class = '" + thisClass + "' data-x = " + x + " data-y = " + y + "><span class = 'coords'>(" + x + ", " + y + ")</span></div>");
					
				}	

				// add a line break after each row
					document.getElementById("board").innerHTML += ("<br>");		
			}
	}

	function drawPieces() {

		// figure out which squares are occupied/add info

		makeShadowBoard();


		//remove pieces
			document.querySelectorAll(".piece").forEach(function(piece){
				piece.remove()
			})

		// player 1 (build the pieces, add the unicode symbol)
			for (piece in game.player1) {
				var thisPiece = game.player1[piece]
				var cell = document.querySelector("[data-x='" + thisPiece.x + "'][data-y='" + thisPiece.y + "']") // select square by piece x and y
				cell.innerHTML = "<span class='piece' data-player='1' data-name='" + piece + "'>" + thisPiece.symbol + "</span>"
			}

		// player 2 (same)
			for (piece in game.player2) {
				var thisPiece = game.player2[piece]
				var cell = document.querySelector("[data-x='" + thisPiece.x + "'][data-y='" + thisPiece.y + "']") // select square by piece x and y
				cell.innerHTML = "<span class='piece' data-player='2' data-name='" + piece + "'>" + thisPiece.symbol + "</span>"
			}
	}

/* click listener */
	document.querySelectorAll(".square").forEach(function(square){
		square.addEventListener("click",  function(event){

			// make sure it's a square
				if (event.target.className.includes("square")) {

					// get the (x, y) of the square selected
						var thisSquareX = event.target.dataset.x
						var thisSquareY = event.target.dataset.y

					if(lastSelectedPiece){
						// if you have a piece selected

						if(lastSelectedPiece.parentNode.dataset.x == thisSquareX && lastSelectedPiece.parentNode.dataset.y == thisSquareY){
							// unselect piece
								lastSelectedPiece = null
								event.target.className = "square"
						} else if(event.target.firstChild && event.target.firstChild.dataset.player == game.status.turn) {
							// if the square you clicked on has a piece on it AND it's your piece, select that piece instead
								lastSelectedPiece.parentNode.className = "square"
								lastSelectedPiece = null
								selectPiece(event.target.firstChild)
						} else {
							// move piece
								movePieceToSquare(event)
						}
					} else {
						// if you don't have a piece selected...
							if(event.target.firstChild){							// if this square HAS a child node - which would be a piece		
								selectPiece(event.target.firstChild)				// get the piece DOM element and select the piece 
							}
					}
				}
		});
	});



