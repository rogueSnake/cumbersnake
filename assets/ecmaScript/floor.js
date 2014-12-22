cumbersnake.floor = Object.create(cumbersnake.segment);

cumbersnake.floor.create = function () {
    console.log("placing floor sprite, this = ", this);
    this.place('floor');
};