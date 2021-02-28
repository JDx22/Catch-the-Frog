let renderer= Renderer();
let game = GameLogic();

//game.startNewGame();
setInterval(function (){
    renderer.render (game.getGameState())
},40)

$('#game-main').on('click','.frog', function() {
    game.removeFrog();
    renderer.render(game.getGameState());
   // alert('inside game-main on click ')
})

let frogClick= function() {
    game.removeFrog();
    renderer.render(game.getGameState());
}

$('#start').on('click',function(){
    game.startNewGame();
    renderer.render (game.getGameState())

})