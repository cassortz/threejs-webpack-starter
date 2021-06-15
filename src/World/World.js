import { loadModels } from './components/model.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loops.js';

let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
    //create instance
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();

        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        controls = createControls(camera, renderer.domElement);

        //const sphere = createModel();
        const { ambientLight, mainLight } = createLights();

        loop.updatables.push(controls);
        
        scene.add(ambientLight, mainLight);

        const resizer = new Resizer(container,camera,renderer);
        // resizer.onResize = () => {
        //     this.render();
        // };
    }

    async init(){
        const { boy } = await loadModels();
        controls.target.copy(boy.position);
        scene.add(boy);
    }

    //render scene
    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}

export { World };