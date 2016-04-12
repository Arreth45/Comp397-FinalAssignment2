// LEFT_CAVE SCENE
module scenes {
    export class Exit extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endLabel1: objects.Label;
        private _endLabel2: objects.Label;
        private _endLabel3: objects.Label;
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
            this._endLabel1 = new objects.Label(
                "Thank you", "100px Impact",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 160, true);
            this.addChild(this._endLabel1);

            this._endLabel2 = new objects.Label(
                "for playing", "100px Impact",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 60, true);
            this.addChild(this._endLabel2);

            this._endLabel3 = new objects.Label(
                "Jet Fighter", "100px Impact",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y + 40, true);
            this.addChild(this._endLabel3);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}