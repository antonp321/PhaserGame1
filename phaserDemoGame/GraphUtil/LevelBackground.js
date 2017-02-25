/// <reference path = "../lib/typescript/phaser.d.ts"/>
var SpaceAdventures;
(function (SpaceAdventures) {
    var LevelBackground = (function () {
        function LevelBackground(game, key, velocity, group) {
            this.game = game;
            this.image = this.game.add.sprite(0, 0, key, 0, group);
            this.velocity = velocity;
        }
        LevelBackground.prototype.update = function () {
        };
        return LevelBackground;
    }());
    SpaceAdventures.LevelBackground = LevelBackground;
})(SpaceAdventures || (SpaceAdventures = {}));
//# sourceMappingURL=LevelBackground.js.map