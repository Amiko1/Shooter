import './style.css'
import { Game, WEBGL } from 'phaser';
const canvas = document.getElementById('game') as HTMLCanvasElement;
import { GameScene } from './scenes/playScene';

const config = {
  type: WEBGL,
  width: 1608,
  height: 888,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
},
  canvas,
  physics: {
    default: 'arcade',
    arcade: {
     
      gravity: { y: 0 },
      // debug: true
    }
  },
  scene: [
    GameScene
  ]
}
const game = new Game(config);


// // add resize listener
// window.addEventListener("resize", () => {
//   game.scale.resize(window.innerWidth, window.innerHeight);

// });

