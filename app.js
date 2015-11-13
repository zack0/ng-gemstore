(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		// this.products = gems;
		this.products = [
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
					author: 'email@email.com'
				}],
				images: [
					{
					full: 'images/',
					thumb: 'images/gem-01.gif'
					}
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
					author:"email@email.com"
					}
				],
				images: [
					{
					full: 'images/',
					thumb: 'images/gem-02.gif'
					}
				]
			},
			{
				name: 'Ruby',
				price: 199999.95,
				description: 'The classicly illustrious Ruby.',
				canPurchase: true,
				soldOut: false,
				specification:'Clear',
				reviews: [
					{
					stars: 4,
					body: 'Such a classic gem!',
					author:"email@email.com"
					}
				],
				images: [
					{
					full: 'images/',
					thumb: 'images/gem-03.gif'
					}
				]
			},
			{
				name: 'Azurite',
				price: 39999.95,
				description: 'The semi-precious gemstone due to it\'s royal blue color.',
				canPurchase: true,
				soldOut: true,
				specification:'Clear',
				reviews: [
					{
					stars: 5,
					body: 'Such a precious gem!',
					author:"email@email.com"
					}
				],
				images: [
					{
					full: 'images/',
					thumb: 'images/gem-04.gif'
					}
				]
			},
			{
				name: 'Hexagem',
				price: 699999.95,
				description: 'The super precious very rare gemstone.',
				canPurchase: true,
				soldOut: true,
				reviews: [
					{
					stars: 5,
				 	body: 'Such a precious super gem!',
				 	author:"email@email.com"
				 	},
				 	{
				 	stars: 5,
				 	body: "Such an precious, precious gem!",
				 	author: 'email1@email2.com'
				 	},
				 	],
				images: [
					{
					full: 'images/',
					thumb: 'images/gem-05.gif'
					}
				]
			}
		];
	});

	app.controller('PanelController', function(){
		this.tab = 1;
		
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	var gems = uninitialized;
})();