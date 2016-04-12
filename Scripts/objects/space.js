var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    var Space = (function (_super) {
        __extends(Space, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Space() {
            _super.call(this, "space");
            this._speed.x = -5; //ocean speed
            this._reset(-960);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Space.prototype._checkBounds = function (value) {
            // check to see if the top of the ocean 
            // is met the top of the scene
            if (this.x >= value) {
                this._reset(-960);
            }
        };
        // reset the ocean offscreen
        Space.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Space.prototype.update = function () {
            // scroll the ocean 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(0);
        };
        return Space;
    })(objects.GameObject);
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map