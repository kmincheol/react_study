import { useState } from "react";

function MemoElem({ memo, mUpdate, mDelete }) {
    return (
        <div>
            <div>
                <div>
                    이름 : <input type="text" value={memo.name} />
                </div>
                <div>
                    내용 : <input type="text" value={memo.content} />
                </div>
                <div>
                    <button onClick={() => mUpdate()}></button>
                    <button onClick={() => mDelete(memo.id)}></button>
                </div>
            </div>

        </div>
    )
}

export default MemoElem;