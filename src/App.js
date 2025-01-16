/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let a={color:'blue', fontSize: '30px'};
  let posts='강남';

  function 함수(){
    return 100
  }

  let [글제목, 글제목변경] = useState(['aaa','bbb','ccc']);
  function 제목변경(){
      var newArray =[...글제목];
      newArray[0]='여자코트 추천';
      글제목변경(newArray);
      //글제목변경(['AAA','bbb','ccc']);
  }
  let [숫자,숫자변경] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <div style={a}>개발 Blog</div>
      </div>
      {/* <img src={logo}></img> */}
      {/* <h4>{ 함수() }</h4> */}
      <div className="list">
        <h3>{posts}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[0]} <span onClick={()=>{숫자변경(숫자+1)}}>👍</span>{숫자}</h3>
        <button onClick={ 제목변경}>버튼</button>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
      
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

//Component 만드는 법
function Modal(){
  return(
    <div>1</div>
  )
}

export default App;
