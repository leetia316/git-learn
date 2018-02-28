window.PIXI = require('pixi');
window.p2 = require('p2');
window.Phaser = require('Phaser');

var game = require('./game'),
    preloadState = require('./states/preload'),
    choseLevelState = require('./states/choseLevel');

window.onload = function() {
    game.state.add('preload', preloadState);
    game.state.add('choseLevel', choseLevelState);

    game.state.start('preload');
}

