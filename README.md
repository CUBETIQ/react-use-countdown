# React Countdown Hook

[![Build Status](https://dci.osa.cubetiqs.com/api/badges/CUBETIQ/react-use-countdown/status.svg)](https://dci.osa.cubetiqs.com/CUBETIQ/react-use-countdown)

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
// import the countdown hook here
import { useCountdown } from 'cubetiq-react-use-countdown';

const App = () => {
    const { timeleft, start } = useCountdown({
        step: 1000,
    });

    return (
        <div>
            <button onClick={() => start(10000)}>Start Countdown</button>
            <h1>Time left: {timeleft}</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
```

### Contributors
Project's repository: [React Countdown](https://git.cubetiqs.com/CUBETIQ/react-use-countdown.git)
- [@s.long](https://git.cubetiqs.com/s.long)
- [@sombochea](https://git.cubetiqs.com/sombochea)
- [@cubetiq](https://git.cubetiqs.com/CUBETIQ)