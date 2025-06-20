import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('wrap')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* main.jsx는 index.html에 최종 연결하는 렌더링 import위주로 연결
실제 웹앱 제작을 위해 사용하는 파일은 App.jsx부터 시작해서 컴포넌트로 이루어짐 */