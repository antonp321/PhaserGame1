/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="Rocket.ts"/>

module SpaceAdventures{
    export class Player{
        game: Phaser.Game;
        state: Phaser.Sprite;
        lives : Phaser.Group;
        leftLives : number;
        bullets: Array<Rocket>;

        constructor(game:Phaser.Game){
            this.game = game;
            this.state = this.game.add.sprite(400, 580, "Player");
            this.game.physics.arcade.enable(this.state);
            this.leftLives = 3;
            this.bullets = [];
        }

        create(){

            for(var i = 0; i < 3; i++){
                this.bullets.push(new Rocket(this.game));
            }

            this.lives = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
            this.game.physics.arcade.enable(this.lives);

            for (var i = 0; i < 3; i++)
            {
                var playerLives = this.lives.create(this.game.world.width - 120 + (40 * i), 30, 'Live');
                playerLives.anchor.setTo(0.5, 0.5);
                // playerLives.alpha = 0.5;
            }
        }

        update(){

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
            {
                if(this.state.x >= -10){
                    this.state.x -= 7;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
            {
                if(this.state.x <= 870){
                    this.state.x += 7;
                }
            }
        }
    }
}