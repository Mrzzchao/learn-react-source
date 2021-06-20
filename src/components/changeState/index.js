import React, { useState, useRef} from '../../react/packages/react';
import './index.css';

function ChangeState() {
  let [text, setText] = useState('我是原文本')
  let [toggle, setToggle] = useState(true)


  const modifyText = (text) => {
    setTimeout(() => {
      setText('文本改变了')
    }, 1000)
  }
  const switchTag = () => {
    setTimeout(() => {
      setToggle(!toggle)
    }, 1000)
  }
  return (
    <div className="changeState">
      <div>{text}</div>
      <button onClick={modifyText}>修改文本</button>

      <div>
        {
          toggle ? (
            <div>我是div标签</div>
          ) : (
            <p>我是p标签</p>
          )
        }
      </div>
      <button onClick={switchTag}>修改列表</button>

    </div>
  );
}

export default ChangeState;
