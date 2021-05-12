import React, {useState} from 'react';
import styled from 'styled-components';

/**
 * AddItem 컴포넌트: 항목 추가를 위한 UI를 제공합니다.
 * ### prop 정의
 * - onInput: 추가 버튼 클릭시 핸들러 (`(string) => any`)
 */
const AddInput = (props) => {
  const [value, setValue] = useState('');
  const handleClick = () => {
    if (value.trim() === '') return;
    props.onInput(value);
  }
  return (
    <Container>
      <input
        type="text" 
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>넣을게</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 80px;
  flex-direction: row;
  input {
    grid-column: 1 / 2;
  }
  button {
    grid-column: 2 / 3;
  }
`;

export default AddInput;
