import React, { useState, useEffect } from 'react';

interface TimerProps {
    initialMinutes?: number;
    initialSeconds?: number;
    isActive: boolean;
}

const Timer = ({ initialMinutes = 1, initialSeconds = 0, isActive }: TimerProps) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let interval: any;
        if (isActive) {
          interval = setInterval(() => {
            if (seconds > 0) {
              setSeconds(seconds - 1);
            }
            if (seconds === 0) {
              if (minutes === 0) {
                clearInterval(interval);
              } else {
                setMinutes(minutes - 1);
                setSeconds(59);
              }
            }
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds, minutes]);

    return (
        <div>
            {minutes === 0 && seconds === 0
                ? <h4 className="scroll-m-20 text-xl font-semibold p-4 tracking-tight">Time's up!</h4>
                : <h4 className="scroll-m-20 text-xl font-semibold p-4 tracking-tight">
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h4>

            }
        </div>
    );
};

export default Timer;
