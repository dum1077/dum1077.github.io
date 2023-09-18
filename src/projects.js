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
  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.target.classList.add('category--selected');
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

// categories.forEach(category => {
//   category.addEventListener('click', () => {
//     categories.forEach(c => c.classList.remove('category--selected'));
//     category.classList.add('category--selected');
//   });
// });

// front.addEventListener('click', () => {
//   if (front.className === 'category category--selected') {
//     front.classList.add('project__front');
//   }
// })
//
// back.addEventListener('click', () => {
//   if (back.className === 'category category--selected') {
//     back.classList.add('project__back');
//   }
// })
// HTML 요소들을 가져옵니다.
//const categories = document.querySelectorAll('.category');
// const projects = document.querySelectorAll('.project');
//
// // 각 버튼에 대한 클릭 이벤트 리스너를 등록합니다.
// categories.forEach(category => {
//   category.addEventListener('click', () => {
//     // 선택된 버튼에 'category--selected' 클래스를 추가합니다.
//     categories.forEach(c => c.classList.remove('category--selected'));
//     category.classList.add('category--selected');
//
//     // 선택된 카테고리를 확인합니다.
//     const selectedCategory = category.getAttribute('id');
//
//     // 모든 프로젝트를 숨깁니다.
//     projects.forEach(project => {
//       project.style.display = 'none';
//     });
//
//     // 선택된 카테고리에 해당하는 프로젝트만 표시합니다.
//     if (selectedCategory === 'all') {
//       projects.forEach(project => {
//         project.style.display = 'block';
//       });
//     } else {
//       projects.forEach(project => {
//         if (project.classList.contains(selectedCategory)) {
//           project.style.display = 'block';
//         }
//       });
//     }
//   });
// });
//
// categories.forEach(category => {
//   category.addEventListener('click', () => {
//     // ...
//
//     // 선택된 카테고리에 해당하는 프로젝트만 표시합니다.
//     if (selectedCategory === 'all') {
//       projects.forEach(project => {
//         project.classList.add('show'); // 애니메이션 클래스 추가
//       });
//     } else {
//       projects.forEach(project => {
//         if (project.classList.contains(selectedCategory)) {
//           project.classList.add('show'); // 애니메이션 클래스 추가
//         } else {
//           project.classList.remove('show'); // 다른 카테고리의 프로젝트는 숨깁니다.
//         }
//       });
//     }
//   });
// });



// 카테고리 클릭시 클릭된 카테고리가 가지고 있는 타입에 따라
// 프로젝트마다 고유한 정보들을 가지고 있어서
// 그것에 맞게 필터링 하기.