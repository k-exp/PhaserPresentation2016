/**
 * Created by andrewribeiro on 4/27/16.
 */

/// <reference path="../source/phaser.d.ts"/>
module Castlevania{
    export class Player extends Phaser.Sprite {
        
        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x+300, y, 'simon', 0);
            this.anchor.setTo(1);
            this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            game.add.existing(this);
            game.physics.enable(this);
        }

        update() {
            this.body.velocity.x = 0;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -150;
                this.animations.play('walk');
                if (this.scale.x === 1) {
                    this.scale.x = -1;
                }
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = 150;
                this.animations.play('walk');
                if (this.scale.x === -1) {
                    this.scale.x = 1;
                }
            } else {
                this.animations.frame = 0;
            }
        }
    }
}
