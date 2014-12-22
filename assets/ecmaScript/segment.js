cumbersnake.segment = {
    
    x : 0,
    y : 0,
    sprite : {},
    
    setPosition : function (x, y) {
        this.x = x;
        this.y = y;
    },
        
    place : function (imageKey) {
        this.sprite = cumbersnake.run.game.add.sprite(this.x, this.y), imageKey);
    }    
};