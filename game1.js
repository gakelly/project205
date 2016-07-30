var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// ParalexScrolling 
class ParalexScrolling {
  constructor(game, speed, s1, s2, s3) {
    this.game = game;    

    game.load.image('night', 'assets/night.png');
    game.load.image('mountains-mid1', 'assets/mountains-mid1.png');
    game.load.image('mountains-mid2', 'assets/mountains-mid2.png');
    game.load.image('mountains-back', 'assets/mountains-back.png');        

    this.speed = speed;
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;    
  }
  
  init() {
    game.add.sprite(0, 0, 'night');      
    this.px1 = game.add.sprite(0, 0, 'mountains-mid2');
    this.px2 = game.add.sprite(0, 0, 'mountains-mid1');
    this.px3 = game.add.sprite(0, 0, 'mountains-back');        
  }

  update() {      

      // 
      if (Math.abs(this.px1.x) == this.px1.width - game.world.width) {
          this.px1.x = 0;
      }
      if (Math.abs(this.px2.x) == this.px2.width - game.world.width) {
          this.px2.x = 0;
      }      
      if (Math.abs(this.px3.x) == this.px3.width - game.world.width) {
          this.px3.x = 0;
      }

      this.px1.x = Math.max(game.world.width - this.px1.width, this.px1.x - this.speed * this.s1);
      this.px2.x = Math.max(game.world.width - this.px2.width, this.px2.x - this.speed * this.s2);
      this.px3.x = Math.max(game.world.width - this.px3.width, this.px3.x - this.speed * this.s3);
  }

  start() {
    
  }

  stop() {
    
  }
}

function preload() {

    game.load.spritesheet('player', 'assets/player.png', 64, 64);
    paralax = new ParalexScrolling(game, 10, 0.1, 0.2, 0.3);
}

var player;
var paralax;

function create() {
    
    paralax.init();
    paralax.start();

	player = game.add.sprite(game.world.width/2, game.world.height - 100, 'player');
    player.animations.add('walk', [5, 6, 7, 8], 10, true);
    player.animations.add('die', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
    player.anchor.setTo(0.5, 1);
    player.scale.setTo(2, 2);

    //  The score
    scoreText = game.add.text(16, 16, 'AGE: 0', { fontSize: '32px', fill: '#FFF' });             
}

function update() {
        
    paralax.update();
    player.animations.play('walk');        
}
