import React, {useState} from 'react';
import styled from 'styled-components';
import AddInput from './AddInput'
import ListItem from './ListItem'

const Main = () => {
  // 이 state들을 사용하세요
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  const addTodo = (val) => {
    setTodo([...todo, val]);
  };
  const delTodo = (val) => {
    console.log(1);
    console.log(todo);
    setTodo(todo.splice(todo.indexOf(val), 1));
    console.log(todo);
    
  };
  const addDone = (val) => {
    console.log(2);
    setDone([...done, val]);
    if(todo.indexOf(val)<0) return;
    else {
      delTodo(todo.indexOf(val)); 
      console.log(val);
      console.log(todo);
    }
  };
  const delDone = (val) => {
    console.log(3);
    if(done.indexOf(val)<0) return;
    else {
      setDone(done.splice(done.indexOf(val),1));
      console.log(done);
    }
  };
  return (
    <Container>
      <h1>할 일</h1>
      <h2>추가</h2>
      <AddInput onInput={(val)=>{
        addTodo(val);
      }}/>
      <h2>할 일</h2>
      <div>
        {todo.map((val)=>
          
          <ListItem 
            value={val} 
            showComplete = {true}
            onDelete ={()=> delTodo(val)}
            onComplete = {()=> addDone(val)}
            done = {false}
          />
        )}
      </div>
      <h2>끝낸 일</h2>
      <div>
        {done.map((val)=>
          <ListItem value={val} showComplete={false} onDelete={()=>delDone(val)} done={true}/>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  background-color: rgb(250, 250, 250);
  padding: 1rem;
  border-radius: 0.2em;
  h1 {
    margin: 0 0 0.5em 0;
    text-align: center;
  }
  h2 {
    margin: 0.5rem 0;
    border-bottom: 1.5px solid #000;
    padding: 0.5rem 0;
  }
`;


export default Main;
