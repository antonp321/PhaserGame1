/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="../GameObjects/Difficulty.ts"/>
///<reference path="../Levels/Level.ts"/>
///<reference path="../Levels/LevelOne.ts"/>
///<reference path="../GameObjects/Player.ts"/>
///<reference path="../GameObjects/Rock.ts"/>
///<reference path="../GameObjects/Rocket.ts"/>
///<reference path="../GameObjects/Explosion.ts"/>
///<reference path="../GameObjects/BulletBonus.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpaceAdventures;
(function (SpaceAdventures) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this);
        }
        Game.prototype.create = function () {
            this.difficulties = [];
            this.difficulties.push(new SpaceAdventures.Difficulty(0, 5));
            this.difficulties.push(new SpaceAdventures.Difficulty(1, 7));
            this.difficulties.push(new SpaceAdventures.Difficulty(2, 9));
            this.currentDifficulty = this.difficulties[0];
            this.shouldChangeDifficulty = true;
            this.levelOne = new SpaceAdventures.LevelOne(this.game);
            this.levelOne.create(this.currentDifficulty);
            this.currentLevel = this.levelOne;
            this.player = new SpaceAdventures.Player(this.game);
            this.player.create();
            this.rocks = new SpaceAdventures.Rock(this.game);
            this.rocks.create();
            this.rocket = new SpaceAdventures.Rocket(this.game);
            this.rocket.create(this.player);
            this.explosions = new SpaceAdventures.Explosion(this.game);
            this.explosions.create();
            this.bulletBonus = new SpaceAdventures.BulletBonus(this.game);
            this.bulletBonus.create();
            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
            this.score = 0;
            this.scoreText = this.game.add.text(10, 20, 'Score : ' + this.score, { font: '34px Arial', fill: '#fff' });
            this.bulletsText = this.game.add.text(10, 80, 'Bullets Left : ', { font: '34px Arial', fill: '#fff' });
        };
        Game.prototype.update = function () {
            this.player.update();
            this.rocks.update(this.player);
            this.rocket.update(this.player.state.position.x + 3, this.player.state.position.y - 19, this.player);
            this.bulletBonus.update();
            this.bulletsText.text = 'Bullets Left : ' + this.player.bullets.length;
            this.scoreText.text = 'Score : ' + this.score;
            this.game.physics.arcade.overlap(this.player.state, this.rocks.state, this.playerDeath, null, this);
            this.game.physics.arcade.overlap(this.player.state, this.bulletBonus.state, this.playerBonus, null, this);
            this.game.physics.arcade.overlap(this.rocks.state, this.rocket.bullets, this.rocketHitsARock, null, this);
        };
        Game.prototype.playerDeath = function (player, rock) {
            var explosion = this.explosions.explosions.getFirstExists(false);
            explosion.reset(player.body.x + 13, player.body.y + 30);
            explosion.play('explode', 30, false, true);
            var live = this.player.lives.getFirstAlive();
            if (live) {
                player.kill();
                live.kill();
                this.player.leftLives--;
                if (this.player.leftLives > 0) {
                    setTimeout(function () {
                        player.reset(player.body.x, player.body.y);
                    }, 1000);
                }
            }
            if (this.player.lives.countLiving() < 1) {
                player.kill();
                this.player.bullets = [];
                this.game.state.start("GameOver", false, false, this.score);
            }
            // }
        };
        Game.prototype.playerBonus = function (player, bonus) {
            bonus.x = Math.random() * (940 - 10);
            bonus.y = -100;
            for (var i = 0; i < 3; i++) {
                this.player.bullets.push(new SpaceAdventures.Rocket(this.game));
            }
        };
        Game.prototype.rocketHitsARock = function (rock, rocket) {
            var explosion = this.explosions.explosions.getFirstExists(false);
            explosion.reset(rock.body.x + 13, rock.body.y + 10);
            explosion.play('explode', 30, false, true);
            this.score += 10;
            rock.x = Math.random() * (940 - 10);
            rock.y = -60;
        };
        return Game;
    }(Phaser.State));
    SpaceAdventures.Game = Game;
})(SpaceAdventures || (SpaceAdventures = {}));
//# sourceMappingURL=Game.js.map