(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var itemBuyer = this;

        itemBuyer.items = ShoppingListCheckOffService.getToBuyItems();

        itemBuyer.buyItem = function(index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var itemBought = this;

        itemBought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [
            { name: "cookies", quantity: 5, pricePerItem: 5},
            { name: "apples", quantity: 10, pricePerItem: 2 },
            { name: "soda cans", quantity: 2, pricePerItem: 2 },
            { name: "potatoes", quantity: 2, pricePerItem: 1 },
            { name: "fronzen pizzas", quantity: 1, pricePerItem: 7 }
        ];
        var boughtItems = [];

        service.buyItem = function(index) {
            var item = toBuyItems[index];

            boughtItems.push(item);
            toBuyItems.splice(index, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getBoughtItems = function() {
            return boughtItems;
        };
    }
})();