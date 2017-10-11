var GamePiece = function (type, length) {
    this.type = type;
    this.length = length;
    this.location = [];
    this.damage = 0;
    this.destroyed = false;
}

export default GamePiece;