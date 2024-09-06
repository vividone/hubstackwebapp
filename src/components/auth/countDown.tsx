"use client"
import { useEffect } from "react";

type CountdwnProps = {
    count: number;
    setCount: (aug: number) => void;
}

export default function Countdown({ count, setCount }: CountdwnProps) {

    useEffect(() => {
        // create a interval and get the id
        if (count > 0) {
            const myInterval = setInterval(() => {
                setCount(count - 1);
            }, 1000);
            
            // clear out the interval using the id when unmounting the component
            return () => clearInterval(myInterval);
        }
      }, [count, setCount]);

    return (
        <span>
            {count}
        </span>
    )
}