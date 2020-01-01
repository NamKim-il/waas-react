# 2일차 과제
> `components/NameInput.jsx`의 텍스트 입력란에 텍스트를 입력하면,
> `console.log`으로 그 값을 콘솔에 출력하도록 `onChanged` 한들러를 만드세요.
```jsx
<input val={val} onChange={a=>{console.log(a.target.value)}}/>
```
> `NameInput` 컴포넌트에서, input 값을 `name`라는 state에 저장하도록 컴포넌트를 수정하세요.
```jsx
const [name, setname] = useState('');

<input val={name} onChange={event=>{console.log(event.target.value),
                                                setname(event.target.value)}}/>
```
> Change 버튼을 누르면 `name`값을 읽어와 '노정훈님 안녕하세요.'와 같이 경고창이 뜨도록 Change 버튼의 onClick 핸들러를 작성하세요.
>> 힌트: Arrow Function
```jsx
<button onClick={event=>{alert(name+'님 안녕하세요.')}}>Change</button>
```