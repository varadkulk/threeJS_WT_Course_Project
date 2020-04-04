var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
camera = new THREE.PerspectiveCamera(
	40,
	window.innerWidth / window.innerHeight,
	1,
	5000
);
camera.rotation.y = (45 / 180) * Math.PI;
camera.position.x = 800;
camera.position.y = 100;
camera.position.z = 1000;
controls = new THREE.OrbitControls(camera, renderer.domElement);
let loader = new THREE.GLTFLoader();
loader.load("Mclaren/scene.gltf", function (gltf) {
	car = gltf.scene.children[0];
	car.scale.set(1, 1, 1);
	scene.add(gltf.scene);
	animate();
});
var side = 200;
var intensity = 100;
var constant = 3.5;
var rectLight = new THREE.RectAreaLight(0xffffff, intensity, side, side);
rectLight.position.set(side * constant, 0, 0);
rectLight.lookAt(0, 0, 0);
scene.add(rectLight);
var rectLight2 = new THREE.RectAreaLight(0xffffff, intensity, side, side);
rectLight2.position.set(0, side * constant, 0);
rectLight2.lookAt(0, 0, 0);
scene.add(rectLight2);
var rectLight3 = new THREE.RectAreaLight(0xffffff, intensity, side, side);
rectLight3.position.set(-side * constant, 0, 0);
rectLight3.lookAt(0, 0, 0);
scene.add(rectLight3);
var rectLight4 = new THREE.RectAreaLight(0xffffff, intensity, side, side);
rectLight4.position.set(0, 0, side * 1.5 * constant);
rectLight4.lookAt(0, 0, 0);
scene.add(rectLight4);
var rectLight5 = new THREE.RectAreaLight(0xffffff, intensity, side, side);
rectLight5.position.set(0, 0, -side * 1.5 * constant);
rectLight5.lookAt(0, 0, 0);
scene.add(rectLight5);
rectLight.add(rectLightHelper);
function animate() {
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}
