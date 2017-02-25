/// <reference path = "../lib/typescript/phaser.d.ts"/>

module SpaceAdventures{
    export class Rock {

        game:Phaser.Game;
        state: Phaser.Group;
        rockNumber: number;

        constructor(game:Phaser.Game){
            this.game = game;
            this.rockNumber = 11;
        }

        create(){
            this.state = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
            this.game.physics.arcade.enable(this.state);

            var x = 10;

            for(var i = 0; i < this.rockNumber; i++){
                var rock = this.state.create(x, this.game.rnd.between(-30,-5), "Rock");
                rock.body.velocity.y = this.game.rnd.between(70,380);
                x += 90;
            }
        }

        update(player){
            this.state.forEach(this.checkPos, this);
        }

        checkPos(rock) {
            if (rock.y > 800)
            {
                rock.x = Math.random() * (940 - 10) + 10;
                rock.y = -100;
            }
        }
    }
}