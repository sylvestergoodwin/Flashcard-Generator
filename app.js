var basiccard = require("./basiccard");
var clozecard = require("./clozecard");
var inquirer = require("inquirer");
var fs = require('fs');

var cardPack = [{}];

function saveToFile() {
    if (cardPack.length > 0) {
        fs.appendFile("cards.txt", cardPack[1].extractData(), function (err) {
            if (err) {
                console.log("error writing to file")
            }
        })
    }
}
// implement a command line option to create cards		
function cmdLineInterface(doEntry) {
    if (doEntry) {
        inquirer.prompt([
            {
                type: "list",
                message: "Which type of card do you want to create",
                choices: ["Basic Card", "Cloze Card", "Save and Exit"],
                name: "option"
		}
	]).then(function (cardtype) {
            var doDataEntry = true;
            switch (cardtype.option) {
                case "Basic Card":
                    inquirer.prompt([
                        {
                            type: "item",
                            message: "Please Enter the text for the Front of the Card",
                            name: "front"
                        },
                        {
                            type: "item",
                            message: "Please Enter the text for the Back of the Card",
                            name: "back"
                        }
                        ]).then(function (basic) {
                        var bCard = new basiccard(basic.front, basic.back);
                        cardPack.push(bCard);
                        saveToFile();
                    });

                    doDataEntry = true;
                    break;
                case "Cloze Card":
                    inquirer.prompt([
                        {
                            type: "item",
                            message: "Please Enter the text",
                            name: "text"
                        },
                        {
                            type: "item",
                            message: "Please Enter the cloze",
                            name: "cloze"
                        }
                        ]).then(function (cloze) {
                        var cCard = new clozecard(cloze.text, cloze.cloze);
                        if (cCard.isValid()) {
                            cardPack.push(cCard);
                            saveToFile();
                        } else {
                            console.log('not a valid card');
                        }
                    });
                    doDataEntry = true;
                    break;
                case "Save and Exit":
                    doDataEntry = false;
                    break;
            }

          //  cmdLineInterface(doDataEntry);
        });

    }
}
// initiate processing
(function () {
    cmdLineInterface(true);
})();
