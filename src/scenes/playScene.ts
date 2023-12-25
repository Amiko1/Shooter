import { Scene, GameObjects } from "phaser";

export class GameScene extends Scene {
    private textbox: GameObjects.Text | undefined;
  
    constructor() {
      super('scene-game');
    }


    preload() {
        this.load.image('zombie', '/Dead3.png')
    }
    
  
    create() {
        this.add.sprite(200, 200, 'zombie').setScale(0.5)
      this.textbox = this.add.text(
        window.innerWidth / 2,
        window.innerHeight / 2,
        'Welcome to Phaser x Vite!',
        {
          color: '#FFF',
          fontFamily: 'monospace',
          fontSize: '26px'
        }
        
      );

      this.add
  
      this.textbox.setOrigin(0.5, 0.5);
    }
  
    update(time: number, delta: number) {
      if (!this.textbox) {
        return;
      }
  
      this.textbox.rotation += 0.0005 * delta;
    }
  }
  