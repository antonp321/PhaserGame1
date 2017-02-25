/// <reference path = "lib/typescript/phaser.d.ts"/>
///<reference path="States/Menu.ts"/>
///<reference path="States/Game.ts"/>
///<reference path="States/Boot.ts"/>
///<reference path="States/GameOver.ts"/>

module SpaceAdventures {
    export class SpaceAdventures extends Phaser.Game{

        game : Phaser.Game;

        constructor(width?:number, height?:number){
            super(width, height, Phaser.AUTO, 'PhaserDemo', {create: () => this.createIt()});
            this.game = this;
        }

        createIt() {
            this.game.state.add("Boot", Boot, false);
            this.game.state.add("Game", Game, false);
            this.game.state.add("Menu", Menu, false);
            this.game.state.add("GameOver", GameOver, false);

            this.game.state.start("Boot");
        }
    }

    window.onload = () => {
        new SpaceAdventures(950, 660);
    }
}