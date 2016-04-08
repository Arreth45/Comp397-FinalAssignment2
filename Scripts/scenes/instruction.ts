// MENU SCENE
module scenes {
    export class Instruction extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _background: objects.GameObject;
        private _instructions1: objects.Label;
        private _instructions2: objects.Label;
        private _backButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {

            this._background = new objects.GameObject(
                "background"
            )
            this.addChild(this._background);

            //Add Menu Label
            this._menuLabel = new objects.Label(
                "Instructions:", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 200, true);
            this.addChild(this._menuLabel);

            this._instructions1 = new objects.Label(
                "Avoid the Enemy Jets",
                "50px Consolas",
                "#0000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 150, true);
            this.addChild(this._instructions1);
            
            this._instructions2 = new objects.Label(
                "Collect the Black Boxes",
                "50px Consolas",
                "#0000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 110, true);
            this.addChild(this._instructions2);


            // add the Start button to the MENU scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);

            // Start Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }


        //EVENT HANDLERS ++++++++++++++++++++

        // LEFT_CAVE Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        }


    }
}