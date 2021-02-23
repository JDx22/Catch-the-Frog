let renderer= Renderer();
let game = GameLogic();

game.startNewGame();
renderer.render (game.getGameState())

$('#game-main').on('click','.frog', function() {
    game.removeFrog();
    renderer.render(game.getGameState());
    
})
