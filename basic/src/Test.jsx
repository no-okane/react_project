import Header from "./Header.jsx";
import './Test.css';

// 컴포넌트 생성
function  Test(){
    return(
        <>
            <Header />
                <Aside />
            <h1>Test 컴포넌트</h1>
        </>
    )
}

// 다른 컴포넌트에서 해당 Test 컴포넌트 사용 가능하도록 내보내기 설정
export default Test;

// 자식 컴포넌트 Aside
function Aside (){
    return(
        <>
            <aside>
                <ul>
                    <li>메뉴1</li>
                    <li>메뉴2</li>
                    <li>메뉴3</li>
                </ul>
                <img src="#" alt="이미지태그" />
            </aside>
        </>
    )
}