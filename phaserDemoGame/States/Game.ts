/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="../GameObjects/Difficulty.ts"/>
///<reference path="../Levels/Level.ts"/>
///<reference path="../Levels/LevelOne.ts"/>
///<reference path="../GameObjects/Player.ts"/>
///<reference path="../GameObjects/Rock.ts"/>
///<reference path="../GameObjects/Rocket.ts"/>
///<reference path="../GameObjects/Explosion.ts"/>
///<reference path="../GameObjects/BulletBonus.ts"/>

module SpaceAdventures {
    export class Game extends Phaser.State{
        currentDifficulty:Difficulty;
        difficulties:Array<Difficulty>;
        shouldChangeDifficulty:boolean;

        currentLevel:Level;
        levelOne:LevelOne;

        player:Player;

        rocks: Rock;

        rocket: Rocket;

        explosions: Explosion;

        bulletBonus: BulletBonus;

        bulletsText;
        scoreText;

        score: number;

        topGroup:Phaser.Group;

        constructor(){
            super();
        }

        create(){

            this.difficulties = [];
            this.difficulties.push(new Difficulty(0, 5));
            this.difficulties.push(new Difficulty(1, 7));
            this.difficulties.push(new Difficulty(2, 9));
            this.currentDifficulty = this.difficulties[0];
            this.shouldChangeDifficulty = true;

            this.levelOne = new LevelOne(this.game);
            this.levelOne.create(this.currentDifficulty);
            this.currentLevel = this.levelOne;

            this.player = new Player(this.game);
            this.player.create();

            this.rocks = new Rock(this.game);
            this.rocks.create();

            this.rocket = new Rocket(this.game);
            this.rocket.create(this.player);

            this.explosions = new Explosion(this.game);
            this.explosions.create();

            this.bulletBonus = new BulletBonus(this.game);
            this.bulletBonus.create();

            this.game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

            this.score = 0;

            this.scoreText = this.game.add.text(10, 20, 'Score : ' + this.score, { font: '34px Arial', fill: '#fff' });
            this.bulletsText = this.game.add.text(10, 80, 'Bullets Left : ', { font: '34px Arial', fill: '#fff' });
        }

        update(){
            this.player.update();
            this.rocks.update(this.player);

            this.rocket.update(this.player.state.position.x + 3, this.player.state.position.y - 19, this.player);

            this.bulletBonus.update();

            this.bulletsText.text = 'Bullets Left : ' + this.player.bullets.length;
            this.scoreText.text = 'Score : ' + this.score;

            this.game.physics.arcade.overlap(this.player.state, this.rocks.state, this.playerDeath, null, this);
            this.game.physics.arcade.overlap(this.player.state, this.bulletBonus.state, this.playerBonus, null, this);
            this.game.physics.arcade.overlap(this.rocks.state, this.rocket.bullets, this.rocketHitsARock, null, this);
        }

        playerDeath (player, rock) {

                var explosion = this.explosions.explosions.getFirstExists(false);
                explosion.reset(player.body.x + 13, player.body.y + 30);
                explosion.play('explode', 30, false, true);


                var live = this.player.lives.getFirstAlive();
                if(live){
                    player.kill();
                    live.kill();
                    this.player.leftLives--;
                    if(this.player.leftLives > 0){
                        setTimeout(function(){
                            player.reset(player.body.x, player.body.y);
                        }, 1000);
                    }
                }

                if(this.player.lives.countLiving() < 1){
                    player.kill();
                    this.player.bullets = [];
                    this.game.state.start("GameOver", false,false, this.score);
                }
            // }
        }

        playerBonus (player, bonus){
            bonus.x = Math.random() * (940 - 10);
            bonus.y = -100;

            for(var i = 0; i < 3; i++){
                this.player.bullets.push(new Rocket(this.game));
            }
        }

        rocketHitsARock(rock, rocket){
            var explosion = this.explosions.explosions.getFirstExists(false);
            explosion.reset(rock.body.x + 13, rock.body.y + 10);
            explosion.play('explode', 30, false, true);

            this.score += 10;

            rock.x = Math.random() * (940 - 10);
            rock.y = -60;
        }
    }
}