$(function () {
	
	var $inventory = $('.inventory-box');
   	$inventory.on('click', function(event) {
   		console.log('Clicked');
   		
   	});

   	var $pencil = $('#pencilItem');
   	$pencil.on('click', function(event) {
   		console.log('yeah boi, pencil');
   		addItem($(this), $inventory);

   	});

   	var $paper = $('#paperItem');
   	$paper.on('click', function(event) {
   		console.log('yeah boi, paper');
   		addItem($(this), $inventory);
   	});

   	var $laptop = $('#laptopItem');
   	$laptop.on('click', function(event) {
   		console.log('yeah boi, laptop');

   	});

   	var $drawers = $('#drawersItem');
   	$drawers.on('click', function(event) {
   		console.log('yeah boi, drawers');
   	});

   	var $door = $('#door');
   	$door.on('click', function(event) {
   		console.log('yeah boi, door');
   	});

   	var $doorLock = $('#doorLock');
   	$doorLock .on('click', function(event) {
   		console.log('yeah boi, door lock');
   	});
});


//Adds an item to the inventory
function addItem (item, $inventory) {

	// if (checkInventoryFree(inventoryBox)) {
	if (checkInventoryFree($inventory) === '') {
		makeAlert('Inventory is full');
	}

	else {
		checkInventoryFree($inventory).css("background-image", item.css("background-image"));
	}
	
	// } else {
	// 	makeAlert('That place is already filled!');
	// }
	
}


// Checks to see if the inventory space is alreayd filled
function checkInventoryFree($inventory) {
	for (var i = 0; i < $inventory.length; i++) {
		var inventoryBox = $inventory.eq(i);
		console.log
		if (inventoryBox.css("background-image") === 'none') {
			break;
		}
		else {
			inventoryBox = '';
		}
	}

	return inventoryBox;
	
}

//Makes an alert from the text given
function makeAlert(text) {
	alert(text);
}