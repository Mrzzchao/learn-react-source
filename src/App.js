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
import SuperPlayer from './components/superPlayer';

function App() {
  return (
    <RecoilRoot>
      {/* <RecoilTest /> */}
      {/* <ChangeState /> */}
      <SuperPlayer></SuperPlayer>
    </RecoilRoot>
  );
}

export default App;