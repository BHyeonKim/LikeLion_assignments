const clock = document.querySelector('h2#clock');

function getClock() {
  //[quiz] 'Date() 생성자'에 대하여 검색하기
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  //[quiz] 값 추가 : 'innerText' vs 'innerHTML' 차이점 찾아보기
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // clock.innerHtml = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
