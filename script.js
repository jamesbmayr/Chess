/* start the game */
	var lastSelectedPiece
	var game
	var shadowBoard
	createGame()
	drawBoard()
	drawPieces()

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
					queen1: {
						type: "queen1",
						symbol: "&#9813;",
						x: 5,
						y: 1,
						player: 1
					},
					king1: {
						type: "king1",
						symbol: "&#9812;",
						x: 4,
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
					queen1: {
						type: "queen1",
						symbol: "&#9819;",
						x: 5,
						y: 8,
						player: 2
					},
					king1: {
						type: "king1",
						symbol: "&#9818;",
						x: 4,
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
					unhighlightSquares()

				// highlight this square
					boardPiece.parentNode.className += " selected"

				// get piece object and get possible moves			
					var piece = game["player" + boardPiece.dataset.player][boardPiece.dataset.name];
					game.status.possibleMoves = getPossibleMoves(piece)

					for(var i = 0; i < game.status.possibleMoves.length; i++){
						highlightSquare(game.status.possibleMoves[i])
					}
			}
	}

	function highlightSquare(coord){
		document.querySelector("[data-x='" + coord[0] + "'][data-y='" + coord[1] + "']").className += " legalMove"
	}

	function unhighlightSquares(){
		document.querySelectorAll(".square").forEach(function(square){
			square.className = "square"
		})
	}

