import { useState } from "react";
import memoStyle from '../assets/memo.module.css';

function MemoInput() {
    const [content, setContent] = useState("");

    const changeContent = (e) => {
        setContent(e.target.value);
    }

    const saveEvent = () => {
        console.log(content);
        setContent("");
    }

    return (
        <>
            <div className={memoStyle.d_flex}>
                <input type="text" placeholder="내용" onChange={changeContent}/>
                <button className={memoStyle.save_btn} onClick={saveEvent}>메모저장</button>
            </div>
        </>
    );
}

export default MemoInput;