let Renderer = function () {
    let level=0,levelPrevious;
    let frogsLeft= 0, frogsLeftPrevious;
    let frogsArray = [], frogsArrayPrevious;
    let gameOn = false,gameOnPrevious; 
    let secondsLeft = 0,secondsLeftPrevious; 
    let message =0 , messagePrevious; 
    let secondsLeftColor = "White", secondsLeftColorPrevious;
    let $gameMain= $('#game-main');
    let $start = $('#start');
    let $frogsLeft= $('#frogs-left');
    let $level = $('#level');
    let $header = $('#header');

    const compareArr = function() {
        if (frogsArrayPrevious===undefined)
            return false;
        if (frogsArray.length !== frogsArrayPrevious.length )
            return false;
        for (let i=0; i<frogsArray.length ; i++)
            if (frogsArray[i].x!==frogsArrayPrevious[i].x 
                ||frogsArray[i].y!==frogsArrayPrevious[i].y 
                ||frogsArray[i].color!==frogsArrayPrevious[i].color
                ||frogsArray[i].size!==frogsArrayPrevious[i].size) 
                return false;
        return true;
    }

    const renderGame =function (gameObject) {
         level=gameObject.level;
         frogsLeft= gameObject.frogsLeft;
         frogsArray = gameObject.frogsArray;
         gameOn = gameObject.gameOn; 
         secondsLeft = gameObject.secondsLeft; 
         message = gameObject.message;
         secondsLeftColor = gameObject.secondsLeftColor;
        if (!compareArr())
        {
            $gameMain.empty();
            frogsArrayPrevious=[];
            for (let frog of frogsArray) {
                let $frog = $(`<div class="frog"  ><i class="fas fa-frog"></i></div>`);
                $frog.css('color',frog.color)
                $frog.css('top',frog.y+'%')
                $frog.css('left',frog.x+'%')
                $frog.css('font-size',frog.y*3+'%');
                // $frog.css('width',frog.y+'%')
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
        
        if (secondsLeft!==secondsLeftPrevious || secondsLeftColor!==secondsLeftColorPrevious)
        {
            
            $header.text(`${secondsLeft} Seconds left`)
            $header.css('color',secondsLeftColor)
            
            if (secondsLeft!==secondsLeftPrevious)
                secondsLeftPrevious=secondsLeft;
            if (secondsLeftColor!==secondsLeftColorPrevious)
                secondsLeftColorPrevious =secondsLeftColor;
        }
        if (message !==messagePrevious)
        {
            console.log("message="+message)
            $gameMain.append('<div id="message"></div>')
            if (message===1)
                $("#message").text("You Lost!")

            // switch (message) 
            // {
            //     case 0:
            //         $("#message").hide();
            //         break;
            //     case 1:
            //        $("#message").text("You Lost!")
            //        $("#message").show();
            //     break;
            //     default:
            //         break;
            // }

            messagePrevious = message;
        }
    }
    return {render:renderGame};
}