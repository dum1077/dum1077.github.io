'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }
  //액티브 메뉴를 재설정
  handleActiveSelection(event.target);

  //프로젝트 필터링
  filterProjects(filter);

});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projects.forEach(project => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}

// const io = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     // 관찰 대상이 viewport 안에 들어온 경우 'tada' 클래스를 추가
//     if (entry.intersectionRatio > 0) {
//       entry.target.classList.add('active');
//     }
//     // 그 외의 경우 'tada' 클래스 제거
//     else {
//       entry.target.classList.remove('active');
//     }
//   })
// })

// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.


