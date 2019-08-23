var bufferWidth = window.innerWidth;
var bufferHeight = window.innerHeight;

var scene = new THREE.Scene();
var bufferCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
bufferCamera.position.z = 20;

var camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 0.1, 1000 );
camera.position.z = 5;

var mouseX, mouseY;
var mousePos = new THREE.Vector3();
var mouseIsDown = false;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var bufferScene = new THREE.Scene();
var bufferTexture = new THREE.WebGLRenderTarget( bufferWidth, bufferHeight, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});

var controls = new THREE.OrbitControls(bufferCamera, renderer.domElement);
controls.zoomSpeed = 0.5;


var speed = 0.2;
var gSpeed = speed*speed;
var oscSize = 1.0;
var shapeScale = 6;
var scaleVariation = 1.0;
var scaleMod = 3;
var chaos = 0.0;
var gChaos = 0.0;
var symmetry = 4;
var blendHue = 0.0;
var blendAmount = 0.0;
var reflections = true;
var reflectivity = 0.7;

var shape = "Icosahedron";
var brightness = 0.7;

var urls = [
	  'images/cubeMaps/1/pos-x.png',
	  'images/cubeMaps/1/neg-x.png',
	  'images/cubeMaps/1/pos-y.png',
	  'images/cubeMaps/1/neg-y.png',
	  'images/cubeMaps/1/pos-z.png',
	  'images/cubeMaps/1/neg-z.png'
	];	

var cubemap = THREE.ImageUtils.loadTextureCube(urls);
cubemap.format = THREE.RGBFormat;

var swarm = new Swarm();
bufferScene.add(swarm.holder);

var ambientLight = new THREE.AmbientLight(0x303030);
bufferScene.add(ambientLight);

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0,100,100);
bufferScene.add(pointLight);


function adjustUVs(geometry, ratioX, ratioY)
{
	geometry.computeBoundingBox();

	var max     = geometry.boundingBox.max;
	var min     = geometry.boundingBox.min;

	var offset  = new THREE.Vector2(0 - min.x, 0 - min.y);
	var range   = new THREE.Vector2(max.x - min.x, max.y - min.y);

	geometry.faceVertexUvs[0] = [];
	var faces = geometry.faces;

	for (i = 0; i < geometry.faces.length ; i++) {

	  var v1 = geometry.vertices[faces[i].a];
	  var v2 = geometry.vertices[faces[i].b];
	  var v3 = geometry.vertices[faces[i].c];

	  geometry.faceVertexUvs[0].push([
	    new THREE.Vector2( ( v1.x + offset.x ) / range.x * ratioX, ( v1.y + offset.y ) / range.y * ratioY),
	    new THREE.Vector2( ( v2.x + offset.x ) / range.x * ratioX, ( v2.y + offset.y ) / range.y * ratioY),
	    new THREE.Vector2( ( v3.x + offset.x ) / range.x * ratioX, ( v3.y + offset.y ) / range.y * ratioY)
	  ]);

	}
	geometry.uvsNeedUpdate = true;
}

var texturePanelSingle = new THREE.Object3D();
scene.add(texturePanelSingle);

function createTexturePanelSingle()
{
	var material = new THREE.MeshBasicMaterial({map:bufferTexture, side:THREE.DoubleSide});
	var geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);

	var planeObj = new THREE.Mesh(geometry, material);
	texturePanelSingle.add(planeObj);
}
createTexturePanelSingle();

var texturePlaneBi = new THREE.Object3D();
scene.add(texturePlaneBi);

function createTexturePlaneBi()
{
	var material = new THREE.MeshBasicMaterial({map:bufferTexture, side:THREE.DoubleSide});
	var geometry = new THREE.PlaneGeometry(window.innerWidth/2, window.innerHeight);

	adjustUVs(geometry, 0.5, 1.0);

	var planeObj = new THREE.Mesh(geometry, material);
	planeObj.position.x = -window.innerWidth/4;
	texturePlaneBi.add(planeObj);

	var planeObj2 = planeObj.clone();
	texturePlaneBi.add(planeObj2);
	planeObj2.scale.x = -1;
	planeObj2.position.x = window.innerWidth/4;
}
createTexturePlaneBi();



var texturePlaneQuad = new THREE.Object3D();
scene.add(texturePlaneQuad);

function createTexturePlaneQuad()
{
	var material = new THREE.MeshBasicMaterial({map:bufferTexture, side:THREE.DoubleSide});
	var geometry = new THREE.PlaneGeometry(window.innerWidth/2, window.innerHeight/2);

	adjustUVs(geometry, 0.5, 0.5);

	var plane;

	plane = new THREE.Mesh(geometry, material);
	plane.position.x = -window.innerWidth/4;
	plane.position.y = -window.innerHeight/4;
	texturePlaneQuad.add(plane);

	plane = plane.clone();
	plane.scale.x = -1;
	plane.position.x = window.innerWidth/4;
	plane.position.y = -window.innerHeight/4;
	texturePlaneQuad.add(plane);

	plane = plane.clone();
	plane.scale.x = -1;
	plane.scale.y = -1;
	plane.position.x = window.innerWidth/4;
	plane.position.y = window.innerHeight/4;
	texturePlaneQuad.add(plane);

	plane = plane.clone();
	plane.scale.x = 1;
	plane.scale.y = -1;
	plane.position.x = -window.innerWidth/4;
	plane.position.y = window.innerHeight/4;
	texturePlaneQuad.add(plane);
}
createTexturePlaneQuad();


