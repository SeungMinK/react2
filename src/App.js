import React, {useState} from 'react';//react의 useSatae 함수를 사용하겟다
import logoTest from './logo.svg';
import './App.css';


  /*  
      1. 데이터 바인딩 핵심 "{}"
      2. Style 직접 지정시에도 "{}"" 사용해야함  
      3. "..." deepcCopy 방법임, = 으로 카피할경우 참조변수가 생성됨(Array,Object)
      4. state 값 변경은 변경함수를 사용해야함(state에 직접 접근X)
      5. deepCopy로 값을 복사해서 수정 후, 변경함수에 적용하는 방법이 있음
  ES6의 신 문법,destructuring 문법  
  var [num1,num2] = [10,100]; // a에는 10 b에는 100을 넣는다
  */




function App() {

  let contents = '내용';
  let setting ={color : 'yellow',fontSize : '30px'};
  let [title,titleChange] = useState(['남자 코트 추천','남자 신발 추천 ','남자 바지 추천']);  
  let [gender,genderChange] = useState('male');
  let [like,likeChange] =useState(0);
  let [model,modelChange] = useState(false);//UI 온오프 스위치
  let [state,stateChange]=useState(['OFF']);

  function changeTitleGender(){
    if(gender=='male'){
      titleChange(title=['여성 코트 추천','여성 신발 추천','여성 바지 추천'])
      genderChange('female')
    }
    else{
      titleChange(title=['남자 코트 추천','남자 신발 추천 ','남자 바지 추천'])
      genderChange('male')
    }
    
  }

  function switichUI(){
    if(model==false){
      stateChange('ON')
      modelChange(true);
    }
    else{
      stateChange('OFF')
      modelChange(false)
    }
  
  }
  
  return (
    <div className="App">
      
      <div className="black-nav">
        <img src= {logoTest} style={{width:'10%',height:'10%'}}/> 
        <div style={setting}> 개발 연습 Blog</div>
      </div>

      <div className="list">
        <h4>{title[0]} <span onClick={()=>{likeChange(like+1)}}>👍</span> {like}</h4>
        <h3>{contents}</h3>
        <p>6월 21일</p>
        <hr/>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <h3>{contents}</h3>
        <p>6월 22일</p>
        <hr/>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <h3>{contents}</h3>
        <p>6월 23일</p>
        <hr/>
      </div>

      <button onClick={changeTitleGender}>성별 전환 버튼</button>
      <button onClick={switichUI}>{state}</button>
    {
        model == true  
        ? <Model/> 
        : null // 텅빈 html 보여줌, 관습
    }
    </div>


  );
}

//Component
function Model(){
  return(  
  <div className="model">
  <h2>제목</h2>
  <p>날짜</p>
  <p>상세내용</p>
  </div>
)

}

export default App;
