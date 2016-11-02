(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var list1 = this;
    list1.shoppingList = ShoppingListCheckOffService.getItems();
    //console.log(list1.shoppingList);
    list1.removeItem = function (itemIndex) {
        ShoppingListCheckOffService.removeItem(itemIndex);
    };
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;
  // Use factory to create new shopping list service
  list2.bought = ShoppingListCheckOffService.getbought();
  console.log(list2.bought);
}

function ShoppingListCheckOffService(){
  var service = this;
  var toBuyItems=[
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Chocolate Milk",
      quantity: "50"
    }
  ];
   var boughtitems=[];

  service.getItems= function(){
    return toBuyItems;
  }
  service.removeItem = function (itemIndex) {
    var item=toBuyItems.splice(itemIndex, 1);
    console.log(item[0]);
    boughtitems.push(item[0]);
  };
  service.getbought = function () {
      return boughtitems;
  };



}


})();
