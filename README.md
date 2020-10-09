# React Countdown Hook

### Installation
```shell script
# NPM
npm i @cubetiq/react-use-countdown

# Yarn
yarn add @cubetiq/react-use-countdown
```

### Example
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { useCountdown } from 'cubetiq-react-use-countdown';

const App = () => {
    const { timeleft, start } = useCountdown();
    return (
        <div>
            <button onClick={() => start(10000)}> Start Countdown </button>
            <h1>Time left: {timeleft}</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
```

### Contributors
Project's repository: [https://git.cubetiqs.com/CUBETIQ/react-use-countdown.git](https://git.cubetiqs.com/CUBETIQ/react-use-countdown.git)
- [@s.long](https://git.cubetiqs.com/s.long)
- [@sombochea](https://git.cubetiqs.com/sombochea)