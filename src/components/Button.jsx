function Button({ btnData }) {
    return (
        <button className={btnData.style} onClick={btnData.event}>{btnData.text}</button>
    );
}

export default Button;