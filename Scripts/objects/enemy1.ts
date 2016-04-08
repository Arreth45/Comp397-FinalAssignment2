module objects {
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    export class Enemy1 extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("enemy1");
            
           this._reset(this._leftBounds);
           this.name = "enemy1";
           this.soundString = "explosion";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the cloud 
            // is outside the viewport         
            if(this.x >= value) {
                this._reset(this._leftBounds);
            }
        }
        
        // reset the cloud offscreen
        protected _reset(value:number):void {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the cloud left the screen
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}