/// <reference path = "../lib/typescript/phaser.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpaceAdventures;
(function (SpaceAdventures) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.game.load.image("MenuBackground", "Imgs/menuBackground.jpg");
            this.game.load.image("PlayBtn", "Imgs/playButton.png");
            this.game.load.image("GamOverImg", "Imgs/gameOverLogo.png");
            this.game.load.image("ExitBtn", "Imgs/exitBtn.png");
            this.game.load.image("LevelBackground", "Imgs/starsLevelBackground.jpg");
            this.game.load.image("Player", "Imgs/player.png");
            this.game.load.image("Rock", "Imgs/rock.png");
            this.game.load.image("Rocket", "Imgs/rocketBullet.png");
            this.game.load.image("Live", "Imgs/live.png");
            this.game.load.spritesheet("explode", "Imgs/explode.png", 128, 128);
            this.game.load.image("Bonus", "Imgs/bonusBullets.png");
            this.game.load.image("GameOverBackground", "Imgs/blackBackground.jpg");
            this.game.load.image("BackToMainMenu", "Imgs/MainMenu.png");
            this.game.load.image("ExitGame", "Imgs/exitGame.png");
            this.game.load.image("Score", "Imgs/scoreImage.png");
            this.game.load.image("MaxScore", "Imgs/maxScore.png");
        };
        Boot.prototype.create = function () {
            this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
            var bootLogo = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, "MenuBackground");
            bootLogo.anchor.set(0.5, 0.5);
            this.game.state.start("Menu");
        };
        return Boot;
    }(Phaser.State));
    SpaceAdventures.Boot = Boot;
})(SpaceAdventures || (SpaceAdventures = {}));
//# sourceMappingURL=Boot.js.map