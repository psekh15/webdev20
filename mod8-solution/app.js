(function(){
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiPath', 'https://davids-restaurant.herokuapp.com/menu_items.json');
    
    function FoundItemsDirective () {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '<',
                onRemove: '&',
                noResults: '<'
            }
        }
    
        return ddo;
    }


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController (MenuSearchService) {
        var list = this;
    
        list.getFilteredItems = function (searchTerm) {
            if (!!searchTerm) {
                MenuSearchService.getMatchedMenuItems(searchTerm).then(function (response) {
                    list.found = response;
                    list.noResults = response.length === 0;
                });
            } else {
                list.found = [];
                list.noResults = true;
            }
        }
    
        list.removeItem = function (itemIndex) {
            list.found.splice(itemIndex, 1);
        }
    }
    
    MenuSearchService.$inject = ['$http', 'ApiPath'];
    function MenuSearchService ($http, ApiPath) {
        var service = this;
    
        service.getMatchedMenuItems = function (searchTerm) {
            return getAllMenuItems().then(function (response) {
                service.matchedItems = response.data.menu_items.filter(
                    item => item.description.indexOf(searchTerm) !== -1
                );
    
                return service.matchedItems;
            });
        }
    
        function getAllMenuItems () {
            return $http({
                url: ApiPath
            });
        }
    }
    
    })()