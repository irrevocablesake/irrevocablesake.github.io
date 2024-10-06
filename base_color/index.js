import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    PlaneGeometry,
    ShaderMaterial,
    Mesh,
    Color
} from 'three';

import vertexShader from './shaders/vertexShader.glsl';
import fragmentShader from './shaders/fragmentShader.glsl';

const WIDHT = window.innerWidth / 2
const HEIGHT = window.innerHeight / 2

const scene = new Scene();
scene.background = new Color( 0xffffff )
const camera = new PerspectiveCamera( 75, WIDHT / HEIGHT, 0.1, 1000 );

camera.position.z = 5;

const renderer = new WebGLRenderer();
renderer.setSize( WIDHT, HEIGHT );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new PlaneGeometry( 13, 7 );
const material = new ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
});
const mesh = new Mesh( geometry, material );

scene.add( mesh );

function animate(){
    renderer.render( scene, camera )
};