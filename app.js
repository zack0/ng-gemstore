(function(){
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', function(){
		this.products = gems;

	});

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			product.reviews.push(this.review.createdOn = Date.now());
			this.review = {};
		};
	});

	var gems = [
			{
				name: 'Dodecahedron',
				price: 299999.95,
				description: 'The amazingly magnificent Dodecahedron.',
				canPurchase: true,
				soldOut: false,
				specification:'Clear',
				reviews: [{
					stars: 5,
					body: 'Such an amazing gem!',
					author: 'email@email.com',
					createdOn: ''
				}],
				images: [
					'images/gem-01.gif',
					'images/gem-02.gif',
					'images/gem-03.gif',
					'images/gem-04.gif',
					'images/gem-05.gif'
				]
			},
			{
				name: 'Pentagonal',
				price: 9999.95,
				description: 'The sharply timeless Pentagonal.',
				canPurchase: true,
				soldOut: false,
				specification:'Clear',
				reviews: [
					{
					stars: 4,
					body: 'Such a sharp gem!',
					author:"email@email.com",
					createdOn: ''
					}
				],
				images: [
					'images/gem-06.gif',
					'images/gem-07.gif',
					'images/gem-08.gif',
					'images/gem-09.gif',
					'images/gem-10.gif'
				]
			}
		];
})();