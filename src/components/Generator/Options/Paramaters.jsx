import React from 'react';
import './Paramaters.css';

const PARAMETERS_DATA = [
    {
        name: "uppercase",
        label: "Uppercase",
    },
    {
        name: "lowercase",
        label: "Lowercase",
    },
    {
        name: "numbers",
        label: "Numbers",
    },
    {
        name: "symbols",
        label: "Symbols",
    },
];

const Parameters = ({ parameters, setParameters }) => {
    const handleOnChange = (event, prop) => {
        const auxObject = {};
        auxObject[prop] = event.target.checked;
        setParameters({ ...parameters, ...auxObject });
    };

    return (
        <div className="parameters-container">
            <ul className="parameters-list">
                {PARAMETERS_DATA.map(parameter => {
                    return (
                        <li key={parameter.name} className="parameter-item">
                            <input
                                onChange={(e) => handleOnChange(e, parameter.name)}
                                type="checkbox"
                                name={parameter.name}
                                id={parameter.name}
                                defaultChecked={true}
                            />
                            <label htmlFor={parameter.name}>{parameter.label}</label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Parameters;
