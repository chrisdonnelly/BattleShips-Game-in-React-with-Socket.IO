var BoardSetupLogic = function () {

}

BoardSetupLogic.prototype.setupTrumpPieces = function (boxOfTrumpPieces, boardPositions, leftEdge, rightEdge, trumpControlArray) {

    this.state.boxOfTrumpPieces.forEach(function (piece) {

        var nextSquare = [-1, 1, -10, 10];

        this.setRandomStartSquareAndValidate(boardPositions, piece, nextSquare, leftEdge, rightEdge, trumpControlArray);
    });
};

BoardSetupLogic.prototype.setRandomStartSquareAndValidate = function (boardPositions, piece, nextSquare, leftEdge, rightEdge, trumpControlArray) {
   
    var a = (boardPositions[Math.floor(Math.random() * boardPositions.length)]);
    
    this.checkLeftIsValid(piece, nextSquare, a);
    this.checkRightIsValid(piece, nextSquare, a);
    this.checkUpIsValid(piece, nextSquare, a);
    this.checkDownIsValid(piece, nextSquare, a);
    this.checkThereIsAValidDirectionLeft(piece, nextSquare, a);
    this.setDirectionAndPlace(piece, nextSquare, trumpControlArray);
};


BoardSetupLogic.prototype.checkLeftIsValid = function (piece, nextSquare, a, rightEdge, trumpControlArray) {

    var testLeftArray = [];
    testLeftArray.push(a);

    var i = null;

    for (i = 1; i < piece.length; i++) {
        testLeftArray.push(testLeftArray[testLeftArray.length - 1] - 1)
    };

    testLeftArray.forEach(function (value) {
        if (rightEdge.includes(value) === true || value < 0 || trumpControlArray.includes(value)) {
            var index = nextSquare.indexOf(-1);
            if (index > -1) {
                nextSquare.splice(index, 1)
            }
            else {
                return;
            }
        }
        else {
            return;
        }
    });
};

BoardSetupLogic.prototype.checkRightIsValid = function (piece, nextSquare, a, leftEdge, trumpControlArray) {

    var testRightArray = [];
    testRightArray.push(a);
    
    var i = null;

    for (i = 1; i < piece.length; i++) {
        testRightArray.push(testRightArray[testRightArray.length - 1] + 1)
    };

    testRightArray.forEach(function (value) {
        if (leftEdge.includes(value) === true || value > 99 || trumpControlArray.includes(value)) {
            var index = nextSquare.indexOf(1);
            if (index > -1) {
                nextSquare.splice(index, 1)
            }
            else {
                return;
            }
        }
        else {
            return
        }
    });
};

BoardSetupLogic.prototype.checkUpIsValid = function (piece, nextSquare, a, trumpControlArray) {

    var testUpArray = [];
    testUpArray.push(a);

    var i = null;

    for (i = 1; i < piece.length; i++) {
        testUpArray.push(testUpArray[testUpArray.length - 1] - 10)
    };

    testUpArray.forEach(function (value) {
        if (value < 0 || trumpControlArray.includes(value)) {
            var index = nextSquare.indexOf(-10);
            if (index > -1) {
                nextSquare.splice(index, 1)
            }
            else {
                return
            }
        }
        else {
            return
        }
    });
};

BoardSetupLogic.prototype.checkDownIsValid = function (piece, nextSquare, a, trumpControlArray) {

    var testDownArray = [];
    testDownArray.push(a);

    var i = null;

    for (i = 1; i < piece.length; i++) {
        testDownArray.push(testDownArray[testDownArray.length - 1] + 10)
    };

    testDownArray.forEach(function (value) {
        if (value > 99 || trumpControlArray.includes(value)) {
            var index = nextSquare.indexOf(+10);
            if (index > -1) {
                nextSquare.splice(index, 1)
            }
            else {
                return
            };
        }
        else {
            return;
        }
    });
};

BoardSetupLogic.prototype.checkThereIsAValidDirectionLeft = function (piece, nextSquare, a, trumpControlArray) {

    if (nextSquare.length > 1) {
        piece.location.push(a);
        trumpControlArray.push(a);
    }
    else {
        this.setRandomStartSquare();
    }
};

BoardSetupLogic.prototype.setDirection = function (piece, nextSquare, trumpControlArray) {

    var b = null;
    var lastStep = piece.location[piece.location.length - 1];
    var nextStep = (nextSquare[Math.floor(Math.random() * nextSquare.length)]);
    b = lastStep + nextStep;
    piece.location.push(b);
    trumpControlArray.push(b);

    var z = 2
    while (z < piece.length) {
        var x = piece.location[piece.location.length - 1] + nextStep;
        piece.location.push(x);
        trumpControlArray.push(x);
        z++;
    }
};

export default BoardSetupLogic;



