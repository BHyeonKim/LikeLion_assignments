import { useEffect, useState } from 'react';

async function getTodo(id) {
  return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (res) => res.json()
  );
}

function Profile() {
  const [id, setId] = useState(1);
  const [todo, setTodo] = useState(null);

  // id가 변경될 때 마다 이펙트 함수가 실행됩니다.
  useEffect(() => {
    getTodo(id).then((data) => setTodo(data));
  }, [id]); // id 를 배열에 넣어줬습니다

  // todo가 null일 땐 로딩중을 렌더링
  if (!todo) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      <div>
        <p>title : {todo.title}</p>
        <p>done : {`${todo.completed}`}</p>
      </div>
      <button onClick={() => setId(id + 1)}>id 변경</button>
    </div>
  );
}

export default Profile;
