cumbersnake.body = Object.create(cumbersnake.segment);
// ...but not really, we need this in a loop.

cumbersnake.body.create = function () {
    this.place('body');
};