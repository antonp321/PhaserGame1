/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="Game.ts"/>

module SpaceAdventures{
    export class GameOver extends Phaser.State{

        score:number;

        init(score:number, maxScore:string){
            this.score = score;
        }

        create(){
            this.game.add.sprite(0.5, 0.5, "GameOverBackground");

            var gameOverImage = this.game.add.image(this.game.width*0.1, this.game.height *0.02, 'GamOverImg');
            var scoreImage = this.game.add.image(this.game.width*0.2, this.game.height *0.3, 'Score');

            var playButton = this.game.add.button(this.game.width*0.52, this.game.height *0.65, "BackToMainMenu", this.startGame, this);
            this.game.add.text(this.game.width*0.57,this.game.height *0.34, this.score.toString(), { font: '74px Arial', fill: '#fff' });
            playButton.input.priorityID = 1;
            playButton.anchor.set(0.5);

            var exitButton = this.game.add.button(this.game.width*0.52, this.game.height * 0.8, "ExitGame", this.exitGame, this);
            exitButton.input.priorityID = 2;
            exitButton.anchor.set(0.5);
        }

        update(){

        }

        startGame(){
            this.game.state.start("Menu");
        }

        exitGame(){
            window.close();
        }
    }
}