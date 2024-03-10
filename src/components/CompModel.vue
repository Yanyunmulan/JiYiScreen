<template>
	<div id="container">

	</div>
</template>


<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

//const scene = new THREE.Scene();
// const directLight = new THREE.DirectionalLight(0xffffff, 2.2);
// directLight.castShadow = true;
// directLight.position.set(-5.11643, 19.58311, -58.11632);
// scene.add(directLight);

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
// scene.add(ambientLight);

let renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  logarithmicDepthBuffer: true,
});

// let camera, controls;
const gltfloader = new GLTFLoader();

// let longmen = new THREE.Object3D();
let width = 0, height = 0;
export default {
	
	methods: {
		
		init() {
			// var axes = new THREE.AxesHelper(50);
			this.dom = document.getElementById("container");
			width = this.dom.clientWidth, height = this.dom.clientHeight;
			renderer.setSize(width, height);
			
			this.dom.appendChild(renderer.domElement);
			
			renderer.outputColorSpace = THREE.SRGBColorSpace;
			// renderer.toneMapping = THREE.ReinhardToneMapping;
			// renderer.toneMappingExposure = 1.25;
			
		},

        // async function loadModel() {
        //     try {
        //         const gltf = await gltfloader.load('liang.glb');
        //         console.log('1');
        //         const dount = gltf.scene;

        //         const radius = 100;
        //         dount.scale.set(radius, radius, radius);

        //         scene.add(dount);

        //         // 加载完成后的后续操作
        //         console.log('Model loaded, do something...');
        //     } catch (error) {
        //         console.error('Error loading model:', error);
        //     }
        // },
			
		addModel() {
			
			// var self = this;
			let dount = null;
			const scene = new THREE.Scene();
			
			const pmremGenerator = new THREE.PMREMGenerator(renderer);
			pmremGenerator.compileCubemapShader();
			scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
			
			
			gltfloader.load('liang.glb', (gltf) => {
                console.log('1')
				dount = gltf.scene;
				const radius = 100
				dount.scale.set(radius, radius, radius)
				scene.add(dount)	
                this.loadModel(scene)
			},
                //   // 加载进度的回调函数（可选）
                // function (xhr) {
                //     console.log((xhr.loaded / xhr.total * 100) + '% 已加载');
                // },
                // // 加载失败的回调函数（可选）
                // function (error) {
                //     console.error('加载模型失败:', error);
                // }
                )

            // this.loadModel(scene)
            // return scene



        },




            // const gltf = await gltfloader.load('liang.glb');
            // dount = gltf.scene;
				
            // const radius = 100
            // dount.scale.set(radius, radius, radius)
        
            // scene.add(dount)	



        loadModel(scene) {

        

            console.log(2)
				
			const sizes = {
				width: window.innerWidth,
				height: window.innerHeight
			}
			
			const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
			// camera.position.z = 5
			// camera.position.set(50, 0, 0); // 或者调整合适的位置
			camera.position.fromArray([-214.5452015412175, 246.00773295983987, 132.5786620251977]);
			camera.rotation.fromArray([-1.0501942931880481, -0.8271230432851191, -0.9089685309467476, 'XYZ']);
			
			
			
			scene.add(camera)
			
			// const directLight = new THREE.DirectionalLight(0xffffff, 2.2);
			// directLight.castShadow = true;
			// directLight.position.set(20, -50, 58);
			// scene.add(directLight);
			
			
			// const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
			// scene.add(ambientLight);
			
			renderer.render(scene, camera)
			
			const controls = new OrbitControls(camera, renderer.domElement);
			controls.target.fromArray([39.34414783061998, 31.993165199602895, 7.844580833465798]);
			controls.addEventListener('change', () => {
				console.log(camera.position.toArray(), camera.rotation.toArray());
				console.log(controls.target);
			});
			// controls.enableZoom = true; // 允许缩放
			
			// const clock = new THREE.Clock()
			// let lastElapsedTime = 0
			
			// let isMovingUp = true; 
			
			const tick = () => {
				
				renderer.render(scene, camera)
				
				controls.update(); // 更新控制器状态
				
				window.requestAnimationFrame(tick)
			}
			
			tick()
			
			// 添加窗口大小变化的事件监听器
			window.addEventListener('resize', () => {
                // 获取新的窗口大小
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight
            
                // 更新渲染器的画布大小
                renderer.setSize(sizes.width, sizes.height)
            
                // 更新相机的宽高比
                camera.aspect = sizes.width / sizes.height
            
                // 更新相机的投影矩阵
                camera.updateProjectionMatrix()
			})
				
			}
			
		},
		
	
	mounted() {
		this.init();
        // const scene = new THREE.Scene();
		this.addModel();
        // this.loadModel();
        // this.$forceUpdate();
	}
	
}


</script>



<style>
#container {
    position: absolute;
    left: 0%;
    top: 10%;
	width: 1920px;
	height: 1080px;
    /* z-index: 0; */
}

</style>