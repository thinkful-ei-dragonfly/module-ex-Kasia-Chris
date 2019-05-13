import $ from 'jquery';
import api from './api';
import store from './store';
import shoppingList from './shopping-list';

$(document).ready(function() {
  //shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
  .then(items => {
    items.forEach(item => store.addItem(item));
    shoppingList.bindEventListeners();
    shoppingList.render();
  })
});

