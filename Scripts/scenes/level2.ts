// PLAY SCENE
module scenes {
    export class Level2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _desert: objects.Desert;
        private _artifact: objects.Artifact;
        private _enemy: objects.Enemy2[];
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
            scoreValue = 0;

            // Instantiate Cloud array
            this._enemy = new Array<objects.Enemy2>();

            // added ocean to the scene
            this._desert = new objects.Desert();
            this.addChild(this._desert);

            // added island to the scene
            this._artifact = new objects.Artifact();
            this.addChild(this._artifact);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            //added clouds to the scene
            for (var enemy: number = 0; enemy < this._enemyCount; enemy++) {
                this._enemy[enemy] = new objects.Enemy2();
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
            this._desert.update();
            this._artifact.update();

            this._player.update();

            this._enemy.forEach(enemy => {
                enemy.update();
                this._collision.check(enemy);
            });

            this._collision.check(this._artifact);

            this._updateScore();
            
             if (scoreValue > 2000) {
                scene = config.Scene.LEVEL3;
                changeScene();
            }
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}