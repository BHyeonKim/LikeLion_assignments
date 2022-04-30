//querySelector : 구체적인 그룹과 일치하는 첫번째 엘리먼트 반환
//getElementById : id를 통해 엘리먼트 반환
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//문자열을 할당할 때는 대문자 변수명을 권장
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {

  //이름을 제출했을때 새로고침을 방지
  event.preventDefault();

  //'js classList'를 참고하여 loginForm에 hidden class를 추가하기
  loginForm.classList.add(HIDDEN_CLASSNAME);

  //loginInput의 값을 username이라는 변수에 할당
  const username = loginInput.value;

  //'localStorage'를 참고하여 값 추가하기
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function deleteSubmit(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintGreetings(username) {
  
  //유저의 이름을 받은 후, id='greeting'을 가지고 있는 h1 안에 작성
  greeting.innerText = `Hello ${username}`;

  //'js classList'를 참고하여 greeting에 hidden class를 삭제하기
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//localStorage에 있는 값을 불러와  savedUsername에 할당
const savedUsername = localStorage.getItem(USERNAME_KEY);

//localStorage에 저장되어 있는 값이 없다면 -> localStorage에 값을 삭제하여 저장되어 있는 값을 없앤다면
if (savedUsername === null) {

  //숨겨놨던 loginForm 다시 보여줘서 이름을 입력 받을 수 있도록 준비
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  //제출시에 onLoginSubmit() 실행
  //여기서 중요한 것은 onLoginSubmit를 통해 함수를 호출했다는 것인데 submit을 했을 때 함수가 실행되기를 원하기 때문에 ()를 넣지 않은 것입니다.
  //onLoginSubmit() 이렇게 호출하면 조건 상관 없이 즉시 실행됩니다.
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
