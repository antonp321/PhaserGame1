/// <reference path = "../lib/typescript/phaser.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpaceAdventures;
(function (SpaceAdventures) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.apply(this, arguments);
        }
        Menu.prototype.create = function () {
            this.game.add.sprite(0.5, 0.5, "MenuBackground");
            var playButton = this.game.add.button(this.game.width * 0.59, this.game.height * 0.4, "PlayBtn", this.startGame, this);
            playButton.input.priorityID = 1;
            playButton.anchor.set(0.5);
            var exitButton = this.game.add.button(this.game.width * 0.59, this.game.height * 0.6, "ExitBtn", this.exitGame, this);
            exitButton.input.priorityID = 2;
            exitButton.anchor.set(0.5);
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype.startGame = function () {
            this.game.state.start("Game");
        };
        Menu.prototype.exitGame = function () {
            window.close();
        };
        return Menu;
    }(Phaser.State));
    SpaceAdventures.Menu = Menu;
})(SpaceAdventures || (SpaceAdventures = {}));
//# sourceMappingURL=Menu.js.map