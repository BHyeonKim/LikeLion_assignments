const images = ['0.jpeg', '1.jpeg', '2.jpeg'];

// chosenImage에 이미지를 랜덤 선언
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

//[quiz] 'append()' vs 'appendChild()' 둘 다 시도해보기
document.body.appendChild(bgImage);
// document.body.append(bgImage);
