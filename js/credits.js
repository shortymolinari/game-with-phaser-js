var bg_Credits, _buttonReturn, _route;


var Credits = {
    
    preload: function(){
 		game.load.image('bg_credits', 'img/creditos.png');
        game.load.image('button_reStart', 'img/btn_volver_creditos.png');
    },
    
    create: function(){
    	bg_Credits = game.add.tileSprite(0, 0, 800, 600, 'bg_credits');
        _buttonReturn = this.add.button(100, 50, 'button_reStart', this.startGame, this);
        _buttonReturn.anchor.setTo(0.5, 0.5);
    },
    
    startGame: function(){
        route = location.href;
        window.location.href = route;
    } 
};