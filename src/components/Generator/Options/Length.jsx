import React from 'react';
import './Length.css';

const Length = ({ stringValueLength, setStringValueLength }) => {
    return (
        <div className="input-container">
            <label className="label">
                <span className="length-value">{stringValueLength}</span>
            </label>
            <input
                type="range"
                onChange={(e) => setStringValueLength(e.target.value)}
                min={8}
                max={64}
                step={1}
                value={stringValueLength}
                className="slider"
            />
        </div>
    );
}

export default Length;
