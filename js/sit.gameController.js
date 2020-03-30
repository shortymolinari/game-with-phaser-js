var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'setGame');

game.state.add('Menu', Menu);
game.state.add('HowToPlay', HowToPlay);
game.state.add('Credits', Credits);
game.state.add('SitGame', SitGame);
game.state.add('GameFinished', GameFinished);
game.state.add('GameOver', GameOver);

game.state.start('Menu');


