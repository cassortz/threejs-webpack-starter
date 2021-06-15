import './main.css'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
// import * as dat from 'dat.gui'

// // Debug
// const gui = new dat.GUI()

// //Reference to container
// const container = document.querySelector('#scene-container');

// // Canvas
// //const canvas = document.querySelector('canvas.webgl');

// // Scene
// const scene = new THREE.Scene();

// scene.background = new THREE.Color('skyblue');

// // Objects - like body
// const geometry = new THREE.SphereBufferGeometry(.5, 64, 64);
// const loader = new GLTFLoader();

// loader.load('assets/scene.gltf',function(gltf){
//     boy = gltf.scene.children[0];
//     scene.add(gltf.scene);

// })

// // Materials - like clothes

// const material = new THREE.MeshStandardMaterial()

// material.color = new THREE.Color(0xff0000)

// // Mesh - ties both objects and materials together
// const sphere = new THREE.Mesh(geometry,material)
// scene.add(sphere)

// // Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const fov = 35;
// const aspect = container.clientWidth / container.clientHeight;
// const near = 0.1;
// const far = 100;

// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// camera.position.x = 0
// camera.position.y = 0
// camera.position.z = 2
// scene.add(camera)

// // Controls
// // const controls = new OrbitControls(camera, canvas)
// // controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// container.append(renderer.domElement);

// /**
//  * Animate
//  */


// const clock = new THREE.Clock()

// const tick = () =>
// {

//     const elapsedTime = clock.getElapsedTime()

//     // Update objects
//     sphere.rotation.y = .5 * elapsedTime

//     // Update Orbital Controls
//     // controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
   
// }

// tick()

import { World } from './World/World.js';

async function main(){
    
    //reference container element
    const container = document.querySelector('#scene-container');
    
    //create instance of world app
    const world = new World(container);

    await world.init();
    
    //render on demand
    // world.render();

    //start animation loop (stream of frames)
    world.start();

}

main().catch((err) => {
    console.error(err);
  });