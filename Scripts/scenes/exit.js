var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var Exit = (function (_super) {
        __extends(Exit, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Exit() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        Exit.prototype.start = function () {
            this._background = new objects.GameObject("background");
            this.addChild(this._background);
            //Add Menu Label
            this._endLabel = new objects.Label("Thank you", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 160, true);
            this.addChild(this._endLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Exit.prototype.update = function () {
        };
        return Exit;
    })(objects.Scene);
    scenes.Exit = Exit;
})(scenes || (scenes = {}));
//# sourceMappingURL=exit.js.map