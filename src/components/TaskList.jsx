function TaskList({tasks}) {
    return (
        <>
            <h2>할 일 목록</h2>
            {tasks.length === 0 ? (
                <p>할 일 없음</p>
            ) : (
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default TaskList