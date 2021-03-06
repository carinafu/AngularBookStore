﻿(function(){

var storeCtrl = angular.module('storeCtrl', []);

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
storeCtrl.controller('storeController', ['$scope','$routeParams','DataService', function($scope, $routeParams, DataService){
	// get store and cart from service
	$scope.store = DataService.store;
	$scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.productId != null) {
    	$scope.product = $scope.store.getProduct($routeParams.productId);
    }

}]);

storeCtrl.controller('ReviewController', function() {
	this.review = {};
	this.addReview = function(book) {
		book.reviews.push(this.review);
		this.review = {};
	};
});

})();