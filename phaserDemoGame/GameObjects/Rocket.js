/// <reference path = "../lib/typescript/phaser.d.ts"/>
var SpaceAdventures;
(function (SpaceAdventures) {
    var Rocket = (function () {
        function Rocket(game) {
            this.game = game;
            this.bulletTime = 0;
        }
        Rocket.prototype.create = function (player) {
            this.bullets = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
            this.game.physics.arcade.enable(this.bullets);
            for (var i = 0; i < 16; i++) {
                var rocketBullet = this.bullets.create(player.x, player.y, 'Rocket');
                rocketBullet.name = 'bullet' + i;
                rocketBullet.exists = false;
                rocketBullet.visible = false;
                rocketBullet.checkWorldBounds = true;
                rocketBullet.events.onOutOfBounds.add(this.resetBullet, this);
            }
        };
        Rocket.prototype.update = function (x, y, player) {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                if (player.bullets.length > 0) {
                    this.fireBullet(x, y, player);
                }
            }
        };
        Rocket.prototype.fireBullet = function (x, y, player) {
            if (this.game.time.now > this.bulletTime) {
                this.bullet = this.bullets.getFirstExists(false);
                if (this.bullet) {
                    this.bullet.reset(x, y);
                    this.bullet.body.velocity.y = -220;
                    this.bulletTime = this.game.time.now + 150;
                    player.bullets.splice(player.bullets.length - 1, 1);
                }
            }
        };
        Rocket.prototype.resetBullet = function (bullet) {
            bullet.kill();
        };
        return Rocket;
    }());
    SpaceAdventures.Rocket = Rocket;
})(SpaceAdventures || (SpaceAdventures = {}));
//# sourceMappingURL=Rocket.js.map