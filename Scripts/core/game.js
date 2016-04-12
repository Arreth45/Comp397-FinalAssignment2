/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
var livesValue;
var scoreValue;
var highScoreValue = 0;
// Game Scenes
var menu;
var instruction;
var play;
var level2;
var level3;
var end;
var exit;
var assetData = [
    // Add your Assets here
    { id: "StartButton", src: "../../Assets/images/start.png" },
    { id: "BackButton", src: "../../Assets/images/back.png" },
    { id: "InstructionButton", src: "../../Assets/images/instructions.png" },
    { id: "ExitButton", src: "../../Assets/images/exit.png" },
    { id: "forest", src: "../../Assets/images/forest.png" },
    { id: "desert", src: "../../Assets/images/desert.png" },
    { id: "space", src: "../../Assets/images/space.png" },
    { id: "plane", src: "../../Assets/images/player.png" },
    { id: "enemy1", src: "../../Assets/images/enemy1.png" },
    { id: "enemy2", src: "../../Assets/images/enemy2.png" },
    { id: "enemy3", src: "../../Assets/images/UFO.png" },
    { id: "blackBox", src: "../../Assets/images/blackBox.png" },
    { id: "artifact", src: "../../Assets/images/artifact.png" },
    { id: "atom", src: "../../Assets/images/atom.png" },
    { id: "background", src: "../../Assets/images/background.png" },
    { id: "pickup", src: "../../Assets/audio/pickup.mp3" },
    { id: "explosion", src: "../../Assets/audio/explosion.mp3" },
    { id: "engine", src: "../../Assets/audio/engine.mp3" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INSTRUCTION:
            // show the MENU scene
            stage.removeAllChildren();
            instruction = new scenes.Instruction();
            currentScene = menu;
            console.log("Starting Instruction Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.LEVEL2:
            // show the PLAY scene
            stage.removeAllChildren();
            level2 = new scenes.Level2();
            currentScene = level2;
            console.log("Starting LEVEL2 Scene");
            break;
        case config.Scene.LEVEL3:
            // show the PLAY scene
            stage.removeAllChildren();
            level3 = new scenes.Level3();
            currentScene = level3;
            console.log("Starting LEVEL3 Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
        case config.Scene.EXIT:
            // show the END scene
            stage.removeAllChildren();
            exit = new scenes.Exit();
            currentScene = exit;
            console.log("Starting END Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;
//# sourceMappingURL=game.js.map