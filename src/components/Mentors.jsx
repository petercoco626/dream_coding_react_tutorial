import React, { useState } from 'react';

export default function Mentors() {
  const [person, setPerson] = useState({
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
  });
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
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          if (person.mentors.find((mentor) => mentor.name === prev) === undefined) {
            alert('입력하신 이름름의 멘토는 없습니다.');
            return;
          }

          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          current &&
            setPerson((person) => ({
              ...person,
              mentors: person.mentors.map((mentor) => {
                if (mentor.name === prev) {
                  // mentor.name = current;
                  return { ...mentor, name: current };
                  console.log('동일한 이름이 존재');
                }
                return mentor;
              }),
            }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>
    </div>
  );
}
