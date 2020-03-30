var bg_ini, neon, _buttonPlay, _buttonHTP;

var Menu = {
    
    preload: function(){
 		game.load.image('bg_ini', 'img/bg_inicio.png');
        game.load.spritesheet('neon', 'img/sit-neon.png', 452, 506, 2);
        game.load.image('buttonPlay', 'img/btn_play3.png');
        game.load.image('buttonHTP', 'img/btn_htp.png');
    },
    
    create: function(){
        game.stage.setBackgroundColor(0x061c3d);
    	bg_ini = game.add.sprite(0, 0, 'bg_ini');

        neon = game.add.sprite(game.world.width / 2, game.world.height - 320, 'neon');
        neon.anchor.setTo(0.5, 0.5);
        neon.animations.add('setNeon', [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0], 3, true);
        neon.animations.play('setNeon');

        _buttonPlay = this.add.button(game.width / 2 + 30, game.height - 50, 'buttonPlay', this.startGame, this);
        _buttonHTP = this.add.button(game.width / 2 - 190 , game.height - 50, 'buttonHTP', this.howToPlay, this);
    },
    
    startGame: function(){
        this.state.start('SitGame');
    },

    howToPlay: function(){
        this.state.start('HowToPlay');  
    } 
};