// var gui = new dat.GUI();
var gui = new dat.GUI({load: presets });
gui.remember(this);
gui.remember(bufferCamera.position);
gui.remember(bufferCamera.rotation);
gui.remember(controls.target);

var speedControl = gui.add(this, "speed", 0, 0.5);
gui.add(this, "oscSize", 0, 3);
gui.add(this, "shapeScale", 0.1, 10);
gui.add(this, "scaleVariation", 0, 1);
gui.add(this, "scaleMod", 1, 10).step(1);
var chaosControl = gui.add(this, "chaos", 0, 1);
var numAxesControl = gui.add(this, "symmetry", [1, 2, 4]);
var shapeControl = gui.add(this, "shape", ["Line", "Plane", "Tetrahedron", "Box", "Dodecahedron", "Icosahedron"]);
var blendHueControl = gui.add(this, "blendHue", 0.0, 1.0);
var blendAmountControl = gui.add(this, "blendAmount", 0.0, 1.0);
var reflectionControl = gui.add(this, "reflections");
var reflectivityControl = gui.add(this, "reflectivity", 0.0, 1.0);
var brightnessControl = gui.add(this, "brightness", 0.5, 1.0);

gui.close();

var updateControl = function(value)
{
	controls.update();
}

var cameraFolder = gui.addFolder("Camera");
cameraFolder.add( bufferCamera.position , 'x', -100, 100 ).listen().onChange(updateControl);
cameraFolder.add( bufferCamera.position , 'y', -100, 100 ).listen().onChange(updateControl);
cameraFolder.add( bufferCamera.position , 'z', -100, 100 ).listen().onChange(updateControl);
cameraFolder.add( bufferCamera.rotation , 'x', -3.14, 3.14 ).listen().onChange(updateControl);
cameraFolder.add( bufferCamera.rotation , 'y', -3.14, 3.14 ).listen().onChange(updateControl);
cameraFolder.add( bufferCamera.rotation , 'z', -3.14, 3.14 ).listen().onChange(updateControl);
cameraFolder.add( controls.target , 'x', -100, 100 ).listen().onChange(updateControl);
cameraFolder.add( controls.target , 'y', -100, 100 ).listen().onChange(updateControl);
cameraFolder.add( controls.target , 'z', -100, 100 ).listen().onChange(updateControl);
cameraFolder.close();


brightnessControl.onChange(function(value){
	swarm.updateColors();
});

reflectionControl.onChange(function(value){
	swarm.updateMaterials();
});

reflectivityControl.onChange(function(value){
	swarm.updateMaterials();
});

speedControl.onChange(function(value){
	gSpeed = speed*speed;
});

blendHueControl.onChange(function(value){
	swarm.updateColors();
});

blendAmountControl.onChange(function(value){
	swarm.updateColors();
});

chaosControl.onChange(function(value){
	gChaos = chaos*chaos;
});

shapeControl.onChange(function(value){
	swarm.updateShapes();
});

numAxesControl.onChange(function(value){
	updateSymmetry();
});

function updateSymmetry()
{
	texturePanelSingle.visible = false;
	texturePlaneBi.visible = false;
	texturePlaneQuad.visible = false;

	var offset = -7;

	if (symmetry == 1) 
	{
		texturePanelSingle.visible = true;
		swarm.holder.position.x = 0;
		swarm.holder.position.y = 0;
	}

	if (symmetry == 2) 
	{
		texturePlaneBi.visible = true;
		swarm.holder.position.x = offset;
		swarm.holder.position.y = 0;
	}

	if (symmetry == 4) 
	{
		texturePlaneQuad.visible = true;
		swarm.holder.position.x = offset;
		swarm.holder.position.y = offset*0.7;
	}
}
updateSymmetry();


function render()
{
	requestAnimationFrame(render);
	update();
	renderer.render(bufferScene, bufferCamera, bufferTexture);
	renderer.render(scene, camera);
}
render();

function update()
{
	swarm.holder.rotation.x += 0.015 * speed;
	swarm.holder.rotation.y += 0.0115 * speed;
	swarm.update();

}

window.addEventListener('resize', function() 
{
	var WIDTH = window.innerWidth;
	var HEIGHT = window.innerHeight;
	renderer.setSize(WIDTH, HEIGHT);


	bufferCamera.aspect = WIDTH / HEIGHT;
	bufferCamera.updateProjectionMatrix();

	bufferTexture.setSize(WIDTH, HEIGHT);

	// camera.left = window.innerWidth / - 2;
	// camera.right = window.innerWidth / 2;
	// camera.top = window.innerHeight / 2;
	// camera.bottom = window.innerHeight / - 2;
	// camera.updateProjectionMatrix();
});

