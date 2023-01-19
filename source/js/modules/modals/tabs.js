const activateTabs = () => {
  const tabs = document.querySelectorAll('.subscription__tabs-item');
  const tabsContent = document.querySelectorAll('.subscription__cards-wrapper');

  if (tabs) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', (evt) => {

        tabs.forEach((el) => {
          el.classList.remove('subscription__tabs-item--active');
        });

        evt.target.classList.add('subscription__tabs-item--active');

        tabsContent.forEach((el) => {
          el.classList.remove('subscription__cards-wrapper--active');
        });

        if (evt.target.classList.contains('subscription__tabs-item--active') && evt.target.dataset.button === '#tab-1') {
          const content = document.querySelector('#tab-1');
          content.classList.add('subscription__cards-wrapper--active');
        }
        if (evt.target.classList.contains('subscription__tabs-item--active') && evt.target.dataset.button === '#tab-6') {
          const content = document.querySelector('#tab-6');
          content.classList.add('subscription__cards-wrapper--active');
        }
        if (evt.target.classList.contains('subscription__tabs-item--active') && evt.target.dataset.button === '#tab-12') {
          const content = document.querySelector('#tab-12');
          content.classList.add('subscription__cards-wrapper--active');
        }
      });
    }
    );
  }
};

export {activateTabs};
