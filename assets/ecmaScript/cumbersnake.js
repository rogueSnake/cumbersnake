var cumbersnake = {
    
    translatePosition : function (arrayCoordinate) {
        return arrayCoordinate === 0 ? arrayCoordinate*cumbersnake.config.SPRITE_SIZE;
    }
};

// Defines Object.create if it doesn't exist.
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}