cumbersnake.controls = {
    currentDirection : 'up',
    
    setDirection : function (futureDirection) {
        this.currentDirection = futureDirection;
    },
    
    getDirection : function () {
        return this.currentDirection;
    },
    
    checkKey : function (direction) {
        if (cumbersnake.run.game.input.keyboard.isDown(Phaser.Keyboard[direction.toUpperCase()])) {
            this.setDirection(direction);
        }
    },
    
    getInput : function () {
        this.checkKey('up');
        this.checkKey('down');
        this.checkKey('left');
        this.checkKey('right');
    }
};