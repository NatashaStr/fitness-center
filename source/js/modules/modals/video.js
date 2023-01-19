const videoEnabled = () => {
  const video = document.querySelector('.intro__video-wrapper');

  function createIframe() {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
    iframe.classList.add('intro__image-smallgym');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');

    return iframe;
  }

  if (video) {
    const link = document.querySelector('.intro__video-link');
    const button = document.querySelector('.intro__button');
    const borderButton = document.querySelector('.intro__border-button');

    link.removeAttribute('href');

    video.addEventListener('click', () => {
      const iframe = createIframe();

      link.remove();
      button.remove();
      borderButton.remove();
      video.append(iframe);
    });
  }
};

export {videoEnabled};
