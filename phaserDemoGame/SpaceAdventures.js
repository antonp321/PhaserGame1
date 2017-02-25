/// <reference path = "lib/typescript/phaser.d.ts"/>
///<reference path="States/Menu.ts"/>
///<reference path="States/Game.ts"/>
///<reference path="States/Boot.ts"/>
///<reference path="States/GameOver.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpaceAdventures;
(function (SpaceAdventures_1) {
    var SpaceAdventures = (function (_super) {
        __extends(SpaceAdventures, _super);
        function SpaceAdventures(width, height) {
            var _this = this;
            _super.call(this, width, height, Phaser.AUTO, 'PhaserDemo', { create: function () { return _this.createIt(); } });
            this.game = this;
        }
        SpaceAdventures.prototype.createIt = function () {
            this.game.state.add("Boot", SpaceAdventures_1.Boot, false);
            this.game.state.add("Game", SpaceAdventures_1.Game, false);
            this.game.state.add("Menu", SpaceAdventures_1.Menu, false);
            this.game.state.add("GameOver", SpaceAdventures_1.GameOver, false);
            this.game.state.start("Boot");
        };
        return SpaceAdventures;
    }(Phaser.Game));
    SpaceAdventures_1.SpaceAdventures = SpaceAdventures;
    window.onload = function () {
        new SpaceAdventures(950, 660);
    };
})(SpaceAdventures || (SpaceAdventures = {}));
//# sourceMappingURL=SpaceAdventures.js.map