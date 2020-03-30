var bg_ini, _buttonPlay, textResult, textCongra, textShow;

WebFontConfig = {

    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    google: {
      families: ['Bilbo+Swash+Caps']
    }
};

var GameFinished = {
    
    preload: function(){
        game.load.image('bg_ini', 'img/bg_inicio.png');
        game.load.image('buttonPlay', 'img/btn_home.png');

        game.load.image('game_winner_img', 'img/game_winner.png');
        game.load.image('game_loser_img', 'img/game_loser.png');
    },
    
    create: function(){
        game.stage.setBackgroundColor(0x061c3d);
        bg_ini = game.add.sprite(0, 0, 'bg_ini');
        
        if(getCoins >= 135){

            textResult = "Genial lograste conseguir " +  getCoins + " hojas y así Shakespeare logró presentar su obra\n y quedar muy bien con la reina Isabel I, tanto que ella le ha dado un gran regalo.";
            img_gw = game.add.sprite(50, 280, 'game_winner_img');

            textShow = game.add.text(game.world.centerX + 310 , 200, textResult, {font: "20px", fill:"#FFFFFF", align:"center"});
            textShow.anchor.setTo(1);

            textShow.font = 'Bilbo+Swash+Caps';
            textShow.fontSize = 20;
        }
        else{
            textResult = "Pero solamente conseguiste " +  getCoins + " hojas\n para completar el guión por lo tanto Shakespeare no pudo\n realizar su obra y la reina Isabel I se enojó y lo castigó.";
            img_gl = game.add.sprite(50, 280, 'game_loser_img');

            textShow = game.add.text(game.world.centerX + 210 , 200, textResult, {font: "20px", fill:"#FFFFFF", align:"center"});
            textShow.anchor.setTo(1);

            textShow.font = 'Bilbo+Swash+Caps';
            textShow.fontSize = 20;
        }

        textCongra = game.add.text(game.world.centerX + 210 , 100, "¡Felicidades lograste terminar el juego!", {font: "26px", fill:"#FFFFFF", align:"center"});
        textCongra.anchor.setTo(1);

        textCongra.font = 'Bilbo+Swash+Caps';
        textCongra.fontSize = 30;
        

        _buttonPlay = this.add.button(game.world.centerX - 70, game.height - 350, 'buttonPlay', this.startGame, this);    
    },
    
    startGame: function(){
        route = location.href;
        window.location.href = route;
    }
};