
var BasicCard = function (front, back) {
    this.front = front;
    this.back = back;
    this.cardType = "BC";
};


BasicCard.prototype.getFront = function () {
    console.log(this.front);
};

BasicCard.prototype.getBack = function() {
    console.log(this.back);
};
BasicCard.prototype.extractData = function () {
    return "{"+this.cardType+"|"+this.front+"|"+this.back+"}"
};
module.exports = BasicCard;
