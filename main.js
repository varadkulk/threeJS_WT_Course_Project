var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
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
var ambientLight = new THREE.AmbientLight(0xffffff,10); // soft white light
scene.add(ambientLight);
var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( directionalLight );
function animate() {
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}
