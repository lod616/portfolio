"use strict";

function showHeaderMenu() {
  var headerBurger = document.querySelector(".header-burger");
  var headerMenu = document.querySelector(".header-menu");
  headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle("header-burger--active");
    headerMenu.classList.toggle("header-menu--active");
  });
}

showHeaderMenu();
var tabs = document.querySelector('.tabs');
var btns = tabs.querySelectorAll('.tabs__btn');
var items = tabs.querySelectorAll('.tabs__item');

function change(arr, i) {
  arr.forEach(function (item) {
    item.forEach(function (i) {
      i.classList.remove('is-active');
    });
    item[i].classList.add('is-active');
  });
}

var _loop = function _loop(i) {
  btns[i].addEventListener('click', function () {
    change([btns, items], i);
  });
};

for (var i = 0; i < btns.length; i++) {
  _loop(i);
}