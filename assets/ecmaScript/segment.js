//namespace
cumbersnake.segment = {
    
    x : 0,
    y : 0,
    direction : 'up',
    sprite : {},
    isDead : false,
    
    setPosition : function (x, y) {
        this.x = x;
        this.y = y;
    },
        
    place : function (imageKey) {
        this.sprite = cumbersnake.run.game.add.sprite(this.x, this.y, imageKey);
    },
    
    checkDeath : function () {
        return this.isDead === true;
    },
    
    update : function (updateFunction) {
        if (cumbersnake.internalClock.checkReady()){
           return updateFunction;
        }
    }
};