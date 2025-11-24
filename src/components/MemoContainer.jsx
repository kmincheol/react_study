import { useState } from 'react';
import MemoInput from './MemoInput';
import Button from './Button';
import MemoElem from './MemoElem';
import style from '../assets/memo.module.css';

function MemoContainer() {
    const [memo, setMemo] = useState('');

    const save = () => {
        if (memo.trim() === '') {
            alert('메모를 입력하세요.');
            return;
        } else {
            let memoData = JSON.parse(localStorage.getItem('memo')) ?? [];
            localStorage.setItem('memo', JSON.stringify([...memoData, memo]));
            setMemo('');
        }
    };

    return (
        <div>
            <div className={style.d_flex}>
                <MemoInput value={memo} onChange={setMemo} />
                <Button btnData={{ text: '저장', event: save, style: style.save_btn }} />
            </div>
        </div>
    );
}

export default MemoContainer;