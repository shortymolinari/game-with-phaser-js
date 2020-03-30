var bg_ini, bg_htp, _buttonSG, _buttonWho, _buttonHome,  _buttonSG2, _buttonWho2, _buttonHome2, _buttonUp, _buttonDown, txtTitle_htp;

var HowToPlay = {
    
    preload: function(){
        game.load.image('bg_ini', 'img/bg_inicio.png');
        game.load.image('bg_htp', 'img/htp.png');
        game.load.image('button_home', 'img/btn_home.png');
        game.load.image('button_play', 'img/btn_play4.png');
        game.load.image('button_who', 'img/btn_who.png');
        game.load.image('button_up', 'img/btn_up.png');
        game.load.image('button_down', 'img/btn_down.png');
        game.load.image('button_SG', 'sprites/hammer-laser.png');
    },
    
    create: function(){
        game.stage.setBackgroundColor(0x061c3d);
    	bg_htp = game.add.sprite(0, 0, 'bg_ini');
        bg_htp = game.add.sprite(0, 0, 'bg_htp');

        _buttonHome = this.add.button(181, 232, 'button_home', this.startHome, this);
        _buttonSG = this.add.button(334, 232, 'button_play', this.startGame, this);
        _buttonWho = this.add.button(486, 232, 'button_who', this.creditsGame, this);

        _buttonHome2 = this.add.button(171, 2875, 'button_home', this.startHome, this);
        _buttonSG2 = this.add.button(324, 2875, 'button_play', this.startGame, this);
        _buttonWho2 = this.add.button(476, 2875, 'button_who', this.creditsGame, this);
        
        _buttonDown = this.add.button(755, game.height / 2, 'button_up', this.slideDown, this);
        _buttonUp = this.add.button(755, game.height / 2 + 40, 'button_down', this.slideUp, this);
    },

    slideUp: function(){
        if(bg_htp.position.y != -2400){
            bg_htp.position.y -= 100;

            _buttonHome.position.y -= 100;
            _buttonSG.position.y -= 100;
            _buttonWho.position.y -= 100;

            _buttonHome2.y -= 100;
            _buttonSG2.y -= 100;
            _buttonWho2.y -= 100;
        }
    },

    slideDown: function(){
        if(bg_htp.position.y != 0){
            bg_htp.position.y += 100;

            _buttonHome.y += 100;
            _buttonSG.y += 100;
            _buttonWho.y += 100;

            _buttonHome2.y += 100;
            _buttonSG2.y += 100;
            _buttonWho2.y += 100;
        }
    },

    startHome: function(){
        this.state.start('Menu');
    },
    
    startGame: function(){
        this.state.start('SitGame');
    },

    creditsGame: function(){
        this.state.start('Credits');
    }
};