angular.module('myApp')
.controller('controller',[myController])

function myController() {

	var vm = this;
	vm.hobbies = ["hobby","hobby","hobby"];
	

	vm.add = function (newHobby) {
		vm.hobbies.push(newHobby);
		console.log(newHobby);
	}
	vm.delete = function(hobby){
		vm.hobbies.splice(hobby, 1);
	}
	// vm.update = function (){
	// 	// for (var i = 0; i < vm.webs.length; i++) {}
		
	// }
}
