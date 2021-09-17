import React, { useEffect } from 'react';
import SuperPlayer from '@tencent/super-player'
import './index.css';

function Demo() {
    useEffect(() => {
        console.log('Demo====')
        const player = new SuperPlayer({
            container: '#container'
          })
          player.play({url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'})
    })
    return (
        <div id="container">222</div>
    )
}

export default Demo;
