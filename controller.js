angular.module('myApp')
.controller('controller',[myController])

function myController() {

	var vm = this;
	vm.hobbies = [];

	vm.add = function (newHobby) {
		vm.hobbies.push(newHobby);
		console.log(newHobby);
	}
	vm.delete = function(hobby){
		vm.hobbies.splice(hobby, 1);
	}
}
