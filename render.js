let Renderer = function () {
    let level=0,levelPrevious=0;
    let frogsLeft= 0, frogsLeftPrevious=0;
    let frogsArray = [], frogsArrayPrevious=[];
    let gameOn = false,gameOnPrevious=false; 
    let secondsLeft = 0,secondsLeftPrevious=0;  
    let $gameMain= $('#game-main');
    let $start = $('#start');
    let $frogsLeft= $('#frogs-left');
    let $level = $('#level');
    let $header = $('#header');

    const compareArr = function() {
        
        if (frogsArray.length !== frogsArrayPrevious.length )
            return false;
        for (let i=0; i<frogsArray.length ; i++)
            if (frogsArray[i].x!==frogsArrayPrevious[i].x 
                ||frogsArray[i].y!==frogsArrayPrevious[i].y 
                ||frogsArray[i].color!==frogsArrayPrevious[i].color) 
                return false;
        return true;
    }

    const renderGame =function (gameObject) {
         level=gameObject.level;
         frogsLeft= gameObject.frogsLeft;
         frogsArray = gameObject.frogsArray;
         gameOn = gameObject.gameOn; 
         secondsLeft = gameObject.secondsLeft; 
        
        if (!compareArr())
        {
            $gameMain.empty();
            frogsArrayPrevious=[];
            for (let frog of frogsArray) {
                let $frog = $(`<div class="frog"  ><i class="fas fa-frog"></i></div>`);
                $frog.css('color',frog.color)
                $frog.css('top',frog.y+'%')
                $frog.css('left',frog.x+'%')
                $gameMain.append($frog);
                frogsArrayPrevious.push(frog)
            }
        }
        if (gameOn!==gameOnPrevious)
        {
            if (gameOn) 
            {
                $start.text(`Catch the Frogs!`);
            } else
                $start.text('Start Game');
            
            gameOnPrevious=gameOn;
        }
        if (frogsLeft!==frogsLeftPrevious)
        {
            
            if (frogsLeft === 0)
                $frogsLeft.text('- Frogs left')
                else
                    $frogsLeft.text(`${frogsLeft} Frogs left`)
            frogsLeftPrevious=frogsLeft;
        }
        if (level!==levelPrevious) {
            $level.text(`Level ${level}`);
            levelPrevious = level;
        }
        if (secondsLeft!==secondsLeftPrevious)
        {
            $header.text(`${secondsLeft} Seconds left`)
            secondsLeftPrevious=secondsLeft;
        }
    }
    return {render:renderGame};
}