import { useState, useEffect } from "react";

export default function CountDown() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const Count = count < 0 ? "Gratulerer med dagen!" : count;

    return (
        <h2>{Count}</h2>
    );
}