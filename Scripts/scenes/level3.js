var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Level3 = (function (_super) {
        __extends(Level3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level3() {
            _super.call(this);
        }
        Level3.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level3.prototype.start = function () {
            // Set Cloud Count
            this._enemyCount = 3;
            livesValue = 5;
            scoreValue = 0;
            // Instantiate Cloud array
            this._enemy = new Array();
            // added ocean to the scene
            this._space = new objects.Space();
            this.addChild(this._space);
            // added island to the scene
            this._artifact = new objects.Artifact();
            this.addChild(this._artifact);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added clouds to the scene
            for (var enemy = 0; enemy < this._enemyCount; enemy++) {
                this._enemy[enemy] = new objects.Enemy3();
                this.addChild(this._enemy[enemy]);
            }
            this._livesLabel = new objects.Label("lives: " + livesValue, "40px Consolas", "#ffff00", 10, 10, false);
            this.addChild(this._livesLabel);
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "40px Consolas", "#ffff00", 390, 10, false);
            this.addChild(this._scoreLabel);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Level3.prototype.update = function () {
            var _this = this;
            this._space.update();
            this._artifact.update();
            this._player.update();
            this._enemy.forEach(function (enemy) {
                enemy.update();
                _this._collision.check(enemy);
            });
            this._collision.check(this._artifact);
            this._updateScore();
        };
        return Level3;
    })(objects.Scene);
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map