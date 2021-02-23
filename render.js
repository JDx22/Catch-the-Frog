let Renderer = function () {


    let renderGame =function (gameObject) {
        let level=gameObject.level;
        let frogsLeft= gameObject.frogsLeft;
        let frogsArray = gameObject.frogsArray;    
        $('#game-main').empty();
        for (let frog of frogsArray) {
            let $frog = $(`<div class="frog" ><i class="fas fa-frog"></i></div>`);
            $frog.css('color',"red")
            $frog.css('top',frog.y+'%')
            $frog.css('left',frog.x+'%')
            $('#game-main').append($frog);
        }



    }
    return {render:renderGame};
}