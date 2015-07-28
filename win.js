var Win={
	preload: function(){
		game.load.image('win','assets/win.png');
	},
	create: function(){
		game.stage.backgroundColor = '#0F4F63';
		this.add.button(0,0,'win',this.startGame,this);
	},
	startGame: function(){
		this.state.start('Menu');
	}
};