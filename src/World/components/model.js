import { 
    SphereBufferGeometry, 
    Mesh, 
    MeshStandardMaterial, 
    Color, 
    MathUtils,
    TextureLoader,
} from 'three';

function createMaterial(){

    const textureLoader = new TextureLoader();

    const texture = textureLoader.load(
        '/assets/textures/boy_dif.png',
    );

    const material = new MeshStandardMaterial({ 
        map: texture,
    });

    return material;
}

function createModel() {
    
    const geometry = new SphereBufferGeometry(2,6,6);
    
    const material = createMaterial();

    const sphere = new Mesh(geometry,material);

    //sphere.rotation.set(-0.5, -0.1, 0.8);
    
    //material.color = new Color('red');

    const radiansPerSecond = MathUtils.degToRad(30);

    sphere.tick = (delta) => {
        sphere.rotation.z+= radiansPerSecond * delta;
        sphere.rotation.x+= radiansPerSecond * delta;
        sphere.rotation.y+= radiansPerSecond * delta;
    };

    return sphere;
}

export {createModel};