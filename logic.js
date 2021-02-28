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
                secondsLeft: secondsLeft
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


      //  frogArr.splice(0,frogArr.length);
        frogArr=[]
        timer = level+5;

        for (let i=0; i<frogsLeft ; i++)
            addFrog();
        if (timeout!==undefined)
        {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function() {
            if (frogsLeft>0)
            {
                clearInterval(interval)
                alert('you lost');
                gameOn= false;
            }
        },timer*1000)
        
        if (interval!==undefined)
            clearInterval(interval);
        secondsLeft=timer;
        interval = setInterval(function() {
            secondsLeft = secondsLeft-1; 
            console.log(secondsLeft);
        },1000)
    }
    const startNewGame = function() {
       // frogArr.splice(0,frogArr.length);
       frogArr=[];
        addFrog();
        level = 1;
        frogsLeft = 1;
        timer = level+5;
        gameOn = true;
        startClock = new Date();
        if (timeout!==undefined)
        {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function() {
            if (frogsLeft>0)
            {

                clearInterval(interval);
                alert('you lost');
                gameOn = false;

            }
        },timer*1000)

        if (interval!==undefined)
            clearInterval(interval);
        secondsLeft=timer;
        interval = setInterval(function() {
            secondsLeft = secondsLeft-1; 
            console.log(secondsLeft);
        },1000)
    }
    const addFrog = function () {
       frogArr.push({x:Math.random()*100,y:Math.random()*100, color:getRandomColor()}) 
    }
    return { getGameState,
             removeFrog,
             startNewGame
                }
}