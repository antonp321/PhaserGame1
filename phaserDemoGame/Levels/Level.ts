/// <reference path = "../lib/typescript/phaser.d.ts"/>
///<reference path="../GraphUtil/LevelBackground.ts"/>
///<reference path="../GameObjects/Difficulty.ts"/>
///<reference path="../GameObjects/Player.ts"/>

module SpaceAdventures{
    export class Level {
        game : Phaser.Game;

        background: LevelBackground;
        levelGroup: Phaser.Group;

        constructor(game:Phaser.Game){
            this.game = game;
        }

        create(difficulty:Difficulty){

        }

        update(player:Player, difficulty:Difficulty){

        }
    }
}