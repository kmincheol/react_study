import { useState } from "react";

function FormPractice() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleClick = (e) => {
        if (name.trim() === "") {
            setMessage("이름을 입력해주세요.");
        } else {
            setMessage(`환영합니다, ${name}님!`);
        }
    };

    return (
        <>
            <input type="text" value={name} onChange={handleChange} />
            <button onClick={handleClick}>제출</button>
            <p>{message}</p>
        </>
    );

}

export default FormPractice;