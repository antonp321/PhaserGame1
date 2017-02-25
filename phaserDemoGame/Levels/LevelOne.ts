///<reference path="Level.ts"/>
///<reference path="../GraphUtil/LevelBackground.ts"/>
///<reference path="../GameObjects/Rock.ts"/>

module SpaceAdventures{
    export class LevelOne extends Level{

        constructor(game:Phaser.Game){
            super(game);
        }

        create(difficulty:Difficulty){
            this.levelGroup = this.game.add.group();
            this.background = new LevelBackground(this.game, "LevelBackground", 2.5, this.levelGroup);

            super.create(difficulty);
        }

        update(player:Player, difficulty:Difficulty){
            super.update(player, difficulty);
        }
    }
}