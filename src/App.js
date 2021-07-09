import React, { useState } from 'react';//react의 useSatae 함수를 사용
import './App.css';


/*  
    ===================Summary========================
    1. 데이터 바인딩 핵심 "{}"
    2. Style 직접 지정시에도 "{}"" 사용해야함  
    3. "..." deepcCopy 방법임, = 으로 카피할경우 참조변수가 생성됨(Array,Object)
    4. state 값 변경은 변경함수를 사용해야함(state에 직접 접근X)
    5. deepCopy로 값을 복사해서 수정 후, 변경함수에 적용하는 방법이 있음
    6. {}안에는 변수,함수를 쓸 수 있음
    7. var [num1,num2] = [10,100]; // a에는 10 b에는 100을 넣는다
    8. var(변수 선언전에 호출 가능, 값 지정 안해줘도됨)
    9. let(변수 선언전에 호출 불가능, 값 지정 안해줘도됨), const(변수 선언전에 호출 불가능, 값 지정 꼭 해줘야됨)
    10. es6 버전부터 새로 생긴 let과 const임. 불안정한 var보다 let과 const 사용을 권장함
    11. array내의 모든 데이터에 똑같은 작업을 시켜주고싶을때 .map()을 사용함, 유사 반복문
    12. Componet의 경우 명명규칙은 대문자로 시작해야함
    13. Props를 사용하여, State 넘기기(파라미터 개념)
    */




function App() {

  let contents = '내용';
  let setting = { color: 'yellow', fontSize: '30px' };
  let [title, titleChange] = useState(['남자 코트 추천', '남자 신발 추천 ', '남자 바지 추천']);
  let [like, likeChange] = useState([0, 0, 0]);
  let [gender, genderChange] = useState('male');
  let [model, modelChange] = useState(false);//UI 온오프 스위치
  let [state, stateChange] = useState(['OFF']);//버튼 상태 표시
  let [clickTitle,clickTitleChange] = useState(0); 


  function changeTitleGender() {
    if (gender === 'male') {
      titleChange(title = ['여성 코트 추천', '여성 신발 추천', '여성 바지 추천'])
      genderChange('female')
    }
    else {
      titleChange(title = ['남자 코트 추천', '남자 신발 추천 ', '남자 바지 추천'])
      genderChange('male')
    }

  }

  function switichUI() {
    if (model === false) {
      stateChange('ON')
      modelChange(true);
    }
    else {
      stateChange('OFF')
      modelChange(false)
    }

  }
  
 

  return (
    <div className="App">

      <div className="black-nav">
        <div style={setting}> 개발 연습 Blog</div>
      </div>
      <div>
        {
          title.map(function (text,i) {//map에서 두번째 파라미터는 반복횟수를 가르키는 변수가 됨
            return (
              <div className="list">
                <h4 onClick= { () => {  clickTitleChange(i)}} >{text}<span onClick={() => { likeChange(like[0] + 1) }}>👍{like}</span></h4>
                <h3>{contents}</h3>
                <p>6월 23일</p>
                <hr />
              </div>
            )
          }
          )
        }
      </div>
  
      <div>
        <button onClick={changeTitleGender}>성별 전환 버튼</button>
        <button onClick={switichUI}>{state}</button>
        <button onClick= { () => {  clickTitleChange(0)}}>버튼1</button>
        <button onClick= { () => {  clickTitleChange(1)}}>버튼2</button>
        <button onClick= { () => {  clickTitleChange(2)}}>버튼3</button>

        </div>
      {
      model === true
        ? <Model title={title} clickTitle={clickTitle} />//state 보내기
        : null // 텅빈 html 보여줌, Js 관습
       
    }
    </div>
  

  );
}


//Component
function Model(props) {//전달받은 props가 여기에 전달되있음
  return (
    <div className="model">
      <h2>{props.title[props.clickTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )

}

export default App;
