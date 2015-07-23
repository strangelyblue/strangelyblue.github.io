var Win={
	preload: function(){
		game.load.image('win','assets/win.png');
	},
	create: function(){
		this.add.button(0,0,'win',this.startGame,this);
	},
	startGame: function(){
		this.state.start('Game');
	}
};