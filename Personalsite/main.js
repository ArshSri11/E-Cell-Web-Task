import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();
let ferrari;
loader.load( 'ferrari.glb', function ( gltf ) {
    ferrari = gltf.scene
	scene.add( ferrari );
}, undefined, function ( error ) {
	console.error( error );
} );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

camera.position.z = 5;
camera.position.y = 1.25;


function animate() {
	requestAnimationFrame( animate );
    ferrari.rotation.y += 0.0025
    
	renderer.render( scene, camera );
}

animate();