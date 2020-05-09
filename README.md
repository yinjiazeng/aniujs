# react-less
迷你轻量版React框架

## 安装
```sh
yarn add react-less
```
or

```sh
npm i react-less --save
```

## 使用
```js
import React, { render, useState, useCallback } from 'react-less';

function App() {
  const [text, setText] = useState('aniujs');
  
  const onClick = useCallback(() => {
    setText(text === 'aniujs' ? 'react' : 'aniujs');
  }, [text]);
  
  return (
    <div onClick={onClick}>{text}</div>
  );
}

render(<App />, document.getElementById('#app'));
```
