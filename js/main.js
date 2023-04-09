


const elsTabsItem = document.querySelectorAll('.tabs__item'),
     elsTabsPanel = document.querySelectorAll('.tabs__panel'),
     elsTabLink = document.querySelectorAll('.js-tab-link'),
     elsAccordionItem = document.querySelectorAll('.accordion__item'),
     elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');


function deactivateTabsItem() {
     elsTabsItem.forEach(function (elTabsItem) {
          elTabsItem.classList.remove('tabs__item--active');
     });
}
function closeAccordionItems () {
     elsAccordionItem.forEach(function (elsAccordionItem) {
          elsAccordionItem.classList.remove('accordion__item--open');
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

          // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
          const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
          elTargetPanel.classList.add('tabs__panel--active');
     });
});


elsAccordionItemToggler.forEach(function (elsAccordionItemToggler) {
     elsAccordionItemToggler.addEventListener('click', function () {
          closeAccordionItems();

          elsAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
     });
});