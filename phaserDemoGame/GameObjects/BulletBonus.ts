/// <reference path = "../lib/typescript/phaser.d.ts"/>

module SpaceAdventures{
    export class BulletBonus{
        game: Phaser.Game;
        state: Phaser.Group;

        constructor(game:Phaser.Game){
            this.game = game;

        }

        create(){
            this.state = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
            this.game.physics.arcade.enable(this.state);

            var x = Math.random() * (900 - 100) + 100;

            for(var i = 0; i < 1; i++){
                var bonus = this.state.create(x, this.game.rnd.between(-30,-5), "Bonus");
                bonus.body.velocity.y = this.game.rnd.between(90,160);
            }
        }

        update(){
            this.state.forEach(this.checkPos, this);
        }

        checkPos(bonus) {

            if (bonus.y > 800)
            {
                bonus.y = -100;
                bonus.x = Math.random() * (900 - 10) + 10;
            }
        }
    }
}