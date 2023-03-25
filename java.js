var mainNav = document.getElementById('mainNav')
var logoImg = document.getElementById('logoImg')
var hero = document.getElementById('hero')
var heroActive = false // To enhance performance, I chose this global variable to track the navbar changes.
var vid = document.getElementById("volume");
vid.volume = 0.2;
var vid = document.getElementById("volume_madara");
vid.volume = 0.3;
window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    if (!heroActive) {
      heroActive = true
      mainNav.classList.add('bg-dark')
      if(window.innerWidth < 956) return;
      logoImg.className = 'consize'
    }
  } else {
    if (heroActive) {
      heroActive = false
      mainNav.classList.remove('bg-dark')
      if(window.innerWidth < 956) return;
      logoImg.className = ''
    }
  }
})