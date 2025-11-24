function MemoInput({ value, onChange }) {
    return (
        <div>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="메모를 입력하세요." />
        </div>
    );
}

export default MemoInput;