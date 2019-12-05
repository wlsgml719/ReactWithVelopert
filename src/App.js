import React, { useRef, useState } from 'react';
// 여러개의 상태를 관리할 때는 useState를 가져와서 객체형태로 사용한다.
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';


function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
      {
          id      : 1,
          username    : 'jinhee',
          email   : 'jinhee@email.com',
          online  : true
      },
      { 
          id      : 2,
          username    : 'seoyoung',
          email   : 'seoyoung@email.com',
          online  : false
      },
      {
          id      : 3,
          username    : 'boryung',
          email   : 'boryeng@email.com',
          online  : false
      }
  ]);

  const nextId    = useRef(4);
  const onCreate  = () => {
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };
  
  const onToggle = id => {
    setUsers(users.map(user => 
      user.id === id
      ? { ...user, online: !user.online }
      : user
    ))
  }

  return (
    // <Wrapper>
    //     <Hello color="white" isSpecial={true}/>
    // </Wrapper>
    // <Counter/>
    // <InputSample/>
    // <UserList/>
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
