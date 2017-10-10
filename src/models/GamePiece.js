var GamePiece = function (type, length) {
    this.type = type;
    this.length = length;
    this.location = [];
    this.destroyed = false;
}

export default GamePiece;