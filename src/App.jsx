import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const avatars = [
    {
      image:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'name 1',
      title: 'frontend 1',
      isNew: true,
    },
    {
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
      name: 'name 2',
      title: 'frontend 2',
      isNew: true,
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      name: 'name 3',
      title: 'frontend 3',
      isNew: false,
    },
  ];

  const [totalCount, setTotalCount] = useState(0);

  const handleClickCounter = () => setTotalCount((prev) => prev + 1);
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <>
      {/** 함수의 원형을 전달해야지 함수의 실행 결과를 전달하면 안된다 handleClick() : X  */}
      {/* <button onClick={handleClick}>버튼</button>
      <Avatar image={avatars[0].image} isNew={avatars[0].isNew} />
      {avatars.map((avatar) => (
        <Profile
          key={avatar.image}
          image={avatar.image}
          name={avatar.name}
          title={avatar.title}
          isNew={avatar.isNew}
        />
      ))} */}
      <div className="total-count">
        {totalCount > 10 ? `Total Count : ${totalCount} !!!!` : `Total Count : ${totalCount}`}
      </div>
      <div className="couter-wrap">
        <Counter totalCount={totalCount} handleClickCounter={handleClickCounter} />
        <Counter totalCount={totalCount} handleClickCounter={handleClickCounter} />
      </div>
    </>
  );
}

export default App;
