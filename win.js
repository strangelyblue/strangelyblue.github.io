var Win={
	preload: function(){
		game.load.image('win','assets/win.png');
	},
	create: function(){
		game.stage.backgroundColor = '#30A8FF';
		this.add.button(10,25,'win',this.startGame,this);
	},
	startGame: function(){
		this.state.start('Menu');
	}
};