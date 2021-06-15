import { 
    SphereBufferGeometry, 
    Mesh, 
    MeshStandardMaterial, 
    Color, 
    MathUtils,
    TextureLoader,
} from 'three';

import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadModels(){
    const loader = new GLTFLoader();

    const [boyData] = await Promise.all([
        loader.loadAsync('scene.gltf',)
    ]);
    console.log('hello', boyData);

    const boy = setupModel(boyData);
    boy.position.set(0,0,-20);
    boy.scale.set(0.05,0.05,0.05);

    return{boy,};
}
export {loadModels};

// function createMaterial(){

//     const textureLoader = new TextureLoader();

//     const texture = textureLoader.load(
//         '/textures/boy_dif.png',
//     );

//     const material = new MeshStandardMaterial({ 
//         map: texture,
//     });

//     return material;
// }

// function createModel() {
    
//     const geometry = new SphereBufferGeometry(2,6,6);
    
//     const material = createMaterial();

//     const sphere = new Mesh(geometry,material);

//     //sphere.rotation.set(-0.5, -0.1, 0.8);
    
//     //material.color = new Color('red');

//     const radiansPerSecond = MathUtils.degToRad(30);

//     sphere.tick = (delta) => {
//         sphere.rotation.z+= radiansPerSecond * delta;
//         sphere.rotation.x+= radiansPerSecond * delta;
//         sphere.rotation.y+= radiansPerSecond * delta;
//     };

//     return sphere;
// }

//export {createModel};