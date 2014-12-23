cumbersnake.controls = {
    currentDirection : 'up',
    
    setDirection : function (futureDirection) {
        this.currentDirection = futureDirection;
    },
    
    getDirection : function () {
        return this.currentDirection;
    },
    
    checkKey : function (dir) {
        if (cumbersnake.run.game.input.keyboard.isDown(Phaser.keyboard[dir.toUpperCase()])) {
            this.setDirection(dir);
        }
    },
    
    getInput : function () {
        this.checkKey('up');
        this.checkKey('down');
        this.checkKey('left');
        this.checkKey('right');
    }
};