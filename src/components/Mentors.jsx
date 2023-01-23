import React, { useReducer, useState } from 'react';
import { personReducer } from '../reducer/person-reducer';

export default function Mentors() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  // const [person, setPerson] = useState();

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    if (person.mentors.find((mentor) => mentor.name === prev) === undefined) {
      alert('입력하신 이름름의 멘토는 없습니다.');
      return;
    }

    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    current && dispatch({ type: 'updated', person, prev });
  };

  const handleAdd = () => {
    const name = prompt(`추가할 멘토의 이름을 입력해주세요.`);
    const title = prompt(`추가할 멘토의 제목을 입력해주세요.`);

    if (name && title) {
      dispatch({ type: 'added', name, title });
    }
  };
  const handleDelete = () => {
    const name = prompt(`삭제할 멘토의 이름을 입력해주세요.`);
    name && dispatch({ type: 'deleted', name });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
