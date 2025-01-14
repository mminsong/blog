import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let a={color:'blue', fontSize: '30px'};
  let posts='강남';

  function 함수(){
    return 100
  }

  let [글제목, 글제목변경] = useState(['남자코트추천','여자코트추천']);

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
        <h3>{글제목[0]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
