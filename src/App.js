import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import ChangeState from './components/changeState';
import RecoilTest from './components/recoilTest';
function App() {
  return (
    <RecoilRoot>
      <RecoilTest />
      {/* <ChangeState /> */}
    </RecoilRoot>
  );
}

export default App;