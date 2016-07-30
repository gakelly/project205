function loadGame() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload() {
        game.load.spritesheet('playerCharacter', './asset/platformer_sprites_base.png', 64, 64);
    }

    function create() {
        // setup player character animation loading.
        character = game.add.sprite(400, 450, "playerCharacter"); // 
        character.animations.add('walking', [32, 33, 34, 35, 36, 37, 38, 39], 10, true);
        character.animations.add('death', [18, 19, 20, 21, 22, 23], 10, true);
        character.animations.add('standing', [63], 10, false);
        character.anchor.setTo(0.5, 1);
        character.scale.setTo(3.0, 3.0);

    }

    function update() {
        character.animations.play("walking");
        //character.animations.play("death");
        //character.animations.play("standing");
    }
}