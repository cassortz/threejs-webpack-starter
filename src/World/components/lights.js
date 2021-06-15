import { AmbientLight, DirectionalLight, HemisphereLight } from 'three';

function createLights(){

    const ambientLight = new HemisphereLight(
        'white',
        'darkslategrey',
        5,
    );
    
    //create directional light
    const mainLight = new DirectionalLight('white', 5);
    mainLight.position.set(10, 10, 10);

    return {ambientLight, mainLight};
}

export { createLights }
