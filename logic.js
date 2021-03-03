const GameLogic = function() {
    let frogArr= [];
    let level = 0;
    let frogsLeft = 0;
    let timer = 0;
    let timeout;
    let gameOn = false;
    let secondsLeft=0;
    let interval;
    let startClock;
    let message;
    let secondsLeftColor="Black";
    const blinkTime = 0.3;
    // let resetGame = false;
    
    // const resetGame = function () {
    //      frogArr= [];
    //      level = 0;
    //      frogsLeft = 0;
    //      timer = 0;
    //      timeout;
    //      gameOn = false;
    //      secondsLeft=0;
    //      resetGame=true;
    // }
    const getRandomColor= function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    const getGameState = function () {
        return {frogsArray:frogArr,
                level:level,
                frogsLeft:frogsLeft,
                gameOn:gameOn,
                secondsLeft: secondsLeft,
                message:message,
                secondsLeftColor:secondsLeftColor
            }
    }
    const removeFrog = function() {
        frogsLeft--;
        if (frogsLeft === 0)
        {
            if (timeout!==undefined)
            {
                clearTimeout(timeout);
            }
            if (interval!==undefined)
            {
                clearInterval(interval);
            }
            alert('you win');
            startNewLevel();
        }
        else 
        {
            frogArr=[];
            for (let i=0; i<frogsLeft ; i++)
                addFrog();

        }


    }
    const startNewLevel = function() {
        level++;
        frogsLeft=level;
        message = 0;

      //  frogArr.splice(0,frogArr.length);
        frogArr=[]
        timer = level+5;
        startClock = new Date();

        for (let i=0; i<frogsLeft ; i++)
            addFrog();

        if (interval!==undefined)
            clearInterval(interval);
    // secondsLeft=timer;
        interval = setInterval(function() {
            let now = new Date()
            secondsLeft = timer-Math.trunc((now-startClock)/1000); 
            let subSecondsLeft = timer- (now-startClock)/1000
            if (subSecondsLeft<=3 && subSecondsLeft> 3-blinkTime)
                secondsLeftColor = "Red";
            else if (subSecondsLeft<=timer && subSecondsLeft>timer-blinkTime)
                secondsLeftColor = "Yellow"
            else
                secondsLeftColor = "Black"
            console.log(secondsLeft);
            if (secondsLeft===0)
            {
                clearInterval(interval);
                message =1;
                gameOn = false; 
            }
        },40)
        // if (timeout!==undefined)
        // {
        //     clearTimeout(timeout);
        // }
        // timeout = setTimeout(function() {
        //     if (frogsLeft>0)
        //     {
        //         clearInterval(interval)
        //         alert('you lost');
        //         gameOn= false;
        //     }
        // },timer*1000)
        
        // if (interval!==undefined)
        //     clearInterval(interval);
        // secondsLeft=timer;
        // interval = setInterval(function() {
        //     secondsLeft = secondsLeft-1; 
        //     console.log(secondsLeft);
        // },1000)
    }
    const startNewGame = function() {
       // frogArr.splice(0,frogArr.length);
       message = 0;
       frogArr=[];
        addFrog();
        level = 1;
        frogsLeft = 1;
        timer = level+5;
        gameOn = true;
        startClock = new Date();
        
        // if (timeout!==undefined)
        // {
        //     clearTimeout(timeout);
        // }
        // timeout = setTimeout(function() {
        //     if (frogsLeft>0)
        //     {

        //         clearInterval(interval);
        //         alert('you lost');
        //         gameOn = false;

        //     }
        // },timer*1000)

        if (interval!==undefined)
            clearInterval(interval);
        // secondsLeft=timer;
        interval = setInterval(function() {
            let now = new Date()
            secondsLeft = timer-Math.trunc((now-startClock)/1000); 
            let subSecondsLeft = timer- (now-startClock)/1000
            if (subSecondsLeft<=3 && subSecondsLeft> 3-blinkTime)
                secondsLeftColor = "Red";
            else if (subSecondsLeft<=timer && subSecondsLeft>timer-blinkTime)
                secondsLeftColor = "Yellow"
            else
                secondsLeftColor = "Black"
            console.log(secondsLeft);
            if (secondsLeft===0)
            {
                clearInterval(interval);
                message = 1;
                gameOn = false; 
            }
        },40)
    }
    const addFrog = function () {

        let y = Math.random()*100;
        let x = Math.random()*100;
        
        y= y-Math.sqrt(y);
        x= x-Math.sqrt(x);
        let size = Math.min(x,y)
       frogArr.push({x:x,y:y,size:size, color:getRandomColor()}) 
    }
    return { getGameState,
             removeFrog,
             startNewGame
                }
}