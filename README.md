# aniujs
迷你轻量版React框架

## 安装
```sh
yarn add aniujs
```
or

```sh
npm i aniujs --save
```

## 使用
```js
import React, { render, useState, useCallback } from 'aniujs';

function App() {
  const [text, setText] = useState('aniujs');
  
  const onClick = useCallback(() => {
    setText(text === 'aniujs' ? 'react' : 'aniujs');
  }, []);
  
  return (
    <div onClick={onClick}>{text}</div>
  );
}

render(<App />, document.getElementById('#app'));
```
