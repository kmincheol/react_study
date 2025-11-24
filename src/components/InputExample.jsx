import { useState } from "react";

function InputExample() {
    const [value, setValue] = useState("");

    const changeHandler = (e) => {
        setValue(e.target.value)
    };

    return (
        <>
            <input type="text" value={value} onChange={changeHandler} />
            <p>입력한 값 : {value}</p>
        </>
    );
}

export default InputExample;