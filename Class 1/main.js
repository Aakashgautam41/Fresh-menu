// $(function() {
//   $('#user-email').on('input',function() {
//     var email = $('#user-email').val();
//     var message = 'Welcome back, '+ email;
//     $('.welcome-message').text(message);
//
//
//       });
// });
var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function($routeProvider){
 $routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
    
    .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})
foodieApp.controller('loginController',function($scope,$location){
    $scope.goToHome = function(){
        console.log($location.url())
        $location.url('home');
    }
    
})



foodieApp.controller('restaurantController',function($scope,$routeParams) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
                name: 'Farzi Cafe',
                address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
                location: 'Connaught Place',
                category: 'Casual Dining, Bar',
                vote: '4.2',
                cuisines: 'Modern Indian',
                cost: '2200',
                hours: '12 Noon to 1 AM (Mon-Sun)',
                image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
                 id : 1
        
        },
                {
                name: 'Flying Kukkad',
                address: '38/39, Level 1, Gurgaon',
                location: 'Connaught Place',
                category: 'Casual Dining, Bar',
                vote: '4.2',
                cuisines: 'North Indian, Continental, Lebanese',
                cost: '600',
                hours: '12 Noon to 1 AM (Mon-Sun)',
                image: 'https://thumb7.shutterstock.com/display_pic_with_logo/288100/184074431/stock-photo-marinated-grilled-healthy-chicken-breasts-cooked-on-a-summer-bbq-and-served-with-fresh-herbs-and-184074431.jpg',
                      id : 2

        },
            {
                name: 'The Big Chill Cakery',
                address: 'Main Market, Khan Market, New Delhi',
                location: 'Khan Market',
                category: 'BAKERY,DESSERT PARLOR',
                vote: '4.3',
                cuisines: 'Bakery, Desserts',
                cost: '700',
                hours: '8 AM to 12 Midnight (Mon-Sun)',
                image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?h=350&auto=compress&cs=tinysrgb'

        },
                              {
                name: 'Dominos Pizza',
                address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
                location: 'Connaught Place',
                category: 'QUICK BITES',
                vote: '3.5',
                cuisines: 'Pizza, Fast Food',
                cost: '600',
                hours: '11 AM to 11 PM (Mon-Sun)',
                image: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb   '

        },
                              {
                name: 'Starbucks',
                address: 'Block A, Hamilton House, Connaught Place, New Delhi',
                location: 'Connaught Place',
                category: 'CAFÉ',
                vote: '4.1',
                cuisines: 'Cafe',
                cost: '700',
                hours: '7:30 AM to 12:30 AM (Mon-Sun)',
                image: 'https://images.pexels.com/photos/180066/pexels-photo-180066.jpeg?h=350&auto=compress&cs=tinysrgb'

        },
                              {
                name: 'Zen',
                address: 'B-25,Pune, New Mumbai',
                location: 'Mumbai',
                category: 'Casual Dining',
                vote: '4.2',
                cuisines: 'Chinese, Japanese, Italian, Seafood',
                cost: '1500',
                hours: '11 AM to 11:30 PM (Mon-Sun)',
                image: 'https://images.pexels.com/photos/46247/thai-food-noodle-fried-noodles-meal-46247.jpeg?h=350&auto=compress&cs=tinysrgb'

        },
                              {
                name: 'Johnny Rockets',
                address: 'S-14,2nd Floor, Select Citywalk Mall, Saket, New Delhi',
                location: 'Select Citywalk Mall, Saket',
                category: 'Casual Dining',
                vote: '3.9',
                cuisines: 'Fast Food, American, Burger',
                cost: '900',
                hours: '11 AM to 11 PM (Mon-Sun)',
                image: ' https://images.pexels.com/photos/496580/pexels-photo-496580.jpeg?h=350&auto=compress&cs=tinysrgb'

        }]
	$scope.restaurant = restaurants[$routeParams.id - 1];
})
    
    foodieApp.controller('mainController',function($scope){
        $scope.restaurants = [{
                name: 'Farzi Cafe',
                address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
                location: 'Connaught Place',
                category: 'Casual Dining, Bar',
                vote: '4.2',
                cuisines: 'Modern Indian',
                cost: '2200',
                hours: '12 Noon to 1 AM (Mon-Sun)',
                image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
              id : 1
        },
                {
                name: 'Flying Kukkad',
                address: '38/39, Level 1, Gurgaon',
                location: 'Connaught Place',
                category: 'Casual Dining, Bar',
                vote: '4.2',
                cuisines: 'North Indian, Continental, Lebanese',
                cost: '600',
                hours: '12 Noon to 1 AM (Mon-Sun)',
                image: 'https://thumb7.shutterstock.com/display_pic_with_logo/288100/184074431/stock-photo-marinated-grilled-healthy-chicken-breasts-cooked-on-a-summer-bbq-and-served-with-fresh-herbs-and-184074431.jpg',
                     id : 2

        },
            {
                name: 'The Big Chill Cakery',
                address: 'Main Market, Khan Market, New Delhi',
                location: 'Khan Market',
                category: 'BAKERY,DESSERT PARLOR',
                vote: '4.3',
                cuisines: 'Bakery, Desserts',
                cost: '700',
                hours: '8 AM to 12 Midnight (Mon-Sun)',
                image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?h=350&auto=compress&cs=tinysrgb'

        },
                              {
                name: 'Dominos Pizza',
                address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
                location: 'Connaught Place',
                category: 'QUICK BITES',
                vote: '3.5',
                cuisines: 'Pizza, Fast Food',
                cost: '600',
                hours: '11 AM to 11 PM (Mon-Sun)',
                image: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb   '

        },
                              {
                name: 'Starbucks',
                address: 'Block A, Hamilton House, Connaught Place, New Delhi',
                location: 'Connaught Place',
                category: 'CAFÉ',
                vote: '4.1',
                cuisines: 'Cafe',
                cost: '700',
                hours: '7:30 AM to 12:30 AM (Mon-Sun)',
                image: 'https://images.pexels.com/photos/180066/pexels-photo-180066.jpeg?h=350&auto=compress&cs=tinysrgb'

        },
                              {
                name: 'Zen',
                address: 'B-25,Pune, New Mumbai',
                location: 'Mumbai',
                category: 'Casual Dining',
                vote: '4.2',
                cuisines: 'Chinese, Japanese, Italian, Seafood',
                cost: '1500',
                hours: '11 AM to 11:30 PM (Mon-Sun)',
                image: 'https://images.pexels.com/photos/46247/thai-food-noodle-fried-noodles-meal-46247.jpeg?h=350&auto=compress&cs=tinysrgb'

        },
                              {
                name: 'Johnny Rockets',
                address: 'S-14,2nd Floor, Select Citywalk Mall, Saket, New Delhi',
                location: 'Select Citywalk Mall, Saket',
                category: 'Casual Dining',
                vote: '3.9',
                cuisines: 'Fast Food, American, Burger',
                cost: '900',
                hours: '11 AM to 11 PM (Mon-Sun)',
                image: ' https://images.pexels.com/photos/496580/pexels-photo-496580.jpeg?h=350&auto=compress&cs=tinysrgb'

        }];
    
    });

  