import { createCamera } from './components/camera.js';
import { createModel } from './components/model.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loops.js';

let camera;
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

        const sphere = createModel();
        const light = createLights();

        loop.updatables.push(sphere);

        scene.add(sphere, light);

        const resizer = new Resizer(container,camera,renderer);
        // resizer.onResize = () => {
        //     this.render();
        // };
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