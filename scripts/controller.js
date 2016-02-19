angular.module("app-test", [])
   .controller("entryCtrl", function($scope) {
        $scope.userdetails = [];
	$scope.addName = function() {
		if ($scope.getName && $scope.getDescription && $scope.getCurrency && $scope.getAdultRate&& $scope.getChildRate && $scope.getPickupTime&&$scope.getTourStartTime && $scope.getDaysofWeek && $scope.getDuration && $scope.getEffectiveStartDate&& $scope.getEffectiveEndDate && $scope.getLocation ) {
			
			$scope.userdetails.push({'name':$scope.getName,
                        'description':$scope.getDescription,
                         'currency':$scope.getCurrency,
						 'adultrate':$scope.getAdultRate,
						 'childrate':$scope.getChildRate,
						 'pickuptime':$scope.getPickupTime,
                         'tourstarttime':$scope.getTourStartTime,
			             'daysofweek':$scope.getDaysofWeek,
			             'duration':$scope.getDuration,
			             'effectivestartdate':$scope.getEffectiveStartDate,
			             'effectiveenddate':$scope.getEffectiveEndDate,
			             'location':$scope.getLocation});
			var dataObj = {
					name : $scope.getName,
					description : $scope.getDescription,
					currency : $scope.getCurrency,
					adultrate:$scope.getAdultRate,
					childrate:$scope.getChildRate,
					pickuptime:$scope.getPickupTime,
                    tourstarttime:$scope.getTourStartTime,
			        daysofweek:$scope.getDaysofWeek,
			        duration:$scope.getDuration,
			        effectivestartdate:$scope.getEffectiveStartDate,
			        effectiveenddate:$scope.getEffectiveEndDate,
			        location:$scope.getLocation
				      };
			$scope.getName='';
			$scope.getDescription='';
			$scope.getCurrency='';
			$scope.getAdultRate='';
			$scope.getChildRate='';
			$scope.getPickupTime='';
            $scope.getTourStartTime='';
			$scope.getDaysofWeek='';
			$scope.getDuration='';
			$scope.getEffectiveStartDate='';
			$scope.getEffectiveEndDate='';
			$scope.getLocation='';
		};
	}
});