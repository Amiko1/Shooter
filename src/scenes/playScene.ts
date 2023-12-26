import { Scene, GameObjects } from "phaser";

export class GameScene extends Scene {
    private textbox: GameObjects.Text | undefined;
  
    constructor() {
      super('scene-game');
    }


    preload() {
        this.load.image('zombie', '/Dead3.png')
        this.load.tilemapTiledJSON('map', './map.json');
        this.load.image('Dungeon_24x24', './P_P_FREE_RPG_TILESET/Dungeon_24x24.png')
    }
    
  
    create() {
      console.log(this.make, 'dung')

      const map = this.make.tilemap({ key: 'map' });
      console.log(map, 'dung')
      
      const dungeon = map.addTilesetImage('Dungeon_24x24', 'Dungeon_24x24');

      map.createLayer('Platform', dungeon as any)
      
      
       const zo =  this.add.sprite(200, 200, 'zombie')
      
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
  