import React, { useState, useRef} from '../../react/packages/react';
import './index.css';
import { useData } from './state';

function RecoilTest() {
    const [value, setValue] = useData()
    return <div>{value}</div>
}

export default RecoilTest;
