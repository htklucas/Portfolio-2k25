window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }