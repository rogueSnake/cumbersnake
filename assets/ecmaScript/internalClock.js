cumbersnake.internalClock = {
    time : 0,
    ready : true,
    
    isNewTurn : function () {
        return this.time >= cumbersnake.config.TURN_LENGTH;
    },

    resetTime : function () {
        console.log("Before isNewTurn");
        console.log(this.isNewTurn());
        if (this.isNewTurn()) {
            this.time = 0;
            console.log("Inside isNewTurn");
        }
    },
    
    tick : function () {
        this.time += 1;
        this.ready = this.isNewTurn();
        this.resetTime();
    },
    
    checkReady : function () {
        return this.ready;
    }
    
};