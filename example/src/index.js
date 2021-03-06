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
