'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');

  function onClickHeaderToggle() {
    pageHeader.classList.toggle('page-header--opened');
  }

  headerToggle.addEventListener('click', onClickHeaderToggle);
})();
