// PLAY SCENE
module scenes {
    export class Level3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _space: objects.Space;
        private _atom: objects.Atom;
        private _enemy: objects.Enemy3[];
        private _enemyCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _livesLabel: objects.Label;
        private _scoreLabel: objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        private _updateScore(): void {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Set Cloud Count
            this._enemyCount = 3;
            livesValue = 5;
            scoreValue = 1500;

            // Instantiate Cloud array
            this._enemy = new Array<objects.Enemy3>();

            // added ocean to the scene
            this._space = new objects.Space();
            this.addChild(this._space);

            // added island to the scene
            this._atom = new objects.Atom();
            this.addChild(this._atom);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            //added clouds to the scene
            for (var enemy: number = 0; enemy < this._enemyCount; enemy++) {
                this._enemy[enemy] = new objects.Enemy3();
                this.addChild(this._enemy[enemy]);
            }

            this._livesLabel = new objects.Label(
                "lives: " + livesValue,
                "40px Impact",
                "#ffff00",
                10, 10, false
            );
            this.addChild(this._livesLabel);

            this._scoreLabel = new objects.Label(
                "Score: " + scoreValue,
                "40px Impact",
                "#ffff00",
                390, 10, false
            );
            this.addChild(this._scoreLabel);

            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._space.update();
            this._atom.update();

            this._player.update();

            this._enemy.forEach(enemy => {
                enemy.update();
                this._collision.check(enemy);
            });

            this._collision.check(this._atom);

            this._updateScore();
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}