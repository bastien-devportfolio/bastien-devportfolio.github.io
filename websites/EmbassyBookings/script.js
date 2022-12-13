var swiper = new Swiper(".swiper-container", {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  parallax: true,
  speed: 600,
  autoplay: 3500,
  loop: true,
  grabCursor: true
});

if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('sw.js')
  .then(function(swReg) {
    console.log('Service Worker is registered', swReg);

    swRegistration = swReg;
  })
  .catch(function(error) {
    console.error('Service Worker Error', error);
  });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}