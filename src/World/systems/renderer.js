import {WebGLRenderer} from 'three';

function createRenderer(){
    const renderer = new WebGLRenderer ({ antialias: true });

    //turn on physically correcy lighting model
    renderer.physicallyCorrectLights = true;

    return renderer;
}

export { createRenderer };