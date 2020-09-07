interface useCountdownOptions {
    now?: () => Date;
    onEnd?: () => void;
    onCount?: (timeLeft: number) => void;
    step?: number;
}
interface CountdownHookResult {
    timeleft: number;
    start: (timeLeft: number) => void;
}
declare function useCountdown(options?: useCountdownOptions): CountdownHookResult;
export default useCountdown;
