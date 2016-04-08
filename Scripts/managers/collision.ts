module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        // PRIVATE INSTANCE VARIABLES
        private _player: objects.Player;
        constructor(player:objects.Player) {
            this._player = player;
        }
        
        public distance(startPoint:createjs.Point, endPoint:createjs.Point):number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x),2) + Math.pow(endPoint.y - startPoint.y,2))
        }
        
        public check(object:objects.GameObject) {
            var startPoint:createjs.Point = new createjs.Point();
            var endPoint:createjs.Point = new createjs.Point();
            var playerHalfHeight:number = this._player.height * 0.5;
            var objectHalfHeight:number = object.height * 0.5;
            var minimumDistance:number = playerHalfHeight + objectHalfHeight;
            
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            
            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if(this.distance(startPoint, endPoint) < minimumDistance) {
                if(!object.isColliding){
                // check if it's an island hit
                if(object.name === "blackBox") {
                    createjs.Sound.play("pickup");
                    scoreValue += 100;
                }
                
                // check if it's a cloud hit
                if(object.name === "enemy1") {
                     createjs.Sound.play("explosion");
                    livesValue--;
                    if(livesValue <= 0){
                        scene = config.Scene.END;
                        changeScene();
                    }
                }
                }
                object.isColliding = true;
            } else{
                object.isColliding = false;
            }
        }
    }
}