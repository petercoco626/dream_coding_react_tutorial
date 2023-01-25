import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';
import { useEffect, useState } from 'react';
import Counter from './components/Counter';
import Products from './components/Products';
import Pointer from './components/Pointer';
import Mentors from './components/Mentors';
import AppFrom from './components/AppFrom';
import AppWrap from './components/AppWrap';

function App() {
  const [avatars, setAvatars] = useState([]);

  const [totalCount, setTotalCount] = useState(0);
  // const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleClickCounter = () => setTotalCount((prev) => prev + 1);
  const handleClick = (event) => {
    console.log(event);
  };

  useEffect(() => {
    fetch('data/avatars.json')
      .then((res) => res.json())
      .then((res) => {
        setAvatars(res);
        console.log('get avatar datas');
      });
    return () => {
      console.log('clean avatar datas');
    };
  }, []);

  // useEffect(() => {
  //   const handleWindowMouseMove = (event) => {
  //     setCoords({
  //       x: event.clientX,
  //       y: event.clientY,
  //     });
  //   };
  //   window.addEventListener('mousemove', handleWindowMouseMove);
  //   return () => {
  //     window.removeEventListener('mousemove', handleWindowMouseMove);
  //   };
  // }, []);

  return (
    <>
      {/** 함수의 원형을 전달해야지 함수의 실행 결과를 전달하면 안된다 handleClick() : X  */}
      {/* <button onClick={handleClick}>버튼</button>
      <Avatar image={avatars[0]?.image} isNew={avatars[0]?.isNew} />
      {avatars?.map((avatar) => (
        <Profile
          key={avatar.image}
          image={avatar.image}
          name={avatar.name}
          title={avatar.title}
          isNew={avatar.isNew}
        />
      ))} */}
      {/* <div className="total-count">
        {totalCount > 10 ? `Total Count : ${totalCount} !!!!` : `Total Count : ${totalCount}`}
      </div>
      <div className="couter-wrap">
        <Counter totalCount={totalCount} handleClickCounter={handleClickCounter} />
        <Counter totalCount={totalCount} handleClickCounter={handleClickCounter} />
      </div> */}
      {/* <Products /> */}
      {/* <Pointer /> */}
      {/* <Mentors /> */}
      {/* <AppFrom /> */}
      {<AppWrap />}
    </>
  );
}

export default App;
