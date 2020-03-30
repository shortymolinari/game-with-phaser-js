var bg_gameOver, _buttonPA, textGO, txtIniciar, txtTitle, _route;

WebFontConfig = {

    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    google: {
      families: ['Bilbo+Swash+Caps']
    }
};

var GameOver = {
    
    preload: function(){
 		game.load.image('bg_go', 'img/bg-game-over2.png');
        game.load.image('button_reStart', 'img/btn_return.png');
    },
    
    create: function(){
        game.stage.setBackgroundColor(0x061c3d);
    	bg_gameOver = game.add.tileSprite(0, 0, 800, 600, 'bg_go');
        _buttonPA = this.add.button(game.width / 2, game.height / 2 + 85, 'button_reStart', this.startGame, this);
        _buttonPA.anchor.setTo(0.5, 0.5);
         
        textGO = "¡Oh cielos! ahora Shakespeare está muerto :( \npero tranquilo lo puedes revivir y jugar de nuevo, \nsólo da click en la lápida.";
        txtIniciar = game.add.text(game.world.centerX + 200 , game.world.centerY - 160, textGO, {font: "20px", fill:"#FFFFFF", align:"center"});
        txtIniciar.anchor.setTo(1);

        txtIniciar.font = 'Bilbo+Swash+Caps';
        txtIniciar.fontSize = 20;
    },
    
    startGame: function(){
        route = location.href;
        window.location.href = route;
    } 
};