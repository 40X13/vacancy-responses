import {useState} from 'react';

const InputOutput = ({initialValue, name, id, updateVacancy, type = 'text'}) => {

    const [isActive, setISActive] = useState(false);
    const [currentValue, setCurrentValue] = useState(initialValue);

    const handleSetCurrentValue = (name) => {
        setISActive(false);
        updateVacancy({[name]: currentValue}, id);
    };

    return (
        isActive ?
            <input autoFocus
                   type={type}
                   name={name}
                   value={currentValue}
                   onChange={(e) => setCurrentValue(e.currentTarget.value)}
                   onBlur={(e) => handleSetCurrentValue(e.target.name)}
            />
            :
            <span
                onDoubleClick={() => setISActive(true)}
            >{currentValue}
            </span>
    );
};

export default InputOutput;


