const GameLogic = function() {
    let frogArr= [];
    let level = 0;
    let frogsLeft = 0;
    let timer = 0;
    let timeout;
    const startDelay = 3000;
    const getGameState = function () {
        return {frogsArray:frogArr,
                level:level,
                frogsLeft}
    }
    const removeFrog = function() {
        frogsLeft--;
        if (frogsLeft === 0)
        {
            clearTimeout(timeout);
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
        timeout = setTimeout(function() {
            if (frogsLeft>0)
            {

                alert('you lost');
                
            }
        },timer*1000)
        
    }
    const startNewGame = function() {
       // frogArr.splice(0,frogArr.length);
       frogArr=[];
        addFrog();
        level = 1;
        frogsLeft = 1;
        timer = level+5;

        timeout = setTimeout(function() {
            if (frogsLeft>0)
            {
                alert('you lost');
                
            }
        },timer*1000)

    }
    const addFrog = function () {
       frogArr.push({x:Math.random()*100,y:Math.random()*100}) 
    }
    return { getGameState,
             removeFrog,
             startNewGame
                }
}