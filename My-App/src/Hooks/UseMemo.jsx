import React, { useMemo, useState } from "react";

// const slowFunction = (num) => {
//     for (let slow = 0; slow < 1000000000; slow++) {}
//     return num * 2;
// };

const UseMemoExample = () => {
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);

    const styling = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };

    // const doublingNumber = useMemo(() => slowFunction(num), [num]);

    return (
        <div style={styling}>
            <h1>This page is meant for useMemo</h1>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((currTheme) => !currTheme)}>
                Change Theme
            </button>
            <h2>The number is {num}</h2>
        </div>
    );
};

export default UseMemoExample;
