///<reference path="Level.ts"/>
///<reference path="../GraphUtil/LevelBackground.ts"/>
///<reference path="../GameObjects/Rock.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpaceAdventures;
(function (SpaceAdventures) {
    var LevelOne = (function (_super) {
        __extends(LevelOne, _super);
        function LevelOne(game) {
            _super.call(this, game);
        }
        LevelOne.prototype.create = function (difficulty) {
            this.levelGroup = this.game.add.group();
            this.background = new SpaceAdventures.LevelBackground(this.game, "LevelBackground", 2.5, this.levelGroup);
            _super.prototype.create.call(this, difficulty);
        };
        LevelOne.prototype.update = function (player, difficulty) {
            _super.prototype.update.call(this, player, difficulty);
        };
        return LevelOne;
    }(SpaceAdventures.Level));
    SpaceAdventures.LevelOne = LevelOne;
})(SpaceAdventures || (SpaceAdventures = {}));
//# sourceMappingURL=LevelOne.js.map