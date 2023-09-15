// Header 에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll',  () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});


// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', function () {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});


// Arrow up 버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
const arrowUpHeight = arrowUp.offsetHeight;

// if (window.scrollY === 0) {
//   arrowUp.style.opacity = 0;
// }

document.addEventListener('scroll', () => {
  //arrowUp.style.opacity = window.scrollY / arrowUpHeight - 2;
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
})
