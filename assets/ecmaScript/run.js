cumbersnake.run = {
    
    start : function () {
        console.log(cumbersnake.run);
        cumbersnake.run.game = new Phaser.Game(cumbersnake.config.SCREEN_WIDTH, 
    	    cumbersnake.config.SCREEN_HEIGHT, Phaser.AUTO, 'cumbersnake',
    	    {preload: cumbersnake.run.preload, create: cumbersnake.run.create, 
            update: cumbersnake.run.update, render: cumbersnake.run.render});
    },
    
    preload : function () {
        cumbersnake.run.game.load.image('head', cumbersnake.config.HEAD_IMAGE);
        cumbersnake.run.game.load.image('headWounded', cumbersnake.config.HEAD_WOUNDED_IMAGE);
        cumbersnake.run.game.load.image('body', cumbersnake.config.BODY_IMAGE);
        cumbersnake.run.game.load.image('bodyWounded', cumbersnake.config.BODY_WOUNDED_IMAGE);
        cumbersnake.run.game.load.image('floor', cumbersnake.config.FLOOR_IMAGE);
    },

    create : function () {
        cumbersnake.run.game.world.setBounds(0, 0, 
                cumbersnake.config.WORLD_WIDTH, 
                cumbersnake.config.WORLD_HEIGHT);
        cumbersnake.run.game.input.addPointer();
    },
        
    update : function () {

    },

    render : function () {
        
    }
};

window.onload = cumbersnake.run.start;