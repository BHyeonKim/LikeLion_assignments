import React, { useState, useMemo, useRef, useCallback } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  // 기존 값을 조회하지 않으므로 빈배열을 줘도 된다.
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  // number 혹은 list 가 바뀌었을 때만 함수 생성
  // list와 number를 조회하므로 배열에 두 값을 넣어줘야 한다.
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number)); //기존 list에 number를 추가한 배열을 반환
    setList(nextList); // 새로운 배열을 list에 할당
    setNumber(''); // number 값 초기화
    inputEl.current.focus(); // input에 포커스
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
