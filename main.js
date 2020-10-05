(function (window, document) {
  // 전체 영역을 더럽힐 수 있어 구분화 하는 것 / 모듈화
  'use strict';
    
  const $toggles = document.querySelectorAll('.toggle'); // NodeList
  const $toggleBtn = document.getElementById('toggle-btn');

  $toggleBtn.addEventListener('click', function() {
    toggleElements();
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      offElements();
    }
  })

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  function offElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on');
    });
  }
})(window, document)