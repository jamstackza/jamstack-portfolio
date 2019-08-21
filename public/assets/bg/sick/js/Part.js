function Part(ratio, seed)
{
	this.seed = seed;
	this.pos = new THREE.Vector3();
	var vel = new THREE.Vector3();
	var rot = new THREE.Vector3();
	var rotVel = new THREE.Vector3();

	var f = 0.5;
	var friction = new THREE.Vector3(f,f,f);
	var maxImpulse = 0.005;

	var hue = ratio;
	var color = new THREE.Color().setHSL(hue, 1.0, brightness);
	color.lerp(new THREE.Color().setHSL(blendHue, 1.0, 0.5), 0.0 );

	var size = 1;
	this.geometry = new THREE.Geometry();

	this.setGeometry = function()
	{
		if (shape == "Line")
		{
			this.geometry = new THREE.BoxGeometry(size/100,size/100,size*3);
		}

		if (shape == "Plane")
		{
			this.geometry = new THREE.BoxGeometry(size,size/100,size);
		}

		if (shape == "Box")
		{
			this.geometry = new THREE.BoxGeometry(size,size,size);
		}

		if (shape == "Dodecahedron")
		{
			this.geometry = new THREE.DodecahedronGeometry(size, 0);
		}

		if (shape == "Icosahedron")
		{
			this.geometry = new THREE.IcosahedronGeometry(size, 1);
		}

		if (shape == "Tetrahedron")
		{
			this.geometry = new THREE.TetrahedronGeometry(size, 0);
		}
	}
	this.setGeometry();


	this.material = new THREE.MeshPhongMaterial({color:color, shading:THREE.FlatShading, envMap: cubemap});
	this.material.reflectivity = reflectivity;
	this.material.map = null;
	this.mesh = new THREE.Mesh(this.geometry, this.material);
	this.mesh.castShadow = true;
	this.mesh.receiveShadow = true;

	var targetPos = new THREE.Vector3();

	this.rand = function()
	{
		return this.seed + Math.random() * 0.0;
	}

	var osc = [this.rand(), this.rand(), this.rand(), this.rand(), this.rand(), this.rand()];
	var oscSpeed = [0.012, 0.021, 0.051, 0.11, 0.031, 0.0151];

	var scaleOsc = 0;
	var chaosMod = Math.random() * 10;
	var scaleRatio = Math.abs(ratio - 0.5) * 2;

	this.update = function()
	{
		updateOsc();

		scaleOsc += 0.2 * gSpeed;
		var newScaleRatio = (Math.sin(scaleOsc + ratio*Math.PI*2 * scaleMod) + 1) * 0.5;
		var scaleDiff = 1 - newScaleRatio;
		newScaleRatio = newScaleRatio + (scaleDiff * (1-scaleVariation));
		scaleRatio += (newScaleRatio - scaleRatio) * 0.1;
		this.mesh.scale.set(shapeScale*scaleRatio, shapeScale*scaleRatio, shapeScale*scaleRatio);

		var spread = Math.PI * 2;

		targetPos.x = Math.cos(osc[0] + ratio*spread*1 + gChaos*chaosMod) * 8 * oscSize;
		targetPos.y = Math.sin(osc[1] + ratio*spread*2 + gChaos*chaosMod) * 7 * oscSize;
		targetPos.z = Math.cos(osc[2] + ratio*spread*3 + gChaos*chaosMod) * 9 * oscSize;

		targetPos.x += Math.cos(osc[3] + ratio*spread*3 + gChaos*chaosMod) * 7 * oscSize;
		targetPos.y += Math.cos(osc[4] + ratio*spread*2 + gChaos*chaosMod) * 5 * oscSize;
		targetPos.z += Math.cos(osc[5] + ratio*spread*4 + gChaos*chaosMod) * 2 * oscSize;

		var accel = new THREE.Vector3();

		var diff = new THREE.Vector3();
		diff.subVectors(targetPos, this.pos);
		accel.addScaledVector(diff, 0.1);


		vel.add(accel);
		vel = vel.multiply(friction);
		this.pos = this.pos.add(vel);
		this.mesh.position.copy(this.pos);

		rotVel.add(accel.multiplyScalar(0.1));
		rot.add(rotVel);
		rotVel.multiply(friction);
		this.mesh.rotation.setFromVector3(rot);

		
	}

	this.updateShape = function()
	{
		this.setGeometry();
		this.mesh.geometry = this.geometry;

	}

	this.updateColor = function()
	{
		var color = new THREE.Color().setHSL(hue, 1.0, brightness);

		color.lerp(new THREE.Color().setHSL(blendHue, 1.0, 0.5), blendAmount );

		this.material.color = color;
	}

	this.updateMaterial = function()
	{
		if (reflections) {
			this.material.envMap = cubemap;
		} else {
			this.material.envMap = null;
		}

		this.material.reflectivity = reflectivity;

		this.material.needsUpdate = true;
	}
	

	function updateOsc()
	{
		for (var i=0; i<osc.length; i++)
		{
			osc[i] += oscSpeed[i] * gSpeed;
		}
	}


	function randAccel()
	{
		return THREE.Math.randFloat(-maxImpulse, maxImpulse);
	}
}