function Machine(power) { 
	this._power = power; 
	this._enabled = false; 
	var self = this; 
	this.enable = function() { self._enabled = true; }; 
	this.disable = function() { self._enabled = false; }; 
} 

function Fridge(power) { 
	Machine.apply(this, arguments); 
		this._capasity = this._power/100; 
			var food = []; 

this.addFood = function() { 
	if (!this._enabled) { 
		console.error('The fridge is off'); 
			return; 
} 

	if ((food.length + arguments.length) > this._capasity) { 
		console.error('There is no space if fridge'); 
			return; 
} 

for(var i = 0; i < arguments.length; i++) { 
	food.push(arguments[i]); 
} 
}; 

this.getFood = function() { 
	return food.slice();
};
}

var fridge = new Fridge(200);