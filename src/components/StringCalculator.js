import React, { useState } from 'react';
import { add } from '@/utils/stringCalculator';

const StringCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
            setError(null);
        } catch (err) {
            setError(err.message);
            setResult(null);
        }
    };

    return (
        <div>
            <h1>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers"
            />
            <button onClick={handleCalculate}>
                Calculate
            </button>
            {result !== null && <div>Result: {result}</div>}
            {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        </div>
    );
};

export default StringCalculator;
