function Swarm()
{
	this.holder = new THREE.Object3D();

	this.holder.castShadow = true;
	this.holder.receiveShadow = true;

	var numParts = 300;
	this.allParts = [];

	var pos = new THREE.Vector3(1, 1, 0);
	pos.normalize();

	var seed = Math.random() * 1000000;

	for (var i=0; i<numParts; i++)
	{
		var ratio = 1.0 - (i+1)/numParts;
		var part = new Part(ratio, seed);
		this.holder.add(part.mesh);
		this.allParts[i] = part;
	}


	this.update = function()
	{
		for (var i=0; i<this.allParts.length; i++)
		{
			this.allParts[i].update();
		}
	}

	this.updateShapes = function()
	{
		for (var i=0; i<this.allParts.length; i++)
		{
			this.allParts[i].updateShape();
		}
	}

	this.updateColors = function()
	{
		for (var i=0; i<this.allParts.length; i++)
		{
			this.allParts[i].updateColor();
		}
	}

	this.updateMaterials = function()
	{
		for (var i=0; i<this.allParts.length; i++)
		{
			this.allParts[i].updateMaterial();
		}
	}
}