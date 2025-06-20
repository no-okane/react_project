import Test from "./Test.jsx";

function App() {
  const greeting = "hello react";
  const num = 1;
  const boolA = true ;
  const boolB = false ;
  return (
    <>
    <Test />
      <h1>리액트 기초{num}</h1>
      <h2>{greeting+num}</h2>
      <p>리액트는 jsx 문법을<br /> 먼저 익혀야 함</p>
      <p>리액트는 node js 필요없음</p>
      <p>위 문장은 {boolA && boolB ? '참' : '거짓'}이다.</p>
      <input />
      {/* 동일 jsx 파일 내에 작성된 컴포넌트 불러오기 */}
      {/* 동일 jsx 파일이므로 import 필요 없음 */}
      <Footer />
    </>
  )
}

export default App

// 자식 컴포넌트 footer
function Footer (){
  return(
    <footer>
      <p>회사소개 이용약관 고객센터 오시는길</p>
    </footer>
  )
}