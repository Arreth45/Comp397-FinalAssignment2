// LEFT_CAVE SCENE
module scenes {
    export class Exit extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endLabel: objects.Label;
        private _background: objects.GameObject;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {

            this._background = new objects.GameObject(
                "background"
            );
            this.addChild(this._background);
            //Add Menu Label
            this._endLabel = new objects.Label(
                "Thank you", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 160, true);
            this.addChild(this._endLabel);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}