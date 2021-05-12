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
    let tmp=[...todo];
    if(tmp.indexOf(val)>=0) {
      tmp.splice(tmp.indexOf(val),1);
      setTodo(tmp);
    }
  };
  const addDone = (val) => {
    setDone([...done, val]);
    delTodo(val);
  };
  const delDone = (val) => {
    if(done.indexOf(val)<0) return;
    else {
      let tmp=[...done];
      tmp.splice(tmp.indexOf(val), 1);
      setDone(tmp);
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
