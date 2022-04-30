import React, {useEffect} from 'react';
import { useScript } from "./hooks";
import './App.css';
import PickedView from './components/PickedView';
import {Route, Routes} from 'react-router-dom';
import PickView from './components/PickView';

declare global {
  interface Window {
    Kakao: any; // 👈️ turn off type checking
  }
}

function App() {
  // kakao SDK import하기
	const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	
	// kakao sdk 초기화하기
	// status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
	useEffect(() => {
		if (status === "ready" && window.Kakao) {
			// 중복 initialization 방지
			if (!window.Kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				window.Kakao.init("f3bd6c6b6a57f96ccdad8ea9a6f36a20");
			}
		}
	}, [status]);

  return (
    <Routes>
      <Route path="/" element={<PickView/>} />
      <Route path="/picked" element={<PickedView/>} />
    </Routes>
  );
}

export default App;
