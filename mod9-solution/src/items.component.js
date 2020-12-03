(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'templates/items.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
