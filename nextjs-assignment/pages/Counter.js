import React from "react";

const Counter = ({color, increment}) => {
    const [count, setCount] = React.useState(0);

    const increment_counter = () => {
        if (count >= 10) {
            setCount((prev) => 0);
            return;
        }

        setCount((prev) => prev + increment);
    }

    return (
        <div style={{backgroundColor: color}}>
            <h1>{count}</h1>
            <button onClick={increment_counter}>{`Increment by ${increment}`}</button>
        </div>
    )
}

export default Counter