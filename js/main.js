


const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabs__panel');
const elsTabLink = document.querySelectorAll('.js-tab-link');

function deactivateTabsItem() {
     elsTabsItem.forEach(function (elTabsItem) {
          elTabsItem.classList.remove('tabs__item--active');
     });
}
function deactivateTabPanels() {
     elsTabsPanel.forEach(function (elTabsPanel) {
          elTabsPanel.classList.remove('tabs__panel--active');
     });
}

elsTabLink.forEach(function (elTabLink) {
     elTabLink.addEventListener('click', function (evt) {
          evt.preventDefault();

          deactivateTabsItem();

          elTabLink.parentElement.classList.add('tabs__item--active');

          deactivateTabPanels();

          const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);

          elTargetPanel.classList.add('tabs__panel--active');
     });
});
