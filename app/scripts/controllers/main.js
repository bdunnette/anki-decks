'use strict';

angular.module('ankiDecksApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('./decks/collections.json').success(function (data) {$scope.decks = data});
    $scope.gridOptions = { 
      data: 'decks',
      columnDefs: [
          {field:'title', displayName:'Title', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><span ng-cell-text><a href="./decks/{{row.getProperty(\'anki_package\')}}">{{row.getProperty(col.field)}}</a></span></div>'}, 
          {field:'modified_date', displayName:'Last Updated', width: '20%'}
      ],
      sortInfo: { 
          fields: ['modified_date','title'], 
          directions: ['desc', 'asc']
      }
    };
  });
