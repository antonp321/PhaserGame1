/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="../GraphUtil/LevelBackground.ts"/>
///<reference path="../GameObjects/Difficulty.ts"/>
///<reference path="../GameObjects/Player.ts"/>
var SpaceAdventures;
(function (SpaceAdventures) {
    var Level = (function () {
        function Level(game) {
            this.game = game;
        }
        Level.prototype.create = function (difficulty) {
        };
        Level.prototype.update = function (player, difficulty) {
        };
        return Level;
    }());
    SpaceAdventures.Level = Level;
})(SpaceAdventures || (SpaceAdventures = {}));
//# sourceMappingURL=Level.js.map