var ClozeCard = function (text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.cardType = "CC";

    var index = text.indexOf(cloze);
    if (index > -1) {
        console.log(text.length, index)
        this.clozeDeleted = cloze;
        this.partialText = text.substr(0, index) + "..." + text.substr(index + 1 + cloze.length, text.length - 1);
        this.fullText = text;
        this.valid = true;
    } else {
        console.log('This is not a valid Cloze Card');
    }


};

ClozeCard.prototype.getClozeDeleted = function () {
    return this.clozeDeleted;
};
ClozeCard.prototype.getPartialText = function () {
    return this.partialText;
};
ClozeCard.prototype.getFullText = function () {
    return this.fullText;
};
ClozeCard.prototype.isValid = function () {
    return this.valid;
};
ClozeCard.prototype.extractData = function () {
    return "{" + this.cardType + "|" + this.text + "|" + this.cloze + "}"
};
module.exports = ClozeCard;
