import Button from "./Button";
import style from '../assets/memo.module.css';

function MemoElem({memo}) {
    return (
        <li>
            {memo}
        </li>
    );
}

export default MemoElem;