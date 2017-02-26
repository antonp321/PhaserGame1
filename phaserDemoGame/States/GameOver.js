/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="Game.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpaceAdventures;
(function (SpaceAdventures) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            _super.apply(this, arguments);
        }
        GameOver.prototype.init = function (score, maxScore) {
            this.score = score;
        };
        GameOver.prototype.create = function () {
            var maxScore = localStorage.getItem("maxScore");
            this.game.add.sprite(0.5, 0.5, "GameOverBackground");
            var gameOverImage = this.game.add.image(this.game.width * 0.1, this.game.height * 0.02, 'GamOverImg');
            var scoreImage = this.game.add.image(this.game.width * 0.2, this.game.height * 0.3, 'Score');
            var maxScoreImage = this.game.add.image(this.game.width * 0.21, this.game.height * 0.47, 'MaxScore');
            var playButton = this.game.add.button(this.game.width * 0.52, this.game.height * 0.75, "BackToMainMenu", this.startGame, this);
            this.game.add.text(this.game.width * 0.57, this.game.height * 0.34, this.score.toString(), { font: '74px Arial', fill: '#fff' });
            this.game.add.text(this.game.width * 0.60, this.game.height * 0.51, maxScore, { font: '74px Arial', fill: '#fff' });
            playButton.input.priorityID = 1;
            playButton.anchor.set(0.5);
            var exitButton = this.game.add.button(this.game.width * 0.52, this.game.height * 0.9, "ExitGame", this.exitGame, this);
            exitButton.input.priorityID = 2;
            exitButton.anchor.set(0.5);
        };
        GameOver.prototype.update = function () {
        };
        GameOver.prototype.startGame = function () {
            this.game.state.start("Menu");
        };
        GameOver.prototype.exitGame = function () {
            window.close();
        };
        return GameOver;
    }(Phaser.State));
    SpaceAdventures.GameOver = GameOver;
})(SpaceAdventures || (SpaceAdventures = {}));
//# sourceMappingURL=GameOver.js.map