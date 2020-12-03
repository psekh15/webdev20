(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'templates/categories.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
