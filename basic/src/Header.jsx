import './Header.css';
// 컴포넌트 생성
function  Header(){
    let num1 = 5;
    let num2 = 3;
    const greeting = '안녕하세요, ';
    const react = '리액트';
    const isLogin = false;
    return(
        <>
            <header>
                <h1 style={{backgroundColor:'yellow', color:'red'}}>title</h1>
                <p style={{border:'1px solid #000'}}>숫자 5에서 3을 뺀 결과 : {num1-num2}</p>
                <p style={{fontSize:'2rem', fontWeight:'600'}}>안녕하세요, 리액트 출력 결과 : {greeting+react}</p>
                <p>{isLogin ? '로그인 성공' : '로그인 필요'}</p>
            </header>
        </>
    )
}

// 다른 컴포넌트에서 해당 Test 컴포넌트 사용 가능하도록 내보내기 설정
export default Header;