import { useState, useEffect } from 'react';
import MemoInput from './MemoInput';
import Button from './Button';
import MemoList from './MemoList';
import style from '../assets/memo.module.css';

function MemoContainer() {
    const [memo, setMemo] = useState('');
    const [memoList, setMemoList] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('memo')) ?? [];
        setMemoList(data);
    }, []);

    const save = () => {
        if (memo.trim() === '') {
            alert('메모를 입력하세요.');
            return;
        } 

        const newMemoList = [...memoList, memo];
        localStorage.setItem('memodata', JSON.stringify(newMemoList));
        setMemoList(newMemoList);
        setMemo('');
    };

    const remove = (index) => {
        const updated = memoList.filter((_, i) => i !== index);

        // localStorage 갱신
        localStorage.setItem("memodata", JSON.stringify(updated));

        // 화면 갱신
        setMemoList(updated);
    }


    return (
        <div>
            <div className={style.d_flex}>
                <MemoInput value={memo} onChange={setMemo} />
                <Button btnData={{ text: '저장', event: save, style: style.save_btn }} />
            </div>

            <MemoList memoList={memoList} remove={remove} />
        </div>
    );
}

export default MemoContainer;