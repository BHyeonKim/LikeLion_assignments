import React, { useRef, useState } from 'react';

function InputPractice() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();

  const { name, nickname } = inputs; // 구조분해할당이죠?

  function onChange(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs, // spread 문법이죠?
      [name]: value, // name에 해당하는 key의 값을 value로 설정합니다
    });
  }

  function onReset() {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  }

  return (
    <div>
      <input
        name='name'
        placeholder='이름'
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name='nickname'
        placeholder='닉네임'
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputPractice;
