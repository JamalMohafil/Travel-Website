let closeImgPanel = document.getElementById('close');
let imgPanel = document.querySelector('.img-panel');
let imga = document.querySelector('.img-panel .img-cont img');
let slides = document.querySelectorAll('.swiper .swiper-wrapper .swiper-slide');

slides.forEach(slide => {
  slide.addEventListener('click', (e) => {
     if (e.target.querySelector('img')) {
      console.log('.test');
      imgPanel.classList.add('active');
      imga.src = e.target.querySelector('img').src;
    }
 
  });
});

closeImgPanel.addEventListener('click', () => {
  imgPanel.classList.remove('active');
});


/* Navbar */

const nav = document.querySelector('header nav'),
list = document.querySelector('header nav ul'),
openNav = document.querySelector('.open-nav'),
closeNav = document.querySelector('.close-nav')

openNav.addEventListener('click',()=>{
  nav.classList.toggle('active')
})
closeNav.addEventListener('click',()=>{
  nav.classList.remove('active')
})
document.addEventListener('click', e => {
  if (
    !closeNav.contains(e.target) &&
    !nav.contains(e.target) &&
    !openNav.contains(e.target) &&
    !list.contains(e.target)
  ) {
    nav.classList.remove('active');
  }
});