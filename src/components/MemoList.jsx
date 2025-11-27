import MemoElem from "./MemoElem";

function MemoList({ memoList, remove }) {
    return (
        <ul>
            {memoList.map((memo, index) => (
                <MemoElem key={index} memo={memo} index={index} remove={remove}/>
            ))}
        </ul>
    )
}

export default MemoList;