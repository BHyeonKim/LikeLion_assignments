const IMAGES = [
  './img/cherry-blossom.jpg',
  './img/cherry-blossom2.jpg',
  './img/cherry-blossom3.jpg',
  './img/cherry-blossom4.jpg',
];

// 프로필 이미지를 누르면 이미지 전환
const profileImage = document.getElementById('profile-image');
profileImage.addEventListener('click', () => {
  profileImage.src.replace('http://localhost:3000/', './') ===
  './img/profile.jpg'
    ? (profileImage.src = './img/profile2.jpg')
    : (profileImage.src = './img/profile.jpg');
});

const blossomImage = document.querySelector('.blossom-img');

// 오버레이 오픈 버튼
const openModalBtn = document.querySelector('.open-modal-btn');
const modal = document.querySelector('.modal');
let interval;
openModalBtn.addEventListener('click', () => {
  modal.classList.toggle('is-open');
  modal.classList.toggle('is-closed');

  console.log(blossomImage.src);
  let i = 1;
  interval = setInterval(() => {
    console.log('hi');
    blossomImage.src = IMAGES[i++];
    if (i === 4) {
      i = 1;
    }
  }, 1000);
});

// 오버레이 닫기 버튼
const closeModalBtn = document.querySelector('.close-modal-btn');
closeModalBtn.addEventListener('click', () => {
  modal.classList.toggle('is-open');
  modal.classList.toggle('is-closed');
  clearInterval(interval);
});
