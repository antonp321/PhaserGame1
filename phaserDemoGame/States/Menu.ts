/// <reference path = "../lib/typescript/phaser.d.ts"/>

module SpaceAdventures{
    export class Menu extends Phaser.State{

        create(){
            this.game.add.sprite(0.5, 0.5, "MenuBackground");

            var playButton = this.game.add.button(this.game.width*0.59, this.game.height *0.4, "PlayBtn", this.startGame, this);
            playButton.input.priorityID = 1;
            playButton.anchor.set(0.5);

            var exitButton = this.game.add.button(this.game.width*0.59, this.game.height * 0.6, "ExitBtn", this.exitGame, this);
            exitButton.input.priorityID = 2;
            exitButton.anchor.set(0.5);

        }

        update(){
            
        }

        startGame(){
            this.game.state.start("Game");
        }

        exitGame(){
            window.close();
        }
    }
}