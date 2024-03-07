<template>
    <div id="info05">
        <div id="box_title">
            <h3>&nbsp;&nbsp;细节应力&nbsp;&nbsp;</h3>
        </div>
        <div id="main1"></div>
    </div>
</template>

<script>
	
import * as THREE from 'three';

// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Lut } from 'three/addons/math/Lut.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

let perpCamera, orthoCamera,  lut;

let mesh, sprite;
let scene, uiScene;

let params;

let renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  logarithmicDepthBuffer: true,
});


export default {
	
	methods: {
		
		init() {
			
			this.dom = document.getElementById("main1");
			
			this.dom.appendChild(renderer.domElement);
			
			scene = new THREE.Scene();
			
			uiScene = new THREE.Scene();
			
			lut = new Lut();
			
			const width =500;
			const height = 300;
			
			perpCamera = new THREE.PerspectiveCamera( 60, width / height, 1, 1000 );
			perpCamera.position.set( 0, 0, 600 );
			scene.add( perpCamera );
			
			const pointLight = new THREE.PointLight( '#ffffff', 3, 0, 0 );
			perpCamera.add( pointLight );
			
			orthoCamera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 1, 2 );
			orthoCamera.position.set( 0.5, 0, 1 );
			
			sprite = new THREE.Sprite( new THREE.SpriteMaterial( {
				map: new THREE.CanvasTexture( lut.createCanvas() )
			} ) );
			sprite.material.map.colorSpace = THREE.SRGBColorSpace;
			sprite.scale.x = 0.05;
			sprite.position.x = -0.42
			// uiScene.add( sprite );
			
			mesh = new THREE.Mesh( undefined, new THREE.MeshStandardMaterial( {
				side: THREE.DoubleSide,
				color: 0xF5F5F5,
				vertexColors: true
			} ) );
			scene.add( mesh );
			
			params	= {
				colorMap: 'cooltowarm',
			};
			
			renderer.autoClear = false;
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( width, height );
			
			window.addEventListener( 'resize', this.onWindowResize );
			
			const controls = new OrbitControls( perpCamera, renderer.domElement );
			controls.addEventListener( 'change', this.render );
			
			
			
		},
		
		addModel() {
			const loader = new THREE.BufferGeometryLoader();
			loader.load( 'RIB_geometry.json',  geometry => {
			
				geometry.center();
				geometry.computeVertexNormals();
				
			
				// default color attribute
				const colors = [];
			
				for ( let i = 0, n = geometry.attributes.position.count; i < n; ++ i ) {
			
					colors.push( 1, 1, 1 );
			
				}
			
				geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
			
				mesh.geometry = geometry;
				this.updateColors();
			
				this.render();
			
			} );
			
			
		},
		
		updateColors() {
			
			lut.setColorMap( params.colorMap );
			
			// lut.setMax(10e-6)
			// lut.setMin(0)
			
			
			const geometry = mesh.geometry;
			const pressures = geometry.attributes.pressure;
			const colors = geometry.attributes.color;
			const color = new THREE.Color();
			
			
			
			for ( let i = 0; i < pressures.array.length; i ++ ) {
			
				const colorValue = pressures.array[ i ] *10e7;
			
				color.copy( lut.getColor( colorValue ) ).convertSRGBToLinear();
			
				colors.setXYZ( i, color.r, color.g, color.b );
			
			}
			
			colors.needsUpdate = true;
			
			const map = sprite.material.map;
			lut.updateCanvas( map.image );
			map.needsUpdate = true;
			
		},
		
		render() {
		
			renderer.clear();
			renderer.render( scene, perpCamera );
			renderer.render( uiScene, orthoCamera );
		
		},
		
		onWindowResize() {
		
			const width = 500;
			const height = 300;
		
			perpCamera.aspect = width / height;
			perpCamera.updateProjectionMatrix();
		
			renderer.setSize( width, height );
			this.render();
		
		}

		
		
	
	
	},
	
	mounted() {
		this.init();
		this.addModel();
		this.onWindowResize();
		
	}
	
}

</script>

<style lang="scss" scoped>
	

    #info05 {
        background-color: rgba(0, 0, 0, 0.0);


        // border: 3px solid rgb(188, 188, 188);
        width: 380px;
        height: 300px;

        margin: 0 auto;
        margin-top: 4px;
        margin-bottom: 6px;


        border-width: 2px;
        border-style: solid;
        border-color: rgb(188, 188, 188) transparent rgb(188, 188, 188) transparent; /* 上右下左 */
        border-image: linear-gradient(to bottom, rgb(156, 156, 156), transparent, transparent, rgb(156, 156, 156));
        border-image-slice: 1;
    }
	#main1 {
        margin-top: -20px;
        margin-left: -60px;
		width: 500px;
		height: 300px;
	}
    #box_title {
    display: inline-block;
    height: 36px;
    padding-left: 8px;
    padding-right: 8px;
    color: #fff;
    line-height: 36px;
    margin: 6px;
    // height: 100%;
    background-color: #606488;
}
	
</style>
