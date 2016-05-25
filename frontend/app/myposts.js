angular.module('app').controller('MyPosts', function ($scope, $http) {
	$http.get('/api/post/myPosts').then(function (posts) {
		$scope.posts = posts.data;
	})
});
add name="main" connectionString="Data Source=(LocalDB)\v11.0;AttachDbFilename=C:\Users\Userpc\Documents\Pluralsight\proj\16-building-multi-client-end-to-end-soa-angular-edition-m15-exercise-files\Data\CarRental.mdf;Integrated Security=True;Connect Timeout=30" providerName="System.Data.SqlClient"/>