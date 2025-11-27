import Button from "./Button";
import style from '../assets/memo.module.css';

function MemoElem({memo, index, remove}) {
    return (
        <li className="memo_elem">
            {memo}
            <button onClick={() => remove(index)}>삭제</button>
        </li>
    );
}

export default MemoElem;