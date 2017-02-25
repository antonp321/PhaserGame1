/// <reference path = "../lib/typescript/phaser.d.ts"/>
var SpaceAdventures;
(function (SpaceAdventures) {
    var Explosion = (function () {
        function Explosion(game) {
            this.game = game;
        }
        Explosion.prototype.create = function () {
            this.explosions = this.game.add.group();
            this.explosions.createMultiple(30, 'explode');
            this.explosions.forEach(this.createExplosion, this);
        };
        Explosion.prototype.update = function () {
        };
        Explosion.prototype.createExplosion = function (expl) {
            expl.anchor.x = 0.5;
            expl.anchor.y = 0.5;
            expl.animations.add('explode');
        };
        return Explosion;
    }());
    SpaceAdventures.Explosion = Explosion;
})(SpaceAdventures || (SpaceAdventures = {}));
//# sourceMappingURL=Explosion.js.map