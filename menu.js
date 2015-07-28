var gameType;
var Menu={
	preload: function(){
		//game.load.image('menu','assets/menu.png');
		game.load.spritesheet('colors_button','assets/color_button.png',200,50);
		game.load.spritesheet('numbers_button','assets/numbers_button.png',200,50);
	},
	create: function(){
		//this.add.button(0,0,'menu',this.startGame,this);
		game.stage.backgroundColor = '#0F4F63';
		game.add.text(16,16,'Word Memory',{fontSize: '32px', fill: '#fff'});
		game.add.button(50, 100, 'colors_button',this.startColors,this,0,1,2,2);
		game.add.button(50, 200, 'numbers_button',this.startNumbers,this,0,1,2,2);
	},
	startColors: function(){
		gameType='colors';
		this.state.start('Game');
	},
	startNumbers: function(){
		gameType='numbers';
		this.state.start('Game');
	}
};