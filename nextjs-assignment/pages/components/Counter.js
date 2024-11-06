import React from "react";

const Counter = ({ color, increment }) => {
    const [count, setCount] = React.useState(0);

    const increment_counter = () => {
        if (count >= 10) {
            setCount(0);
            return;
        }
        setCount((prev) => prev + increment);
    };

    const styles = {
        container: {
            backgroundColor: color,
            padding: '20px',
            borderRadius: '8px',
            display: 'inline-block',
            textAlign: 'center',
            margin: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        button: {
            marginTop: '10px',
            padding: '8px 12px',
            fontSize: '14px',
            backgroundColor: '#333',
            border: 'none',
            borderRadius: '4px',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.count}>{count}</h1>
            <button
                style={styles.button}
                onClick={increment_counter}
            >
                {`Increment by ${increment}`}
            </button>
        </div>
    );
};

export default Counter;