import React from 'react';
import Timeout = NodeJS.Timeout;

interface useCountdownOptions {
    now?: () => Date;
    onEnd?: () => void;
    onCount?: (timeLeft: number) => void;
    step?: number; // Millisecond
}

interface CountdownHookResult {
    timeleft: number;
    start: (timeLeft: number) => void;
}

const DEFAULT_OPTIONS: useCountdownOptions = {
    step: 1000,
};

function useCountdown(options?: useCountdownOptions): CountdownHookResult {
    const [timeleft, setTimeleft] = React.useState<number | undefined>();

    const [targetDatetime, setTargetDatetime] = React.useState<Date>();

    const { step, onCount, onEnd } = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    const start = (countAsM: number) => {
        setTimeleft(countAsM);
    };
    let varTimeout: number | null = null;

    React.useEffect(() => {
        return () => clearTimeout(varTimeout!);
    }, []);

    React.useEffect(() => {
        if (timeleft === undefined) {
            return;
        }

        const newTimeleft = timeleft - step!;

        if (newTimeleft < 0) {
            setTimeleft(0);
            onEnd?.();
        } else {
            onCount?.(timeleft);
            varTimeout = setTimeout(() => {
                setTimeleft(newTimeleft);
            }, step);
        }
    }, [timeleft]);

    const result: CountdownHookResult = {
        timeleft: timeleft || 0,
        start,
    };

    return result;
}

export default useCountdown;
