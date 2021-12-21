const prompt = require("prompt-sync")();

var snakeAndLadder = function(){
    var snakeObj = {};
    var ladderObj = {};
    var playerObj = {};
    var snakeNumber = parseInt(prompt("enter no. of snakes : "));

    while(snakeNumber--){
        var head = parseInt(prompt("enter head pos of snakes : "));
        var tail = parseInt(prompt("enter tail pos of snakes : "));
        snakeObj[head] = tail;
    }

    var LadderNumber = parseInt(prompt("enter no. of ladders : "));

    while(LadderNumber--){
        var start = parseInt(prompt("enter start pos of ladder : "));
        var end = parseInt(prompt("enter end pos of ladder : "));
        ladderObj[start] = end;
    }

    var playerNumber = parseInt(prompt("enter no. of players : "));

    while(playerNumber--){
        var name = prompt("enter name of player : ");
        playerObj[name] = 0;
    }

    while(1){
            for(const key in playerObj){
            var diceResult = Math.floor(Math.random() * 7) + 1;
            var initialPos = playerObj[key];
            var pos = initialPos + diceResult;
            if(snakeObj[pos]){
                pos = snakeObj[pos];
            } else if(ladderObj[pos]){
                pos = ladderObj[pos];
            }
            if(pos <= 100){
                playerObj[key] = pos;
                console.log(key, ' rolled a ', diceResult, ' and moved from ', initialPos, ' to ', pos, '\n');
            } 
            if(pos == 100){
                console.log(key, ' wins the game');
                return;
            }
        };
    }
}

snakeAndLadder();