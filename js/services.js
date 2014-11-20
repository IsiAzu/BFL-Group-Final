app.factory('mongoService', function ($q, $rootScope) {
	
	return {
		getTeams: function(que) {
			var deferred = $q.defer();

			var query = "SELECT * FROM " + fusionTableId
			+ " WHERE 'Winning player 1' CONTAINS IGNORING CASE " + "'"+que+"'";
			var encodedQuery = encodeURIComponent(query);

			var url = [fusionBaseUrl];
			url.push('?sql=' + encodedQuery);
			url.push('&key=' + fusionApiKey);
			url.push('&callback=?');

			$.ajax({
				url: url.join(''),
				dataType: 'jsonp',
				success: function (data) {
    				//console.log(data.rows[0][1]);
    				$rootScope.$apply(deferred.resolve(data));
    			}
    		});
			return deferred.promise;
		}
	}
});