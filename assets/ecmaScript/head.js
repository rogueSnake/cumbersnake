cumbersnake.head = Object.create(cumbersnake.segment);

cumbersnake.head.create = function () {
    this.setPosition(cumbersnake.config.HEAD_START_POSITION_X,
            cumbersnake.config.HEAD_START_POSITION_Y);
    this.place('head');
};

cumbersnake.head.translateKeys = function () {
};

cumbersnake.head.move = function () {
    tempVar = cumbersnake.translatePosition(this.x, this.y);
};