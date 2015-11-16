(function(){
	
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', [ '$http', function($http) {
		
		var store = this;
		store.products = [];

		$http.get('products.json').success(function(data) {
			store.products = data;
		});

	}]);

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			product.reviews.push(this.review.createdOn = Date.now());
			this.review = {};
		};
	});

})();

// The flatlanders need a store so they can sell their gems and more
// They need it really quick angular will do the trick
// Directives set the stage in your HTML page
// Controllers give your app the behavior that it lacks
// Write Expressions so that you can add your data to the view
// And modules make connections with dependency injection
// You're a scripting conneseiur when shaping up with Angular.js