'use strict';

(function () {
  var mainPage = document.querySelector('.main-page');
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var main = document.querySelector('.main');
  var pageFooter = document.querySelector('.page-footer');

  function onClickHeaderToggle() {
    mainPage.classList.toggle('main-page--menu-opened');
    pageHeader.classList.toggle('page-header--opened');
    main.classList.toggle('main--hidden');
    pageFooter.classList.toggle('page-footer--hidden');
    pageFooter.classList.toggle('page-footer--menu-opened');
  }

  headerToggle.addEventListener('click', onClickHeaderToggle);
})();
