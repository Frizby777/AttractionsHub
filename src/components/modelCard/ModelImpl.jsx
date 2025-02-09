import React, { useState } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import "./style.css";


// class ResourceTracker {
//     constructor() {
//         this.resources = new Set();
//     }
//     track(resource) {
//         if (!resource) {
//             return resource;
//         }

//         // обрабатывать дочерние элементы, и когда материал представляет собой массив материалов или униформу, представляет собой массив текстур
//         if (Array.isArray(resource)) {
//             resource.forEach(resource => this.track(resource));
//             return resource;
//         }

//         if (resource.dispose || resource instanceof THREE.Object3D) {
//             this.resources.add(resource);
//         }
//         if (resource instanceof THREE.Object3D) {
//             this.track(resource.geometry);
//             this.track(resource.material);
//             this.track(resource.children);
//         } else if (resource instanceof THREE.Material) {
//             // Надо проверить, есть ли на материале текстуры.
//             for (const value of Object.values(resource)) {
//                 if (value instanceof THREE.Texture) {
//                     this.track(value);
//                 }
//             }
//             // Мы также должны проверить, ссылаются ли какие-либо формы на текстуры или массивы текстур.
//             if (resource.uniforms) {
//                 for (const value of Object.values(resource.uniforms)) {
//                     if (value) {
//                         const uniformValue = value.value;
//                         if (uniformValue instanceof THREE.Texture ||
//                             Array.isArray(uniformValue)) {
//                             this.track(uniformValue);
//                         }
//                     }
//                 }
//             }
//         }
//         return resource;
//     }
//     untrack(resource) {
//         this.resources.delete(resource);
//     }
//     dispose() {
//         for (const resource of this.resources) {
//             if (resource instanceof THREE.Object3D) {
//                 if (resource.parent) {
//                     resource.parent.remove(resource);
//                 }
//             }
//             if (resource.dispose) {
//                 resource.dispose();
//             }
//         }
//         this.resources.clear();
//     }
// }



export class ModelImpl extends React.Component {

    async componentDidMount(props) {
        const { sizes, camera, scene, canvas, controls, renderer } = this.init();
        //camera.position.z = 3;
        camera.position.set(0, 0, 10);
        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.MeshBasicMaterial({
        //     color: 'gray',
        //     wireframe: true,
        // });
        // const mesh = new THREE.Mesh(geometry, material);
        // scene.add(mesh);

        // const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({ color: "gray", metalness: 0, roughness: 0.5 }));
        // floor.receiveShadow = true;
        // floor.rotation.x = -Math.PI * 0.5;

        // scene.add(floor);

        const hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
        hemLight.position.set(0, 50, 0);
        scene.add(hemLight);

        // const dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
        // dirLight.position.set(8, 12, 8);
        // dirLight.castShadow = true;
        // dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);

        // scene.add(dirLight);
        var sizeBound = new THREE.Vector3(4, 4, 4);
        const loader = new GLTFLoader();

        loader.load(this.props.model, (model) => {
            //model.scene.children[0].scale.set(3, 3, 3);
            scaleToFit(model.scene, sizeBound);
            // const resMgr = new ResourceTracker();
            // const track = resMgr.track.bind(resMgr);
            // const root = track(model.scene);
            // scene.add(root);
            scene.add(model.scene);

        }, null, (ex) => console.log(ex));

        const scaleToFit = (obj, bound) => {
            let box = new THREE.Box3().setFromObject(obj);
            let size = new THREE.Vector3();
            box.getSize(size);
            let vScale = new THREE.Vector3().copy(bound).divide(size);
            let scale = Math.min(vScale.x, Math.min(vScale.y, vScale.z));
            obj.scale.setScalar(scale);
        }

        const tick = () => {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        };

        tick();

        /** Базовые обпаботчики событий длы поддержки ресайза */
        canvas.addEventListener('resize', () => {
            // Обновляем размеры
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            // Обновляем соотношение сторон камеры
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            // Обновляем renderer
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.render(scene, camera);
        });

        canvas.addEventListener('dblclick', () => {
            canvas.fullscreenElement = true;
            if (!document.fullscreenElement)
                document.requestFullscreen();
            else
                document.exitFullscreen();
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this);
        window.removeEventListener("dblclick", this);
    }

    init = () => {
        const sizes = {
            width: 370,//window.innerWidth,
            height: 400,//window.innerHeight,
        };

        const scene = new THREE.Scene();
        const canvas = document.getElementsByClassName(this.props.children.props.className)[0];//document.querySelector(`.canvas`);
        const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height);

         scene.position.y = -1;
        // scene.position.z = 1;
        scene.add(camera);

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;

        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(sizes.width, sizes.height);
        renderer.render(scene, camera);

        return { sizes, scene, canvas, camera, renderer, controls };
    };

    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

export default ModelImpl;