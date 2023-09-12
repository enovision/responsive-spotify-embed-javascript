window.addEventListener('load', resizeIFrames);
window.addEventListener('resize', resizeIFrames);

function resizeIFrames() {
  var iframes = document.querySelectorAll('iframe[src*="open.spotify.com"]');

  iframes.forEach(function (iframe) {
    iframe.style.width = getComputedStyle(iframe.parentElement).width
    iframe.style.height = '500px'
    iframe.classList.remove('loaded');

    iframe.addEventListener('load', function () {
      iframe.classList.add('loaded');
    });
  });
}