/* getting moves */
	function getPossibleMoves(piece) {
		// get the moves based on the type of piece
			switch (piece.type.substring(0, piece.type.length - 1)) {
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

		// up
			var x2 = x1
			var y2 = y1
			var occupant = false

			while (y2 < 8 && !occupant){
				y2++
				occupant = getOccupant(x2, y2)

				//if the square is not occupied OR the square is occupied by an opponent's piece, then this is a valid move
				if(!occupant || game.status.turn != occupant.player){			
					validMoves.push([x2, y2])
				} 
			}

		// down
			x2 = x1
			y2 = y1
			occupant = false

			while (y2 > 1 && !occupant){
				y2--
				occupant = getOccupant(x2, y2)

				//if the square is not occupied OR the square is occupied by an opponent's piece, then this is a valid move
				if(!occupant || game.status.turn != occupant.player){			
					validMoves.push([x2, y2])
				} 
			}

		// right
			x2 = x1
			y2 = y1
			occupant = false

			while (x2 < 8 && !occupant){
				x2++
				occupant = getOccupant(x2, y2)

				//if the square is not occupied OR the square is occupied by an opponent's piece, then this is a valid move
				if(!occupant || game.status.turn != occupant.player){			
					validMoves.push([x2, y2])
				} 
			}

		// left
			x2 = x1
			y2 = y1
			occupant = false

			while (x2 > 1 && !occupant){
				x2--
				occupant = getOccupant(x2, y2)

				//if the square is not occupied OR the square is occupied by an opponent's piece, then this is a valid move
				if(!occupant || game.status.turn != occupant.player){			
					validMoves.push([x2, y2])
				} 
			}

		return validMoves
	}

	function getBishopMoves(x1, y1) {
		var validMoves = []

		// up-left
			var x2 = x1
			var y2 = y1
			var occupant = false

			while (y2 < 8 && x2 > 1 && !occupant){
				y2++
				x2--
				occupant = getOccupant(x2, y2)

				//if the square is not occupied OR the square is occupied by an opponent's piece, then this is a valid move
				if(!occupant || game.status.turn != occupant.player){			
					validMoves.push([x2, y2])
				} 
			}

		// down-left
			x2 = x1
			y2 = y1
			occupant = false

			while (y2 > 1 && x2 > 1 && !occupant){
				y2--
				x2--
				occupant = getOccupant(x2, y2)

				//if the square is not occupied OR the square is occupied by an opponent's piece, then this is a valid move
				if(!occupant || game.status.turn != occupant.player){			
					validMoves.push([x2, y2])
				} 
			}

		// up-right
			x2 = x1
			y2 = y1
			occupant = false

			while (y2 < 8 && x2 < 8 && !occupant){
				y2++
				x2++
				occupant = getOccupant(x2, y2)

				//if the square is not occupied OR the square is occupied by an opponent's piece, then this is a valid move
				if(!occupant || game.status.turn != occupant.player){			
					validMoves.push([x2, y2])
				} 
			}

		// down-right
			x2 = x1
			y2 = y1
			occupant = false

			while (y2 > 1 && x2 < 8 && !occupant){
				x2++
				y2--
				occupant = getOccupant(x2, y2)

				//if the square is not occupied OR the square is occupied by an opponent's piece, then this is a valid move
				if(!occupant || game.status.turn != occupant.player){			
					validMoves.push([x2, y2])
				} 
			}

		return validMoves
	}

	function getKingMoves(x1, y1) {
		var validMoves = []

		for (var x2 = (x1-1); x2 <= (x1+1); x2++) {
			for (var y2 = (y1-1); y2 <= (y1+1); y2++) {
				// if (1) this isn't the square the king is on (2) & (3) we're still on the board
				if (!(x2 == x1 && y2 == y1) && (x2 <= 8 && x2 >= 1) && (y2 <= 8 && y2 >= 1) ) {
					var occupant = getOccupant(x2, y2)
					if(!occupant || game.status.turn != occupant.player){			
						validMoves.push([x2, y2])
					}
				}
			}
		}

		return validMoves
	}

	function getQueenMoves(x1, y1) {
		var rookMoves = getRookMoves(x1, y1)
		var bishopMoves = getBishopMoves(x1, y1)

		return rookMoves.concat(bishopMoves)
	}

	function getPawnMoves(x1, y1) {
		var validMoves = []

		if(game.status.turn == 1){
			// move 1
			if(y1 + 1 <= 8){
				var occupant = getOccupant(x1, y1 + 1)
				if(!occupant){			
					validMoves.push([x1, y1 + 1])
				}
			}

			// capture
			if(y1 + 1 <= 8 && x1 + 1 <= 8){
				var occupant = getOccupant(x1 + 1, y1 + 1)
				if(occupant && game.status.turn != occupant.player){			
					validMoves.push([x1 + 1, y1 + 1])
				}
			}

			// capture
			if(y1 + 1 <= 8 && x1 - 1 >= 1){
				var occupant = getOccupant(x1 - 1, y1 + 1)
				if(occupant && game.status.turn != occupant.player){			
					validMoves.push([x1 - 1, y1 + 1])
				}
			}

			// if we're on row 2, then we don't need to check if (2+2)  < 8
			if(y1 == 2){	
				var occupant = getOccupant(x1, y1 + 2)
				if(!occupant){			
					validMoves.push([x1, y1 + 2])
				}
			
			}
		}

		if(game.status.turn == 2){
			// move 1
			if(y1 - 1 >= 1){
				var occupant = getOccupant(x1, y1 - 1)
				if(!occupant){			
					validMoves.push([x1, y1 - 1])
				}
			}

			// capture
			if(y1 - 1 >= 1 && x1 + 1 <= 8){
				var occupant = getOccupant(x1 + 1, y1 - 1)
				if(occupant && game.status.turn != occupant.player){			
					validMoves.push([x1 + 1, y1 - 1])
				}
			}

			// capture
			if(y1 - 1 >= 1 && x1 - 1 >= 1){
				var occupant = getOccupant(x1 - 1, y1 - 1)
				if(occupant && game.status.turn != occupant.player){			
					validMoves.push([x1 - 1, y1 - 1])
				}
			}

			// if we're on row 7, then we don't need to check if (7 - 2) > 1
			if(y1 == 7){	
				var occupant = getOccupant(x1, y1 - 2)
				if(!occupant){			
					validMoves.push([x1, y1 - 2])
				}
			
			}
		}

		return validMoves
	}

	function getKnightMoves(x1, y1) {
		var validMoves = []
		
		if(x1 - 1 >= 1 && y1 + 2 <= 8){
			var occupant = getOccupant(x1 - 1, y1 + 2)
			if(!occupant || game.status.turn != occupant.player){			
				validMoves.push([x1 - 1, y1 + 2])
			}
		}

		if(x1 + 1 <= 8 && y1 + 2 <= 8){
			var occupant = getOccupant(x1 + 1, y1 + 2)
			if(!occupant || game.status.turn != occupant.player){			
				validMoves.push([x1 + 1, y1 + 2])
			}
		}

		if(x1 + 2 <= 8 && y1 + 1 <= 8){
			var occupant = getOccupant(x1 + 2, y1 + 1)
			if(!occupant || game.status.turn != occupant.player){			
				validMoves.push([x1 + 2, y1 + 1])
			}
		}

		if(x1 + 2 <= 8 && y1 - 1 >= 1){
			var occupant = getOccupant(x1 + 2, y1 - 1)
			if(!occupant || game.status.turn != occupant.player){			
				validMoves.push([x1 + 2, y1 - 1])
			}
		}

		if(x1 + 1 <= 8 && y1 - 2 >= 1){
			var occupant = getOccupant(x1 + 1, y1 - 2)
			if(!occupant || game.status.turn != occupant.player){			
				validMoves.push([x1 + 1, y1 - 2])
			}
		}

		if(x1 - 1 >= 1 && y1 - 2 >= 1){
			var occupant = getOccupant(x1 - 1, y1 - 2)
			if(!occupant || game.status.turn != occupant.player){			
				validMoves.push([x1 - 1, y1 - 2])
			}
		}

		if(x1 - 2 >= 1 && y1 - 1 >= 1){
			var occupant = getOccupant(x1 - 2, y1 - 1)
			if(!occupant || game.status.turn != occupant.player){			
				validMoves.push([x1 - 2, y1 - 1])
			}
		}

		if(x1 - 2 >= 1 && y1 + 1 <= 8){
			var occupant = getOccupant(x1 - 2, y1 + 1)
			if(!occupant || game.status.turn != occupant.player){			
				validMoves.push([x1 - 2, y1 + 1])
			}
		}

		return validMoves
	}

	function getOccupant(x, y) {
		if( (x >= 1 && x <= 8) && (y >= 1 && y <= 8) && typeof(shadowBoard[x + ", " + y]) != "undefined"){		// if there's a piece at this square...	
			var shadowPiece = shadowBoard[x + ", " + y] || null
			return game["player" + shadowPiece.player][shadowPiece.type]
		} else {
			return false
		}
	}

	function switchTurn(){
		// if it's player 1's turn, switch to player 2, or else player 1
			game.status.turn = (game.status.turn == 1) ? 2 : 1 
	}

	function makeShadowBoard(){
		shadowBoard = {}

		// check player 1
			for (piece in game.player1){
				var thisPiece = game.player1[piece]

				shadowBoard[thisPiece.x + ", " + thisPiece.y] = JSON.parse(JSON.stringify(thisPiece))			// shadowBoard["7,6"] = { ... }
			}

		// check player 2
			for (piece in game.player2){
				var thisPiece = game.player2[piece]

				shadowBoard[thisPiece.x + ", " + thisPiece.y] = JSON.parse(JSON.stringify(thisPiece))
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
			makeShadowBoard()

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
		})
	})
