    // Create game instance and connect init, create and update methods
    var myGame = new Phaser.Game(this, 'game', 480, 800, init, create, update);

    function init() {
        myGame.loader.addImageFile('earth', 'img/earth.png');
        myGame.loader.load();
    }

    var earth;

    function create() {
        earth = myGame.createSprite(40, 200, 'earth');
    }

    function update() {
        if (myGame.input.touch.isDown) {
            alert('Touch!');
        }
    }
