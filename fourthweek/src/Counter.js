import { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  function onIncrease() {
    setNumber((prevNumber) => prevNumber + 1); // 이전 값을 어떻게 다룰지에 대한 함수를 전달
  }

  function onDecrease() {
    setNumber((prevNumber) => prevNumber - 1);
  }

  return (
    <div>
      {/* 정의된 number라는 변수(상태)를 화면에 렌더링 */}
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
